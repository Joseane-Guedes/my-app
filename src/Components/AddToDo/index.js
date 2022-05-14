import { useState } from "react";
import "./styles.css";

export default function AddToDo({ todoList, setTodoList }) {
  const [newItem, setNewItem] = useState("");
  const [alertCreate, setAlertCreate] = useState("");

  function addNewItem() {
    if (newItem.length <= 0) {
      setAlertCreate("Please, add a new task");
      return;
    }

    let itemIndex = todoList.indexOf(newItem);
    if (itemIndex >= 0) {
      setAlertCreate("Repeated task");
      return;
    }

    setTodoList([...todoList, newItem]);
    setNewItem("");
    setAlertCreate("");
  }

  return (
    <>
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
      <p>{alertCreate}</p>
    </>
  );
}
