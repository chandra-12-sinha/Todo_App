import "./App.css"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from './Components/TodoList/TodoList'

function App() {
  return (
    <div>
      <h1 className='heading'>
        Todo App
        </h1>
        <hr />
        <AddTodo/>
    <TodoList/>
    </div>
  )
}

export default App
