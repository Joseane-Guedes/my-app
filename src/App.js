import { useState } from "react";
import "./App.css";
import InputSearch from "./Components/InputSearch";
import Tasks from "./Components/Task";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  return (
    <div className="container">
      <h1 className="list"> ToDo List </h1>
      <InputSearch todoList={todoList} setFilteredList={setFilteredList} />
      <Tasks todoList={todoList} setTodoList={setTodoList} />
      <TodoList
        filteredList={filteredList}
        setTodoList={setTodoList}
        todoList={todoList}
      />
    </div>
  );
}

export default App;
