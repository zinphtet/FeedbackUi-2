
import React from "react";
import './FeedbackList.css'
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { useContext } from "react";
import myContext from "../Context/Context";


const FeedbackList = ()=>{
 
   const {feedback,handlerDelete,handlerUpdate} = useContext(myContext)

  if(!feedback ||feedback.length ===0){
      return <h3 className="no_feedback">There are No feedbacks</h3>
  }
  return  <div className="feedback_list flex">
        {
            feedback.map(({id,...props}) =>(
                <FeedbackItem 
                {...props} 
                deleteItem ={handlerDelete} 
                updateItem ={handlerUpdate}
                 myId={id} 
                  key={id}
                />
            ))
        }
    </div>
}
    


export default FeedbackList;