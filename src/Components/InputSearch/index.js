import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "./styles.css";

export default function InputSearch({ todoList, setFilteredList }) {
  const [alertfind, setAlertFind] = useState('')

  useEffect(() => {
    setFilteredList(todoList);
  }, [todoList, setFilteredList]);



  function handleSearch(event) {
    const { value } = event.target;

    if (value.length <= 0) {
      setFilteredList(todoList);
      setAlertFind('')
      return;
    }

    const newList = todoList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredList(newList);

    if (newList.length === 0) {
      setAlertFind(
        "Found nothing with the searched term. Try changing it or add a new task"
      );
    }

    // if (value.length > 0) {
    //   setFilteredList(
    //     todoList.filter((item) =>
    //       item.toLowerCase().includes(value.toLowerCase())
    //     )
    //   );
    // } else {
    //   setFilteredList([]);
    // }
  }

  return (
    <>
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearch(event)}
        type="text"
        placeholder="Search your task..."
      />
    </div>
    <p>
      {alertfind}</p>
    </>
  );
}
/* Um evento onChange é disparado quando os valores são inseridos na entrada */
