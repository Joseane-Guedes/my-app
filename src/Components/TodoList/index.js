import { useState } from "react";
import "./styles.css";

import ReactModal from "react-modal";

export default function TodoList({ filteredList, todoList, setTodoList }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checked, setChecked] = useState([]);

  function handleDelItem(index) {
    let tmpArray = [...todoList];
    tmpArray.splice(index, 1);
    setTodoList(tmpArray);
    setModalIsOpen(false);
  }

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
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

                  <button onClick={handleOpenModal}>Delete</button>
                </div>
              </li>
            ))
          : `No tasks to show`}
      </ul>
      <ReactModal
        overlayClassName="react-modal-overlay"
        className="react-modal"
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <div className="info-modal">
          <h2>Are you sure you want to delete this task?</h2>
          <div className="buttons-modal">
            <button onClick={handleDelItem}>Yes</button>
            <button onClick={handleCloseModal}>No</button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
