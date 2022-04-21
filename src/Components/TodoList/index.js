import { useState } from "react";
import "./styles.css";

export default function TodoList({ filteredList, todoList, setTodoList }) {
  const [checked, setChecked] = useState([]);

  function delItem(index) {
    let tmpArray = [...todoList];
    tmpArray.splice(index, 1);
    setTodoList(tmpArray);
  }


  return (
    <>
      <ul className="todo-list">
        {filteredList.length > 0
          ? filteredList.map((item, index) => (
              <li
                key={item}
                className="todo-item"
                style={{
                  textDecoration: checked.includes(item)
                    ? "line-through"
                    : "none",
                }}
              >
                {item}
                <div>
                  <span>{item.text}</span>

                  <input
                    className="checkbox-item"
                    type="checkbox"
                    defaultChecked={checked.includes(item)}
                    onChange={() =>
                      setChecked((previousState) => {
                        if (previousState.includes(item)) {
                          const data = [...previousState];

                          const i = data.findIndex((i) => i === item);
                          data.splice(i, 1);

                          return [...data];
                        }
                        console.log("previousState ", previousState);
                        console.log("newState", [...previousState, item]);
                        return [...previousState, item];

                      })
                    }
                  />

                  <button
                    onClick={() => {
                    delItem(index);
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))
          : `No tasks to show`}
      </ul>
    </>
  );
}

