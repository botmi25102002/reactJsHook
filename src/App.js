import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Truong");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Wake up at 6 a.m" },
    { id: "todo2", title: "Play badminton" },
  ]);

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };
  const handleEventClick = (event) => {
    //hook not merge state # class component
    //...spread syntax array js
    if (!address) {
      alert("Please enter address");
      return;
    }
    let newTodo = { id: "abc", title: address };
    setTodos([...todos, newTodo]); //hàm setName bị bất đồng bộ.
    setAddress("");
  };

  //for: lặp theo index.
  // for-each: lặp theo phần tử, đối tượng ở bên trong.
  // =>> map(giống với for-each): trả ra 1 array mới mà ko ảnh hưởng tới dữ liệu cũ.
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {name}</p>

          <div className="todos-container">
            {todos.map((todo) => {
              return (
                <li className="todo-child" key={todo.id}>
                  {todo.title}
                </li>
              );
            })}
          </div>
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
