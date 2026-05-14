import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


function App() {

  const [todo, setTodo] = useState("")//input text
  const [todos, setTodos] = useState([])
  const [showFinished,setshowFinished] = useState(true)

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      // Filter out any empty todos
      todos = todos.filter(item => item.todo && item.todo.trim() !== "")
      setTodos(todos)
    }
  },[])

  const saveToLs = (params) =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }
  

  const handleEdit=(e,id) =>{
    let t =  todos.filter(i=> i.id==id)
    setTodo(t[0]?.todo ?? "")
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLs()
  }

  const handleDelete=(e,id)=>{
    // let id = e.target.name 
    // console.log("id is"+id);
    // let index = todos.findIndex(item=>{
    //   return item.id === id;
    // })
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    // newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs()

  }

  const handleAdd=()=>{
    // Prevent adding empty todos
    if(todo.trim() === "") return
    setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
    console.log(todo)
    saveToLs()
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
    saveToLs()
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] w-1/2">
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-full" />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md '>Save</button>
        </div>
        <input type="checkbox" checked={showFinished} onChange={toggleFinished} /> Show Finished
        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No todos to display</div>}
          {todos.map(item=>{
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/2 my-3 justify-between">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div> 
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1 '><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1 '><RiDeleteBin5Fill /></button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
