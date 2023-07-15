import { ChangeEvent } from "react";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([""]);
  const [newTask, setNewTask] = useState("");

  function handle() {
    setTaskList((current) => [...current, newTask]);
  }

  function handleText(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>

        <input onChange={handleText} />

        <button onClick={handle}>Add Task</button>

        <ul>
          {taskList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
