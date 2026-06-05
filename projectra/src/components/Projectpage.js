import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './Projectpage.css'
export const Projectpage = () => {
  const navigate=useNavigate()
    let [addsprintstatus,setaddsprintstatus]=useState({add:false,previous:'',page: 1})
    const [sprint,setsprint]=useState({name:'',startdate:'',enddate:'',description:''})
    const [sprints,setsprints]=useState([]);
    const setaddsprint=()=>{
        setaddsprintstatus({...addsprintstatus,add : true})
    }
     const cancelSprint=()=>{
    setaddsprintstatus({...addsprintstatus,add:false,page:1})
    setsprint({name:'',startdate:'',enddate:'',description:''});
  }
   const changesprintname=(e)=>{
      setsprint({...sprint,name: e.target.value});  
  }
  const nextPage=()=>{
    console.log(addsprintstatus.page);
    setaddsprintstatus({...addsprintstatus,page : addsprintstatus.page+1});
  }
  const changestartdate=(e)=>{
    console.log(e.target.value);
    setsprint({...sprint,startdate: e.target.value})
  }
  const changeenddate=(e)=>{
    console.log(e.target.value);
    setsprint({...sprint,enddate: e.target.value})
  }
  const changedescription=(e)=>{
    setsprint({...sprint,description : e.target.value })
  }
  const createSprint=()=>{
    setsprints([...sprints,sprint]);
    setsprint({name:'',startdate:'',enddate:'',description:''});
  }
  const gotoboard=(e)=>{
    console.log(e.currentTarget.id);
    navigate('/kanban');
    
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
            {
            sprints.map((sprint,id)=>
              <button key={id} className='projectcard' onClick={gotoboard}             
              id={id}>
              <h2 style={{overflow: 'auto',scrollbarWidth:'none'}}>{sprint.name}</h2>         
              
              </button>
            )
          } 
                        
        </div>
        
        {
            addsprintstatus.add && 
                addsprintstatus.page==1?<div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelSprint}>X</button>
            <br/>
            <div className='addingprojectinner center' >
             <table > 
              <tbody>
                <tr><td> Sprint Name</td><td></td>
                  <td>
            <input type='text' value={sprint.name} onChange={changesprintname}  className='sprintinput' placeholder='Enter your sprintname ...' style={{width:'200px',marginTop:'0px'}}/></td></tr>
            <tr>
              <td>Start Date</td><td></td>
              <td>
            <input type='date'  value={sprint.startdate} onChange={changestartdate} className='sprintinput'/></td></tr>
            <tr>
              <td>End Date</td><td></td>
              <td>
            <input type='date'  value={sprint.enddate} onChange={changeenddate} className='sprintinput' /></td></tr></tbody></table>
              <button className='nextbutton' onClick={nextPage} style={{top: '40%',left:'20%'}}>Next</button>
            
            </div>
            
            </div>:addsprintstatus.page==2? <div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelSprint}>X</button>
            <br/>
            <div className='addingprojectinner'>              
              <textarea placeholder='Enter the decription' cols='40' className='projectinput projectdescription' style={{height:'100px'}} value={sprint.description}
              onChange={changedescription}> 
              </textarea>

              <button className='nextbutton' onClick={createSprint} style={{left: '50%',top:'53%'}}>Create Sprint</button>
            </div>
            
            </div>:<div></div>  
            
        }
    </div>
  )
}
