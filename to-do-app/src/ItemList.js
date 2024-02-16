import React, { useState } from 'react';
import './ItemList.css';

function ItemList() {
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  const handleClick = () => {
    if (task.trim() === '') {
      alert("Task can't be empty!");
    } else {
      setAllTasks([...allTasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete the task?');
    if (confirmed) {
      const updatedTasks = allTasks.filter((_, i) => i !== index);
      setAllTasks(updatedTasks);
      const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <div>
      <input
        placeholder="What's on your agenda?"
        value={task}
        onChange={handleChange}
        type="text"
        id="input-field"
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      />
      <button id="btn-add" onClick={handleClick}>
        Add Task
      </button>
      {allTasks.map((toDo, index) => (
        <div className="list-section" key={index}>
          <input
            type="checkbox"
            name=""
            id="check-box"
            checked={completedTasks[index] || false}
            onChange={() => handleCheckboxChange(index)}
          />
          <p style={{ textDecoration: completedTasks[index] ? 'line-through' : 'none' }}>{toDo}</p>
          <button onClick={() => handleDelete(index)} id="btn-delete">
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
