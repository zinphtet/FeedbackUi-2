import React from "react";
import './RatingList.css'

import Rating from "../Rating/Rating";


const RatingList = ({setRatingHandle, ratingArr})=>{

    
   return <div className="rating_list flex">
        <div className="rating_inner ">
        
       { 
       ratingArr.map((rating,indx) =>(
        <Rating  rating = {rating} key={indx} setClick={setRatingHandle}/>
       ))
       }

        </div>
    </div>

}
   


export default RatingList;