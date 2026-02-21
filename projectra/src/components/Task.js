import react from 'react'
import './Task.css'
const Task=()=>{
return (

    <div className='center taskcard'>
        <div className='center row taskcardinner'>
        <div className="centervertical column">
        <input type="text" placeholder="Task name" className='sprintdetailsadd'/>
        <textarea cols={50} placeholder="Description" className='sprintdetailsadd descriptiontask' style={{width:'auto'}}>
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
                        <option>Jeevan</option>
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
                    <p></p>
                </td>
            </tr>
        <tr>
            <td className='taskdetails'>
                Start Date
            </td>
            <td></td>
           <td>
        <input type="date" className='sprintdetailsadd' style={{margin:'0px'}} />
            </td>
        </tr>
        <tr>
        <td className='taskdetails'>
            End Date
        </td>
        <td></td>
        <td>
        <input type="date" className='sprintdetailsadd' style={{margin:'0px'}}/>
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
        </div>
    </div>
)


}
export default Task;