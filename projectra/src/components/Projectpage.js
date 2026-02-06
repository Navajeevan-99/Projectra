import React, { useState,useRef } from 'react'
import Navbar from './Navbar'
import { FaPlus } from "react-icons/fa6";
export const Projectpage = () => {
    let addsprintstatus=useRef({add:'false',previous:'',page: 1})
    const [sprint,setsprint]=useState({name:'',startdate:'',enddate:'',description:''})
    const [sprints,setsprints]=useState([]);
    const setaddsprint=()=>{
        addsprintstatus.current.add=true;
    }
     const cancelSprint=()=>{
    addsprintstatus.current={...addsprintstatus.current,add:false,page:1}
  }
   const changesprintname=(e)=>{
      setsprint({...sprint,name: e.target.value});  
  }
  const nextPage=()=>{
    addsprintstatus.current={...addsprintstatus.current,page: addsprintstatus.current.page+1};
  }
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='container center'>
            <div className='center column'>
                <button className='projectbutton center column' onClick={setaddsprint}>
                    <div className='center projectaddingbutton '>
                    <FaPlus/>
                     </div>
                    <p>Create sprint</p>                    
                </button>               
            </div>            
        </div>
        {
            addsprintstatus.current.add && 
                addsprintstatus.current.page?<div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelSprint}>X</button>
            <br/>
            <div className='addingprojectinner'>
            <input type='text' value={sprint.name} onChange={changesprintname} className='projectinput' placeholder='Enter your sprintname ...'/>
              
              <button className='nextbutton' onClick={nextPage}>Next</button>
            
            </div>
            
            </div>:addsprintstatus.current.page==2? <div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelSprint}>X</button>
            <br/>
            <div className='addingprojectinner'>              
             
              <button className='nextbutton' onClick={nextPage}>Next</button>
            </div>
            
            </div>:<div></div>  
            
        }
    </div>
  )
}
