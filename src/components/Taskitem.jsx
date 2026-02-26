import React from "react";
function TaskItem({taskName,deleteTask,completedTask}) {
    return(
        <>
        <li className='task d-flex justify-content-between'>
         {taskName}
         <div className='task-buttons w-25 mr-5 d-flex
          justify-content-end'>
          <button className='btn btn-sm btn-success'onClick={()=>{completedTask(taskName)}}>complete</button>
          <button className='btn btn-sm btn-danger'onClick={()=>{deleteTask(taskName)}}>
            delete</button>
         </div>
         </li>
        </>
    )
}
export default TaskItem;
