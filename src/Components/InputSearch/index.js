import { useEffect } from "react";
import { MdSearch } from "react-icons/md";
import "./styles.css";

export default function InputSearch({ todoList, setFilteredList }) {
  useEffect(() => {
    setFilteredList(todoList);
  }, [todoList, setFilteredList]);

  function handleSearch(event) {
    const { value } = event.target;

    if (value.length <= 0) {
      setFilteredList(todoList);
      return;
    }

    if (value.length > 0) {
      setFilteredList(
        todoList.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredList([]);
    }

    
  }

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearch(event)}
        type="text"
        placeholder="Search your task..."
      />
    </div>
  );
}
/* Um evento onChange é disparado quando os valores são inseridos na entrada */