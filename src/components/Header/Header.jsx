import React from "react";
import './Header.css'
import { FaInfo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = ()=>{
   const navigate = useNavigate();
  return  <div className="header flex" >
        <h2 onClick={()=>{
            navigate('/')
        }} >Feedback Ui</h2 > 
        
        <FaInfo title="About app" onClick={()=>{
            navigate('/about')
        }} />
       
        
   </div>
}

  

export default Header;