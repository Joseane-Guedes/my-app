import { useState } from "react";
import ReactModal from "react-modal";
import "./styles.css";

export default function TodoList({ todoList, setTodoList }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [checked, setChecked] = useState([]);

  function deleteItemAtIndex() {
    let temporaryTodoListArray = [...todoList];
    let temporaryCheckedArray = [...checked];
    const deletedTodo = todoList[selectedIndex];

    setChecked((prevChecked) =>
      prevChecked.filter((todo) => deletedTodo !== todo)
    );

    let hasInChecked =
      checked.indexOf(todoList[selectedIndex]) !== -1 &&
      checked.indexOf(todoList[selectedIndex]);

    temporaryTodoListArray.splice(selectedIndex, 1);

    if (hasInChecked) {
      temporaryCheckedArray.splice(hasInChecked, 1);
      setChecked(temporaryCheckedArray);
    }

    setTodoList(temporaryTodoListArray);
    closeDeleteModal();
  }

  function openDeleteModal(index) {
    setIsDeleteModalOpen(true);
    setSelectedIndex(index);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return (
    <>
      <ul className="todo-list">
        {todoList.length > 0
          ? todoList.map((item, index) => (
              <li
                key={index}
                className="todo-item"
                style={{
                  textDecoration: checked.includes(item)
                    ? "line-through"
                    : "none",
                }}
              >
                {/* {index}  */}
                {item}
                <div>
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
                        return [...previousState, item];
                      })
                    }
                  />

                  <button onClick={() => openDeleteModal(index)}>Delete</button>
                </div>
              </li>
            ))
          : `No tasks to show`}
      </ul>
      <ReactModal
        overlayClassName="react-modal-overlay"
        className="react-modal"
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        aria={{
          labelledby: "modal-title",
          describedby: "modal-content",
        }}
      >
        <div className="info-modal">
          <h1 id="modal-title">Are you sure you want to delete this task?</h1>
          <div id="modal-content" className="buttons-modal">
            <button onClick={() => deleteItemAtIndex()}>Yes</button>
            <button onClick={closeDeleteModal}>No</button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
