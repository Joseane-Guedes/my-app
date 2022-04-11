import "./styles.css";

export default function TodoList({ filteredList, setTodoList, todoList }) {
  function delItem(index) {
    let tmpArray = [...todoList];
    tmpArray.splice(index, 1);
    setTodoList(tmpArray);
  }

  return (
    <ul className="todo-list">
      {filteredList.length > 0
        ? filteredList.map((item, index) => (
            <li key={index} className="todo-item">
              {item}
              <button onClick={() => delItem(index)}> Delete </button>
            </li>
          ))
        : `No tasks to display`}
    </ul>
  );
}
