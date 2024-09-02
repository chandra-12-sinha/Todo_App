
import { useDispatch } from "react-redux"
import "./App.css"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from './Components/TodoList/TodoList'
import { bindActionCreators } from "redux";
import { addTodo, deleteTodo, finishedTodo, editTodo } from "./Action/TodoAction";


function App() {

const dispatch = useDispatch();
const actions = bindActionCreators({ addTodo, deleteTodo, finishedTodo, editTodo},dispatch)
 
  return (

    
    <div>
     
      <h1 className='heading'> Todo App </h1>
        <hr />
        <AddTodo addTodo={actions.addTodo}/>

    <TodoList deleteTodo = {actions.deleteTodo} finishedTodo={actions.finishedTodo} editTodo={actions.editTodo}/>
   
 
    </div>
  )
}

export default App
