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
  const previousPage=()=>{
    setaddprojectstatus({...addprojectstatus,page: addprojectstatus.page-1 });
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
            <input type='text' value={projectdetails.name} onChange={changeprojectname} className='projectinput' placeholder='Enter your projectname ...' style={{width:'600px'}}/>
              
              <button className='nextbutton' onClick={nextPage}>Next</button>
              
            </div>
            
            </div>:addprojectstatus.page==2? <div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelProject}>X</button>
            <br/>
            <div className='addingprojectinner center'>
              
              <div className='center centervertical' style={{fontSize:'25px'}}>
              <div className='center ' style={{backgroundColor:'lightcoral',width:'150px',borderRadius:'10px',height:'70px'}} >   
              
              <input type='radio' name='board' id='kanban' value='kanban' onChange={boardChange}/>
              <label style={{marginLeft:'10px'}} for='kanban' >Kanban</label></div>
              <div className='center' style={{backgroundColor:'lightblue',width:'150px',borderRadius:'10px',height:'70px',marginTop:'10px'}}>
              <input type='radio' name='board' id='scrum' value='scrum' onChange={boardChange}/>
              <label style={{marginLeft:'10px'}} for='scrum'>Scrum</label></div></div>
              <button className='nextbutton' onClick={createProject} style={{position: 'absolute',left:'710px'}}>Create</button>
              <button className='nextbutton' onClick={previousPage} style={{position: 'absolute',left:'10px'}}>Previous</button>
            </div>
            
            </div>:<div></div>     
          
          }
        
        
    </div>
  )
}

export default Projects