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
                      setChecked((prev) => {
                        if (prev.includes(item)) {
                          const data = [...prev];

                          const i = data.findIndex((i) => i === item);
                          data.splice(i, 1);

                          return [...data];
                        }
                        return [...prev];
                      });

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

/* 
O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.


https://www.youtube.com/watch?v=4zM2DgprRPw

https://www.youtube.com/watch?v=sSlwy7WRLTU

https://www.youtube.com/watch?v=p7J7u_9_3FI

https://javascript.plainenglish.io/creating-a-confirm-dialog-in-react-and-material-ui-3d7aaea1d799

https://dev.to/isarisariver/how-to-create-a-custom-confirm-box-with-react-754

https://reactkungfu.com/2015/08/beautiful-confirm-window-with-react/

https://www.techcycle.me/post/reactjs-confirmation-button

https://github.com/t4t5/sweetalert

https://www.devjuniorplus.com.br/criando-um-todo-list-para-entender-o-react/

https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

https://codepen.io/tutsplus/pen/mdmBRPY
https://www.w3schools.com/jsref/met_win_prompt.asp
*/

/* function deleteItem(itemIndex: number) {
  // sua lógica para deletar o item do array
} 

function onDeleteItem(itemIndex: number) {
  if (clicouParaDeletar) {
    deleteItem(itemIndex)
  }
}

<button onClick={() => onDeleteItem(index)} /> 

o pulo do gato está no clicouParaDeletar, com o window.confirm tem um jeito de saber se o usuário clicou para deletar, mas ai vou deixar para você descobrir

*/
