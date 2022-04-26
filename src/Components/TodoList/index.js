import { useState } from "react";
import ReactModal from "react-modal";
import "./styles.css";

export default function TodoList({ filteredList, todoList, setTodoList }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const [selectedIndex, setSelectedIndex]  = useState (null)

  // Modal.setAppElement('#root')

  function deleteItemAtIndex() {

    let tmpArray = [...todoList];
    tmpArray.splice(selectedIndex, 1);
    setTodoList(tmpArray);
    closeDeleteModal();
  }

  function openDeleteModal(index) {
    setIsDeleteModalOpen(true);
    setSelectedIndex(index)
 }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  // map = transformar um array em outro array.
  // forEach = realiza loop no array sem retornar nada.

  // filteredList.map((item, index) => {
  //   console.log("Sou o item", item);
  //   console.log("tipo", typeof item);
  //   console.log("Sou index", index);
  //   console.log("sou o item.text", item.text);
  // });

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
                {index} {item}
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
                        console.log("previousState ", previousState);
                        console.log("newState", [...previousState, item]);
                        return [...previousState, item];
                      })
                    }
                  />

                  <button onClick={() => openDeleteModal (index)}>Delete</button>
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
