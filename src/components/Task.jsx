import { useState } from "react";

function Task(props) {
  const taskText = props.text;
  const [done, setDone] = useState(false);
  
  return (
    <div className="task">
      <p className={done ? "task-text task-done" : "task-text"} onClick={() => setDone(!done)}>{taskText}</p>
    </div>
  );
}

export default Task;

