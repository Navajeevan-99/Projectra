import React, { useEffect, useState } from 'react'
import './Kboard.css'
import Task from './Task';
const Kboard = (props) => {
  const [addtaskstatus,setaddtaskstatus]=useState(true);
useEffect(()=>{
    console.log(props.props.color);
})
const showTask=()=>{
  
}
  return (
    <div>
    <div className='kboard center column' style={{background: props.props.color}}>
    <h3 className='center'>{props.props.board}</h3>
    <div className='kboardinnerblock onlycolumn'>
      {
     props.props.addbutton &&
    <button onClick={showTask} style={{backgroundColor:'rgba(0,0,0,0.1)',width:'250px',borderRadius:'5px',color:'black'}}>Create +</button>}
    </div>
    </div>
   {
    addtaskstatus && props.props.addbutton &&
     <div className='taskaddbar'>
      <Task/>
    </div>

   }
    </div>
  )
}

export default Kboard