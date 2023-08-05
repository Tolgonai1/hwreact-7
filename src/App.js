import './App.css';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

function App() {
    const [todos,setTodos] = useState([])
    const [value, setValue] = useState("")
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleAddTodos = (value) =>{
        const newTodo = {todo: value,
        id: Date.now(),
        complete: false}
        setTodos([...todos,newTodo])
        setValue("")
        console.log(newTodo.id)
    }
    const deleteTodo = (todo)=>{
        const deleteFilter = todos.filter((text) =>{
            return todo !== text
        })
        setTodos(deleteFilter)
    }
    const handleToggle = (id)=>{
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo
            return {
                ...todo,
                complete: !todo.complete
            }
            }

        ))
    }
  return (
    <div className="App">
         <div className='form-wrapper'>
            <h1 className='title'>Todo List</h1>
            <input className='todo-input' type="text" value={value} placeholder='Enter your task' onChange={(e)=>handleChange(e)}/>
            <button className='todo-btn' onClick={()=>handleAddTodos(value)}>ADD</button>
        </div>
        <div className='wrapper-list'>
            <ul>
                {todos.map((todo,idx)=> (
                    <li style={{textDecoration: todo.complete ? "line-through" : null}} key={idx}>{todo.todo}
                        <div className="icons">
                             <FontAwesomeIcon
                                 onClick={()=> handleToggle(todo.id)}
                                 className='icon-check' icon={faCheck}
                                 style={{textDecoration: 'line-through'}}/>
                             <FontAwesomeIcon onClick={()=>deleteTodo(todo)} className='icon-delete' icon={faTrash}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default App;
