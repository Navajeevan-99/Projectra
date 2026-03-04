import React, { useEffect, useState } from 'react'
import './Kboard.css'
import Task from './Task';
const Kboard = (props) => {
  const [addtaskstatus,setaddtaskstatus]=useState(false);
  const [tasksdetails,settasksdetails]=useState([])
  const [showtaskdetails,setshowtaskdetails]=useState({show: false,taskno: -1})
useEffect(()=>{
    console.log(props.props.color);
})
useEffect(()=>{
settasksdetails(JSON.parse(localStorage.getItem("task")))
},[addtaskstatus])
const showTask=()=>{
  setaddtaskstatus(true)
}
const seeandeditdetails=(i)=>{
setshowtaskdetails({...showtaskdetails,show: true,taskno: i})
console.log(i);
}
useEffect(()=>{
  console.log(showtaskdetails)
},[showtaskdetails])
useEffect(()=>{
  settasksdetails(JSON.parse(localStorage.getItem("task")))
})
  return (
    <div>
    <div className='kboard center column' style={{background: props.props.color}}>
    <h3 className='center'>{props.props.board}</h3>
    <div className='kboardinnerblock onlycolumn'>
      {
     props.props.addbutton &&
    <button onClick={showTask} style={{backgroundColor:'rgba(0,0,0,0.1)',width:'250px',borderRadius:'5px',color:'black'}}>Create +</button>}
    {tasksdetails && 
      tasksdetails.map((task,i)=>
      <div className='taskscard'>
        {
          props.props.boardno===task.boardno &&
        <button onClick={()=>{
          seeandeditdetails(task.id);
        }}>
        {task.name}</button>}
      </div>
      )
    }

    </div>
    </div>
   {
    addtaskstatus && props.props.addbutton &&
     <div className='taskaddbar'>
      <Task pro={setaddtaskstatus} />
    </div>

   }
   {showtaskdetails.show && 
    tasksdetails.map((task,i)=>
  (
      showtaskdetails.taskno===task.id &&
     <div className='taskaddbar'>
      <Task pro={setaddtaskstatus} task={task} setshowtaskdetails={setshowtaskdetails} showtaskdetails={showtaskdetails} />
    </div>
    )
)

   }
    </div>
  )
}

export default Kboard