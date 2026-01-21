import React from 'react'
import { useLocation } from 'react-router-dom'
import Headerkanban from './Headerkanban';
import Kboard from './Kboard';
const Kanban = () => {
    const {state}=useLocation();
  return (
    <div>
        <div className='center'><Headerkanban props={state} /></div>
        <div className='center row'>
        <Kboard props={{color:'red',board:'To Do'}}/>
        <Kboard props={{color:'yellow',board: 'Do Today'}}/>
        <Kboard props={{color:'blue',board: 'Progress'}}/>
        <Kboard props={{color:'green',board: 'Done'}}/>

        </div>
    </div>
  )
}

export default Kanban