import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaPlus } from "react-icons/fa6";
export const Projectpage = () => {
    let [addsprintstatus,setaddsprintstatus]=useState({add:false,previous:'',page: 1})
    const [sprint,setsprint]=useState({name:'',startdate:'',enddate:'',description:''})
    const [sprints,setsprints]=useState([]);
    const setaddsprint=()=>{
        setaddsprintstatus({...addsprintstatus,add : true})
    }
     const cancelSprint=()=>{
    setaddsprintstatus({...addsprintstatus,add:false,page:1})
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
    setsprint({...sprint,startdate: e.target.value})
  }
  const changedescription=(e)=>{
    setsprint({...sprint,description : e.target.value })
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
            addsprintstatus.add && 
                addsprintstatus.page==1?<div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelSprint}>X</button>
            <br/>
            <div className='addingprojectinner'>
            <input type='text' value={sprint.name} onChange={changesprintname} className='projectinput' placeholder='Enter your sprintname ...'/>
            <input type='date' className='projectinput' value={sprint.startdate} onChange={changestartdate}/>
            <input type='date' className='projectinput' value={sprint.enddate} onChange={changeenddate}/>
              <button className='nextbutton' onClick={nextPage} style={{top: '70%'}}>Next</button>
            
            </div>
            
            </div>:addsprintstatus.page==2? <div className='addingprojectouter'>
            <button className='closebutton' onClick={cancelSprint}>X</button>
            <br/>
            <div className='addingprojectinner'>              
              <textarea placeholder='Enter the decription' cols='40' className='projectinput projectdescription' style={{height:'100px'}} value={sprint.description}
              onChange={changedescription}> 
              </textarea>

              <button className='nextbutton' onClick={nextPage} style={{left: '50%',top:'53%'}}>Create Sprint</button>
            </div>
            
            </div>:<div></div>  
            
        }
    </div>
  )
}
