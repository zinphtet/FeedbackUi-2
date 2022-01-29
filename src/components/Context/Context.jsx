import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {useEffect} from 'react'

const myContext = createContext()
export const ContextProvider = ({children})=>{

    const [isLoading ,setLoading] = useState(true)
   
    const [feedback,setFeedback] = useState([])
  const [editItem,setEdit] = useState({
      edit:false,
  });
   
  const fetchData = async ()=>{
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data =await  response.json()
      setFeedback(data)
      setLoading(false)
  }

 useEffect(()=>{
     fetchData()
 },[])


  const handlerUpdate = (id) =>{
        const [item] = feedback.filter(item => item.id === id)
        setEdit({
            item,
            edit:true
        })
        // console.log(item)
  }
  const updateItem =async ( id , obj)=>{

    const response = await fetch(`http://localhost:5000/feedback/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(obj)
    })
    const data = await response.json()

       const feedbacks = feedback.map(item =>(
           item.id === id ? {...item , ...data} : {...item}
       ))
       setFeedback(feedbacks)
  }

    const feedbackHandler =async (newFeedback) => {
        const response = await fetch(`http://localhost:5000/feedback`,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newFeedback)
        })
        const data =await response.json()
		setFeedback([newFeedback, ...feedback]);
	};


    const handlerDelete = async (id) => {
        await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'})
		const newFeedback = feedback.filter((fedb) => fedb.id !== id);
		setFeedback(newFeedback);
	};
   


    return <myContext.Provider value={{
        feedback,
        handlerDelete,
        feedbackHandler ,
        handlerUpdate,
        updateItem,
        editItem,
        isLoading
    }}>
         {children}
    </myContext.Provider>
}

export default myContext;