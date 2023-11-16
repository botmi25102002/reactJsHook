import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

const App = () => {
  let [name, setName] = useState("Truong");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Wake up at 6 a.m", type: "T" },
    { id: "todo2", title: "Play badminton", type: "T" },
    { id: "todo3", title: "Play game", type: "R" },
    { id: "todo4", title: "Read books", type: "R" },
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
    let newTodo = { id: Math.floor((Math.random() * 10000) + 1), title: address };
    setTodos([...todos, newTodo]); //hàm setName bị bất đồng bộ.
    setAddress("");
  };
  const deleteDataTodo = (id) => {
    let currentTodo = todos.filter(item => item.id != id)
    setTodos(currentTodo);
  }

  //for: lặp theo index.
  // for-each: lặp theo phần tử, đối tượng ở bên trong.
  // =>> map(giống với for-each): trả ra 1 array mới mà ko ảnh hưởng tới dữ liệu cũ.
  return (
    <>

      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {name}</p>
          <Todo todos={todos} title={"All todo"} deleteDataTodo={deleteDataTodo} />

          {/* hàm filter trả về 1 array sau khi đã kiểm tra điều kiện */}
          <Todo todos={todos.filter(item => item.type === "T")} title={`T's title`} deleteDataTodo={deleteDataTodo} />
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
