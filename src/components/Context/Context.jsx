import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const myContext = createContext()
export const ContextProvider = ({children})=>{
   
    const [feedback,setFeedback] = useState([
        {
            id:1,
            rating :10,
            msg :'This is from context 1'
        }
    ])
  const [editItem,setEdit] = useState({
      edit:false,
  });
  const handlerUpdate = (id) =>{
        const [item] = feedback.filter(item => item.id === id)
        setEdit({
            item,
            edit:true
        })
        // console.log(item)
  }
  const updateItem = ( id , obj)=>{
 
       const feedbacks = feedback.map(item =>(
           item.id === id ? {...item , ...obj} : {...item}
       ))
       setFeedback(feedbacks)
        //    console.log(obj)
  }

    const feedbackHandler = ({ rating, msg }) => {
		setFeedback([{ id: uuidv4(), rating, msg }, ...feedback]);
	};


    const handlerDelete = (id) => {
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
    }}>
         {children}
    </myContext.Provider>
}

export default myContext;