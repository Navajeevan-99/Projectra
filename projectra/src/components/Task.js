import react ,{useEffect, useRef, useState} from 'react'
import './Task.css'
import { useSelector } from 'react-redux'
const Task=({pro,task,setshowtaskdetails,showtaskdetails})=>{
    let taskidref=useRef(0)
    const [taskdetails,settaskdetails]=useState({name:'',description:'',assignedfor:'',assignedby:'',startdate:'',enddate:'',boardno: 0,submitbutton: false,id:taskidref.current});
    let user =useSelector((state)=> state.user);
    const addtask=()=>{
        let tasks=JSON.parse(localStorage.getItem("task")) || [];
        tasks.push(taskdetails);
        pro(false); 
        settaskdetails({name:'',description:'',assignedfor:'',assignedby:'',startdate:'',enddate:''})    
        localStorage.setItem("task",JSON.stringify(tasks))
        taskidref.current=taskidref.current+1;
    }
   useEffect(()=>{
    if (task){
        settaskdetails({...taskdetails,...task,submitbutton: true });
    }
   },[])
    const changetaskname=(e)=>{
        settaskdetails({...taskdetails,name: e.target.value})
    }
    const changedescription=(e)=>{
        settaskdetails({...taskdetails,description: e.target.value})
    }
    const changestartdate=(e)=>{
        settaskdetails({...taskdetails,startdate : e.target.value})
    }
    const changeenddate=(e)=>{
        settaskdetails({...taskdetails,enddate : e.target.value})
    }
    const closetask=()=>{
        pro(false);
        if (setshowtaskdetails){
            setshowtaskdetails({show: false,taskno: -1})
        }
    }
    const changetask=()=>{
        let tasks=JSON.parse(localStorage.getItem("task"))
        tasks[showtaskdetails.taskno]=taskdetails;
        setshowtaskdetails({show:false,taskno:-1})
        localStorage.setItem('task',JSON.stringify(tasks))

    }
return (

    <div className='center taskcard'>
        <div className='center row taskcardinner' >
        <button onClick={closetask} style={{backgroundColor: 'rgba(0,0,0,0)',position:'absolute',top:'250px',left:' 1130px',color:'black',fontSize:'20px'}}>x</button>
        <div className="centervertical column" style={{borderRight:'2px solid black'}}>
        <input type="text" placeholder="Task name" className='sprintdetailsadd' value={taskdetails.name} onChange={changetaskname}/>
        <textarea cols={50} placeholder="Description" className='sprintdetailsadd descriptiontask' style={{width:'auto'}} value={taskdetails.description} onChange={changedescription}> 
        </textarea>
        </div>
        <div className='centervertical column'>
        <table>
        <tbody>
            <tr>
                <td className='taskdetails'>
                    Assigned for
                </td>
                <td></td>
                <td>
                    <select>
                        <option >Jeevan</option>
                        <option>Leo</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td className='taskdetails'>
                    Assigned by
                </td>
                <td></td>
                <td>
                    <p>{user.name}</p>
                </td>
            </tr>
        <tr>
            <td className='taskdetails'>
                Start Date
            </td>
            <td></td>
           <td>
        <input type="date" className='sprintdetailsadd' style={{margin:'0px'}} value={taskdetails.startdate} onChange={changestartdate}/>
            </td>
        </tr>
        <tr>
        <td className='taskdetails'>
            End Date
        </td>
        <td></td>
        <td>
        <input type="date" className='sprintdetailsadd' style={{margin:'0px'}} value={taskdetails.enddate} onChange={changeenddate}/>
        </td>
        </tr>
        <tr>
        <td className='taskdetails'>
            Background Color
        </td>
        <td></td>
        <td>
        <input type='color' className='sprintdetailsadd' style={{width:'100px',margin:'0px'}}/>
        </td>
        </tr>
        </tbody>
        </table>
       
        </div>
         {
        taskdetails.submitbutton?
        <button onClick={changetask} className='taskaddbutton'>Change</button>
        :
        <button onClick={addtask} className='taskaddbutton'> Add Task</button>}
        </div>
        
      
    </div>
)


}
export default Task;