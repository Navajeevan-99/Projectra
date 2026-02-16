import react from 'react'
import './Task.css'
const Task=()=>{
return (

    <div>
        <div className="taskcard centervertical column">
        <input type="text" placeholder="Task name" className='sprintdetailsadd'/>
        <input type="date" className='sprintdetailsadd'/>
        <input type="date" className='sprintdetailsadd'/>
        <textarea cols={50} placeholder="Description" className='sprintdetailsadd' style={{border: 'none',borderBottom: 'solid 2px black',width:'auto',borderRadius:'0px'}}>
        </textarea>
        </div>
    </div>
)


}
export default Task;