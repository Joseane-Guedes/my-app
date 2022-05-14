import { useState } from "react";
import ReactModal from "react-modal";
import "./styles.css";

export default function TodoList({ filteredList, todoList, setTodoList }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [checked, setChecked] = useState([]);


  function deleteItemAtIndex() {
    let temporaryTodoListArray = [...todoList];
    let temporaryCheckedArray = [...checked];
    let deletedTodo = todoList[selectedIndex];

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


  if ( filteredList.length < 1 && todoList.length > 0 ) {
    return  <h3 className="todo-list">Sorry, nothing found/no matches!</h3>
  }
  // Escrever console.log que me mostra que a lista filtrada esta vazia.

  console.log('filteredList is empty?', filteredList.length < 1)

  // Escrever segundo log que mostra que existe tarefas cadastradas.
  console.log('todoList is not empty?', todoList.length > 0 )


  return (

    <>
      <ul className="todo-list">
        {filteredList.length > 0
          ? filteredList.map((item, index) => (
              <li
                key={index}
                className="todo-item"
                style={{
                  textDecoration: checked.includes(item)
                    ? "line-through"
                    : "none",
                }}
              >
                {/* {index}   */}
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
          labelled: "modal-title",
          describedby: "modal-content",
        }}
      >
        <div className="info-modal">
          <h3 id="modal-title">Are you sure you want to delete this task?</h3>
          <div id="modal-content" className="buttons-modal">
            <button onClick={() => deleteItemAtIndex()}>Yes</button>
            <button onClick={closeDeleteModal}>No</button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
