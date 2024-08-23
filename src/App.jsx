import { useState } from "react"
import "./App.css"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from './Components/TodoList/TodoList'
import TodoContext from "./Context/TodoContext"

function App() {


  const[list, setList] = useState([
    { id:1, todoData: 'todo1', finished: false},
    { id:2, todoData: 'todo2', finished: true},
  ])


  return (

    
    <div>
      <TodoContext.provider value= {{list, setList}}>
      <h1 className='heading'> Todo App </h1>
        <hr />
        <AddTodo updateList={(todo)=> setList([
          ...list,{id: list.length +1, todoData:todo, finished:false}
        ])}/>

    <TodoList/>
    </TodoContext.provider>
    </div>
  )
}

export default App
