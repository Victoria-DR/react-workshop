import { useState } from "react";

import Task from "./components/Task";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <div className="app">
      <h1 className="title">To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input className="task-input" type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      </form>
      {tasks.map((task, index) => {
        return (
          <Task key={index} text={task} />
        );
      })}
    </div>
  );
}

export default App;
