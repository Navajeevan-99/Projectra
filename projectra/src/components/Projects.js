import React, { useEffect, useState } from 'react'
import Userdetails from './Userdetails'
import Navbar from './Navbar'
import { FaPlus } from "react-icons/fa6";
import './Projects.css';
import { useNavigate } from 'react-router-dom';
const Projects =() => { 
  const navigate=useNavigate();
  const [addprojectstatus,setaddprojectstatus]=useState({add: false,page: 1});
  const [projectdetails,setprojectdetails]=useState({name:'',board:''});
  const [projects,setprojects]=useState([]);
  const addproject=()=>{
    setaddprojectstatus({...addprojectstatus,add: true});
    
  }
  const cancelProject=()=>{
    setaddprojectstatus({...addprojectstatus,add:false,page:1});
  }
  const changeprojectname=(e)=>{
      setprojectdetails({...projectdetails,name: e.target.value});  
  }
  const nextPage=()=>{
    setaddprojectstatus({...addprojectstatus,page: addprojectstatus.page+1});
  }
  const createProject=()=>{
    
    setprojects([...projects,projectdetails])
    setprojectdetails({name:'',board:''});
    setaddprojectstatus({...addprojectstatus,add: false,page: 1})
    console.log(projects);

  }
  const boardChange=async (e)=>{
    await setprojectdetails({...projectdetails,board: e.target.value});
    console.log(projectdetails);
  }
  useEffect(()=>{
    console.log(projects);
  },[projects]);
  const gotoprojectpage=(e)=>{
    console.log(e.currentTarget.id);
    navigate('/projectpage');
    
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
          {
            projects.map((project,id)=>
              <button key={id} className='projectcard' onClick={gotoprojectpage} btn-
              
              
              id={id}>
              <h2 style={{overflow: 'hidden'}}>{project.name}</h2>
              
              <hr style={{border: 'solid 1px black'}}/>             
              <p>{project.board}</p>
              </button>
            )
          }        
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
              <input type='radio' name='board' id='kanban' value='kanban' onChange={boardChange}/>
              <label htmlFor='kanban'>Kanban</label>
              <input type='radio' name='board' id='scrum' value='scrum' onChange={boardChange}/>
              <label htmlFor='scrum'>scrum</label>
              <button className='nextbutton' onClick={createProject}>Create</button>
            </div>
            
            </div>:<div></div>     
          
          }
        
        
    </div>
  )
}

export default Projects