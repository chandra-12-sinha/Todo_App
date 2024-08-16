import "./AddTodo.css"

function AddTodo() {
  return (
    <div className='add-wrapper'>  
      <input className='input' type="text" placeholder='Enter a new todo..' />
    <button>Add</button>
    </div>
  )
}

export default AddTodo
