import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";

function App() {
  let [lista, setLista] = useState([]);
  const [search, setSearch] = useState("");
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista(["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4"]);
  }, []);

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

  const filteredList = lista.filter((item) =>
    item.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <h1 className="lista"> Lista de tarefa</h1>

      <div className="new-item">
        <input
          className="todo-form__input"
          placeholder="Adicionar Tarefa"
          value={novoItem}
          onChange={(value) => setNovoItem(value.target.value)}
          type="text"
        />

        <button onClick={() => adicionarNovoItem()}> Salvar </button>
      </div>
      <Search setSearch={setSearch} search={search} />
      <ul className="todo-list">
        {filteredList.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => deletarItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
