
import { useDispatch } from "react-redux"
import "./App.css"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from './Components/TodoList/TodoList'
import { bindActionCreators } from "redux";
import  { addTodo, deleteTodo, editTodo, finishTodo } from "./Slices/TodoSlices";



function App() {

const dispatch = useDispatch();
const  actions = bindActionCreators({ addTodo, deleteTodo, editTodo, finishTodo},dispatch);
 
  return (

    
    <div>
     
      <h1 className='heading'> Todo App </h1>
        <hr />
        <AddTodo addTodo={actions.addTodo}/>

    <TodoList deleteTodo = {actions.deleteTodo} finishedTodo={actions.finishTodo  } editTodo={actions.editTodo}/>
   
 
    </div>
  )
}

export default App
