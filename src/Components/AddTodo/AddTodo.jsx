// import { useContext, useState } from "react"
import "./AddTodo.css"
// import TodoDispatchContext from "../../Context/TodoDispatchContext";
import { useState } from "react";

function AddTodo({addTodo}) {


    const[inputText, setInputText] = useState('');
  
  return (

    <div className='add-wrapper'>  
      <input 
      className='input'
       type="text"
        placeholder='Enter a new todo..'
         value={inputText}  
         onChange={(e)=>setInputText(e.target.value)}/>
    
    <button
    onClick={()=>{
      addTodo(inputText);
      setInputText('');
    }}> Add</button>
    
    </div>
  )
}

export default AddTodo
