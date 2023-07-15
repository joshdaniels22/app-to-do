import { ChangeEvent, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(["Make to do list..."]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    setTaskList((current) => [...current, newTask]);
  }

  function handleDeleteTask(taskIndex: number) {
    setTaskList((current) =>
      current.filter((_, index) => {
        return index !== taskIndex;
      })
    );
  }

  function handleText(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>

        <input
          onChange={handleText}
          type="text"
          className="form-control"
          placeholder="New Task"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddTask}
        >
          Add Task
        </button>

        <ul className="list-group">
          {taskList.map((item, index) => (
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
              />
              <label className="form-check-label">{item}</label>

              <button
                onClick={() => {
                  handleDeleteTask(index);
                }}
                type="button"
                className="btn-close"
                aria-label="Close"
              />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
