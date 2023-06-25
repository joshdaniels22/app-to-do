import logo from './logo.svg';
import * as React from 'react';
import './App.css';

function App() {

  // let form = document.getElementById('form');
  // form.onsubmit = handleFormSubmit;




  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>



      <textarea id="textarea">hsai</textarea>
      <button id="button1">
      Add Task
    </button>
  

    <Dropdown
      open={open}
      trigger={<button onClick={handleOpen}>Dropdown</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
          <ul>
  <li>Buy Milk</li>
  <li>Clean Room</li>
  <li>Play Squash</li>
</ul>
      </header>

    </div>
  );


}

const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};



// async function handleFormSubmit(e) {
//   e.preventDefault();
//   disable(textarea);
//   disable(button);
//   show(loadingMessage);
//   hide(errorMessage);
//   try {
//     await submitForm(textarea.value);
//     show(successMessage);
//     hide(form);
//   } catch (err) {
//     show(errorMessage);
//     errorMessage.textContent = err.message;
//   } finally {
//     hide(loadingMessage);
//     enable(textarea);
//     enable(button);
//   }
// }

export default App;
