import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Truong");
  const [address, setAddress] = useState("");

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };
  const handleEventClick = (event) => {
    setName(address); //hàm setName bị bất đồng bộ.
  };
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {name}</p>
          <input
            type="text"
            value={address}
            onChange={(event) => handleOnchangeInput(event)}
          />
          <button
            type="button"
            onClick={(event) => {
              handleEventClick(event);
            }}
          >
            click me
          </button>
        </header>
      </div>
    </>
  );
};

export default App;
