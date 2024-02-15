import React, { useState } from 'react'
import './ItemList.css';

function ItemList() {
    const [task, setTask]= useState("");
    const [allTasks, setAllTasks] = useState([]);

    const handleChange= (e)=>{
        setTask(e.target.value);
    }

   const handleClick = ()=>{
        // let addedTasks= allTasks;
        // addedTasks.push(task);
        // setAllTasks(addedTasks);
        // console.log(addedTasks);
        if (task.trim() === "") {
            alert("Task can't be empty!");
        } else {setAllTasks([...allTasks, task])}
        setTask("");
    }

    // const handleKeyDown = (e)=> {
    //     if (e.key ==="Enter")
    //     handleClick();
    // }

  return (
    <div>
        <input value={task} onChange={handleChange} type="text" id='input-field' onKeyDown={(e)=> (e.key ==="Enter") && handleClick()}/>
        <button id='btn-add' onClick={handleClick}> Add Task </button>
        {allTasks.map((toDo)=>{
            return (
            <div className='list-section'>
                <input type="checkbox" name="" id="checkBox" />
                <p>{toDo}</p>
                <button id='btn-delete'>x</button>
            </div>
           
        )})}
    </div>
  )
}

export default ItemList