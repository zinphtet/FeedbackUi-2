import React from "react";
import './Form.css'
import RatingList from "../RatingList/RatingList";
import Warning from "../Warning/Warning";
import { useState } from "react";
import { useContext } from "react";
import myContext from "../Context/Context"; 
import { useEffect } from "react";

const Form = ()=>{

   const {feedbackHandler,editItem,updateItem }  = useContext(myContext)
  
   useEffect(()=>{
     if(editItem.edit){
      setText(editItem.item.msg)
     }
       console.log(editItem)
   },[editItem])

  const ratingArr = [1,2,3,4,5,6,7,8,9,10]
  const [text , setText] = useState('')
  const [rating,setRating] = useState(null)
   const handleInput = (e)=>{
     setText(e.target.value)
   }
   const handleSubmit =  (e)=>{
       e.preventDefault();
    
    if(text.length<10 || !rating ) return alert('Select rating and text must be >= 10 chars')
    if(editItem.edit ===true){
     updateItem(editItem.item.id ,{
      rating : rating,
      msg :text,
     } )
     editItem.edit =false;
    }else{
      feedbackHandler({
        rating : rating,
        msg :text,
       })
    }
    

     setText('')
 } 
 const handleRating = (rating)=>{
     setRating(rating)
 }


  return <>
     <form onSubmit={handleSubmit} >
    <RatingList setRatingHandle = {handleRating} ratingArr={ratingArr}/>
     <div className="group">
        <input className="feedback_input" value={text} type="text" onChange={handleInput} placeholder="Enter your feedback.."/>
        <button type="submit" >Submit</button>
     </div>
    {(text.length >=1 && text.length < 10 )?<Warning/> : ''} 
    </form>
  </>
      
}

export default Form;