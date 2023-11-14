import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  const handleEventClick = (event) => {
    console.log("click me", event.target.value);
  };
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            type="text"
            value="Truong"
            onClick={(event) => {
              handleEventClick(event);
            }}
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
