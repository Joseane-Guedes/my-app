import React from "react";
import { MdSearch } from "react-icons/md";
import "./styles.css";

export default function Search({ setSearch, search }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        type="text"
        placeholder="Buscar Tarefa..."
      />
    </div>
  );
}
