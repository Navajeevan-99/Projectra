import React from 'react'
import Userdetails from './Userdetails'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
const Navbar = ({state}) => {
  return (
    <div className='Navbarouter'>

        <div className='Navbarinner'>
           <div>
          <button className='Navmenu'><GiHamburgerMenu /></button>
        </div>
        <div className='usernavbar'>
          <Userdetails props={state}/>
        </div>
       
        
        </div>
    </div>
  )
}

export default Navbar