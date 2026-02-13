const Task=()=>{
return (

    <div>
        <div className="taskcard center column">
        <input type="text" placeholder="Task name"/>
        <input type="date"/>
        <input type="date"/>
        <textarea cols={50} placeholder="Description">
        </textarea>
        </div>
    </div>
)


}
export default Task;