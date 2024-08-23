  
import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/TodoContext';
    
    function TodoList() {
       
       const {list, setList} = useContext(TodoContext)
      return (
        <div>
          {
            list.length>0 && list.map((todo)=>
            <Todo key={todo.id} 
            id={todo.id}
            todoData={todo.todoData}
            isFinished={todo.finished} 
            changeFinished={(isFinished)=>{
              console.log("isFinished", isFinished);
              const updateList= list.map((t)=>{
                if(t.id == todo.id){
                  todo.finished = isFinished
                }
                return t;

              })
              setList(updateList)
            }}
            onDelete={()=>{
              const updateList = list.filter(t => t.id != todo.id);
              setList(updateList);
            }}
            onEdit={(todoText)=>{
              const updateList = list.map((t) =>{
                if(t.id == todo.id){
                  todo.todoData = todoText;
                }
                return t;
              })
              setList(updateList)
            }}
            

            />)
          }
        </div>
      )
    }
    
    export default TodoList
    