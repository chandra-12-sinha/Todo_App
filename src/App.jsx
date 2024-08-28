import { useReducer } from "react"
import "./App.css"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from './Components/TodoList/TodoList'
import TodoContext from "./Context/TodoContext"
import TodoDispatchContext from "./Context/TodoDispatchContext"
import TodoReducer from "./Reducer/TodoReducer"

function App() {



  const [list, dispatch] = useReducer(TodoReducer, []); 

 
  return (

    
    <div>
      <TodoContext.Provider value= {{list}}>
        <TodoDispatchContext.Provider value={{dispatch}}>
      <h1 className='heading'> Todo App </h1>
        <hr />
        <AddTodo/>

    <TodoList/>
    </TodoDispatchContext.Provider>
    </TodoContext.Provider>
    </div>
  )
}

export default App
