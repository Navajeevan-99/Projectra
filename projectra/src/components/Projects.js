import React, { useEffect, useState } from 'react'
import Userdetails from './Userdetails'
import Navbar from './Navbar'
import { FaPlus } from "react-icons/fa6";
import './Projects.css'
const Projects =() => { 
  const [addprojectstatus,setaddprojectstatus]=useState({add: false,page: 1});
  const [projectdetails,setprojectdetails]=useState({name:'',board:''});
  const addproject=()=>{
    setaddprojectstatus({...addprojectstatus,add: true});
    
  }
  const cancelProject=()=>{
    setaddprojectstatus({...addprojectstatus,add:false});
  }
  const changeprojectname=(e)=>{
      setprojectdetails({...projectdetails,name: e.target.value});  
  }
  const nextPage=()=>{
    setaddprojectstatus({...addprojectstatus,page: addprojectstatus.page+1});
  }
  const createProject=()=>{
    
  }
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <br/>
        
        <div className='container center'>
          <div className='center column'>
          <button className='center column projectbutton' onClick={addproject}>
            <div className='projectaddingbutton center'>
            <FaPlus />
            </div>
            <p>Create Project</p>   
            </button>                 
          </div>         
        </div>
         {addprojectstatus.add && addprojectstatus.page==1?<div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelProject}>X</button>
            <br/>
            <div className='addingprojectinner'>
            <input type='text' value={projectdetails.name} onChange={changeprojectname} className='projectinput' placeholder='Enter your projectname ...'/>
              
              <button className='nextbutton' onClick={nextPage}>Next</button>
            
            </div>
            
            </div>:addprojectstatus.page==2? <div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelProject}>X</button>
            <br/>
            <div className='addingprojectinner'>
            <input type='text' value={projectdetails.name} onChange={changeprojectname} className='projectinput' placeholder='Enter your projectname ...'/>
              
              <button className='nextbutton' onClick={createProject}>Create</button>
            
            </div>
            
            </div>:<div></div>     
          
          }
        
        
    </div>
  )
}

export default Projects