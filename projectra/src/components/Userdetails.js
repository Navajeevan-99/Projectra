import React from 'react'
import './Userdetails.css'
import { FaRegUserCircle } from "react-icons/fa";
const Userdetails = ({state}) => {
  return (
    <div className='user'>
        <div className='userdetails center row'>
            
            <FaRegUserCircle style={{fontSize: 25,margin: 10}}/>
            <p style={{margin: 10}}>{state.name}</p>

        </div>
    </div>
  )
}

export default Userdetails