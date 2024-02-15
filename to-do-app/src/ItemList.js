import React, { useState } from 'react'

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
        if (task=== "") {
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
        <button onClick={handleClick}> Add Task </button>
        {allTasks.map((toDo)=>{return (
            <ul>
                <li>{toDo}</li>
            </ul>
        )})}
    </div>
  )
}

export default ItemList