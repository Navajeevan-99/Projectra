import React from 'react'
import Userdetails from './Userdetails'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import {useDispatch,useSelector} from 'react-redux';
import { setUserDetails } from './store/userSlice';
const Navbar = () => {
  return (
    <div className='Navbarouter'>

        <div className='Navbarinner'>
           <div>
          <button className='Navmenu'><GiHamburgerMenu /></button>
        </div>
        <div className='projectname centervertical'>
          <p>Projectra</p>
        </div>
        <div className='center searchouter'>
          <div className='searchinner center'>
            <FaSearch className='searchicon'/>
            <input type='text' className='searchbox' placeholder='Search here ...'/>
          </div>
        </div>
        <div className='usernavbar'>
          <Userdetails/>
        </div>
       
        
        </div>
        <br/>
        <div className='navbardown'>
        
        </div>
    </div>
  )
}

export default Navbar