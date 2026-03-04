import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Headerkanban from './Headerkanban';
import Kboard from './Kboard';
import Navbar from './Navbar';
import './Kanban.css'
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
const Kanban = () => {
    const {state}=useLocation();
    const [tasksdetails,settasksdetails]=useState([]);
  return (
    <div>
        <div>
        <Navbar/>
        </div>
       
        {/* <div className='center'><Headerkanban props={state} /></div> */}
        
        <div className='center row mainboard'>
          
        <Kboard props={{color:'lightcoral',board:'To Do',addTask: true,addbutton:true,boardno: 0}}/>
        <Kboard props={{color:'lightyellow',board: 'Do Today',boardno: 1}}/>
        <Kboard props={{color:'lightblue',board: 'Progress',boardno:2}}/>
        <Kboard props={{color:'lightgreen',board: 'Done',boardno:3}}/>

        </div>
    </div>
  )
}

export default Kanban