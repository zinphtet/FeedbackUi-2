import React from "react";
import './FeedbackInfo.css'
import myContext from "../Context/Context";
import { useContext } from "react";

const FeedbackInfo = ()=>{
     const {feedback} = useContext(myContext)
    const totalReview = feedback.length;
    const avgRating = (feedback.reduce((acc,cur)=>{
               return acc + Number(cur.rating)
    },0)/totalReview).toFixed(1)
    return (
        <div className="feedback_info ">
            <h3>Total Reviews <span className="info">{totalReview}</span> </h3>
            <h3>Avg: Rating  <span className="info">{isNaN(avgRating) ?0: avgRating}</span> </h3>
        </div>
    )
}

export default FeedbackInfo;