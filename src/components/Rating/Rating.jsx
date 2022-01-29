import React from "react";
import './Rating.css'

const Rating = ({rating,setClick})=>{
    const ratingHandler = (e)=>{
        e.stopPropagation();
        setClick(e.target.textContent)   
        Array.from(document.querySelectorAll('.form_rating')).map(each=>{
            each.classList.remove('select')
        })
        e.target.classList.toggle ('select')

    } 
    return <div className="form_rating" onClick={ratingHandler}>
              {rating}
          </div>
    
}
 

export default Rating;