import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista(["tarefa1", "tarefa2", "tarefa3", "tarefa4"]);
  }, []);

  return (
    <div className="container">
    <h1 className="lista"> Lista de tarefa</h1>
      <div className="new-item">
        <input
        className="todo-form__input"
          placeholder="Tarefa"
          value={novoItem}
          onChange={value => setNovoItem(value.target.value)}
          type="text"
        />
        <button onClick={() => adicionarNovoItem()}> Salvar </button>
      </div>

      <ul className="todo-list">
        {lista.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => deletarItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarNovoItem() {
    if (novoItem.length <= 0) {
      alert("Por favor, digite no campo 'Tarefa'");
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Tarefa repetida");
      return;
    }

    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
}

export default App;
