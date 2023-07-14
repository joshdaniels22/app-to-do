import React, { ChangeEvent } from "react";
import { useState } from "react";

function App() {
  // const [open, setOpen] = React.useState(false);
  // var tasks = ["Laundry", "Dishes", "Trash", "Shopping"];

  const [tasks, setValue] = useState(["Laundry", "Dishes", "Trash", "Shopping"]);
  const [newTask, setNewTask] = useState("");
  // setValue(["Laundry", "Dishes", "Trash", "Shopping"]);
  function handle() {
    // tasks.push(newTask)
    setValue(current => [...current, newTask])
    // console.log(tasks)
  }

  function handleText(e: ChangeEvent<HTMLInputElement>) {
    // 👇 Store the input value to local state
    setNewTask(e.target.value);
  };


  

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>


        <input
          onChange={handleText}
        />
        <button onClick={handle}>Add Task</button>

        {/* <Dropdown
      open={open}
      trigger={<button onClick={handleOpen}>Dropdown</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    /> */}

        <ul>
          {tasks.map((item, index) => (
            <li
            // className={
            //   index === selectedIndex
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            // key={item}
            // onClick={() => {
            //   setSelectedIndex(index);
            // }}
            >
              {item}
            </li>
          ))}
          {/* // i>
        // ))}
        
        //   <li>{tasks.map()}</li>
        //   <li>Clean Room</li>
        //   <li>Play Squash</li> */}
        </ul>
      </header>
    </div>
  );
}

export default App;
