import { MdSearch } from "react-icons/md";
import "./styles.css"; 




export default function InputSearch({  search, setSearch }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        type="text"
        placeholder="Search your task..."
      />
    </div>
  );
}

/* Um evento onChange é disparado quando os valores são inseridos na entrada */
