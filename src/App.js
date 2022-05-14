import { useState } from "react";
import AddToDo from "./Components/AddToDo";
import InputSearch from "./Components/InputSearch";
import TodoList from "./Components/TodoList";
import "./App.css";


export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  return (
    <div className="container">
      <h1 className="list"> To Do List </h1>
      <InputSearch todoList={todoList} setFilteredList={setFilteredList} />
      <AddToDo todoList={todoList} setTodoList={setTodoList} />
      <TodoList
        filteredList={filteredList}
        setTodoList={setTodoList}
        todoList={todoList}
      />
    </div>
  );
}


