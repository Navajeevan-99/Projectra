import React, { useEffect } from 'react'
import Userdetails from './Userdetails'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Projects = () => {
  const {state}=useLocation();
  useEffect(()=>{
    console.log(state);
  },[]);
  return (
    <div>
        <div>
            <Navbar props={state}/>
        </div>

    </div>
  )
}

export default Projects