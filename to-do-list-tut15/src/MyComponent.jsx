import React, { useState } from "react";

function MyComponent() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Go to gym ",
    "study react",
  ]);

  const [newTask, setNewTask] = useState("");

  function handelNewTask(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1 className="header">To-do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handelNewTask}
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>

      <ol className="ordered-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task}</span>

            <div className="task-buttons">
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
              <button className="up-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MyComponent;
