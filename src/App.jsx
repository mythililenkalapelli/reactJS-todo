import { useState } from 'react'
import './App.css';
import TaskItem from './components/Taskitem';

function App() {

  const [newTask, setNewTask] = useState([]);
  const [myTask,setmyTask]= useState([])
  const  [completedTasks,setcompletedTask]=useState([]);


  function handleInput(e){
    let newValue= e.target.value;
    console.log(newValue)
    setNewTask(newValue);

  }
  function addTask(){
    if(newTask.trim() === "") return;   // stop empty task
  
    setmyTask(prev => [...prev, newTask]);
    setNewTask("");
  }
  
 
  function deleteTask(taskName){
       let afterDeletionTasks =myTask.filter(x=>x!=taskName)
       setmyTask(afterDeletionTasks)
    }

  function completeTask(taskName){
       let completedTasks =myTask.filter(x=> x ==taskName)
       let afterFiltering=myTask.filter(x=> x !=taskName)
       setmyTask(afterFiltering)
       setcompletedTask(prev=>[...prev,completedTasks[0]]);
       console.log("complete Tasks:",completedTasks)
    }

  return (
   <div className ='main-body d-flex justify-content-center align-items-center'>
    <div className='todo-list-mainDiv'>
      <h3> MY TO DO LIST</h3>
        <div> 
          <div className='todo-task-input-div'>
          <div className= "form-floating w-75">
          <input type ="text"className="form-control" id="floatingInput" placeholder="Todo task" onChangeCapture={(e) => {
            handleInput(e)
          }} value={newTask}/>

          <label htmlFor="floatingInput">todo task</label>
          </div>
          <button className='btn btn-primary 'id='add-button'onClick={()=>{ addTask()}}>+</button>
          </div>
                 
          <div>
          <h6>to be completed</h6>
          { myTask.length ===0 ? (<p>No tasks available</p>):(
        <ul className='task-list'>
          {
            myTask.map((task,index) =>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} completedTask={completeTask}/>
          )
        }
        </ul>
         )}
        <hr/>
        <br/>
        </div>
          
        <h6>completed Tasks </h6>
        { completedTasks.length ===0 ? (<p>No Completed Tasks available</p>):(
        <ul className='task-list'>
          {
            completedTasks.map((task,index) =>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} completedTask={completeTask}/>
            )
          }
        </ul>
        )}
      </div>
    </div>
   </div>
  )
}

export default App
