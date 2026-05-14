import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";


function App() {

  const [todo, setTodo] = useState("")//input text
  const [todos, setTodos] = useState([

  ])


  const handleEdit=() =>{
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos.filter(item=>{
      return item.id!=id
    });
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  const handleDelete=(e,id)=>{
    // let id = e.target.name 
    console.log("id is"+id);

  }

  const handleAdd=()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
    console.log(todo)
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox=(e)=>{
    let id = e.target.name 
    // todos.filter()
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-screen ">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-80" />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-6 '>Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.map(item=>{
            return <div key={item.id} className="todo flex w-1/3 my-3 justify-between">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div> 
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1 '>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1 '>Delete</button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
