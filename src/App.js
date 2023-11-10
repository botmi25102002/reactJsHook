import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  let name = "Truong";
  let age = 21;
  let obj = { name: "Truong", age: "21" };
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            Hello {obj.name} - {obj.age}
          </h3>
          <p>{JSON.stringify(obj)}</p>
        </header>
      </div>
    </>
  );
};

export default App;
