import React, { useEffect } from 'react'
import './Userdetails.css'
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Userdetails = () => {
  const user=useSelector((state)=> state.user);

  return (
    <div className='user'>
        <div className='userdetails center row'>
            
            <FaRegUserCircle style={{fontSize: 25,margin: 10}}/>
            <p style={{margin: 10}}>{user.name}</p>

        </div>
    </div>
  )
}

export default Userdetails