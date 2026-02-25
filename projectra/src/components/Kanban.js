import React from 'react'
import { useLocation } from 'react-router-dom'
import Headerkanban from './Headerkanban';
import Kboard from './Kboard';
import Navbar from './Navbar';
import './Kanban.css'
const Kanban = () => {
    const {state}=useLocation();
    
  return (
    <div>
        <div>
        <Navbar/>
        </div>

        {/* <div className='center'><Headerkanban props={state} /></div> */}

        <div className='center row mainboard'>
        <Kboard props={{color:'lightcoral',board:'To Do',addTask: true,addbutton:true}}/>
        <Kboard props={{color:'lightyellow',board: 'Do Today'}}/>
        <Kboard props={{color:'lightblue',board: 'Progress'}}/>
        <Kboard props={{color:'lightgreen',board: 'Done'}}/>

        </div>
    </div>
  )
}

export default Kanban