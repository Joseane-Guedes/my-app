import { useState } from "react";
import "./styles.css";

export default function Tasks({ todoList, setTodoList }) {
  const [newItem, setNewItem] = useState("");

  function addNewItem() {
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

  return (
    <div className="new-item">
      <input
        className="todo-form__input"
        placeholder="Create a new task"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        type="text"
      />
      <button onClick={() => addNewItem()}> Save </button>
    </div>
  );
}
