import { useState } from "react";
import "./App.css";
import InputSearch from "./Components/InputSearch";

function App() {
  let [todoList, setTodoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let [newItem, setNewItem] = useState("");


  function addNewItem () {
    if (newItem.length <= 0) {
      alert("Please, add a new task");
      return;
    }

    let itemIndex = todoList.indexOf(newItem);
    if (itemIndex >= 0) {
      alert("Repeated task");
      return;
    }

    setTodoList([...todoList, newItem]);
    setNewItem("");
  }

  function delItem(index) {
    let tmpArray = [...todoList];
    tmpArray.splice(index, 1);

    setTodoList(tmpArray);
  }

  const filteredList = todoList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <h1 className="list"> ToDo List </h1>
      <InputSearch setSearch={setSearchTerm} search={searchTerm} />
      <div className="new-item">
        <input
          className="todo-form__input"
          placeholder="Create a new task"
          value={newItem}
          onChange={(value) => setNewItem(value.target.value)}
          type="text"
        />
        <button onClick={() => addNewItem ()}> Save </button>
      </div>

      <ul className="todo-list">
        {filteredList.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => delItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
