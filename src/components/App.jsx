import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevData) => [...prevData, inputText]);
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        handleClick={handleChange}
        value={inputText}
        addItem={addItem}
      />
      <ul>
        {items.map((item, index) => {
          return (
            <TodoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
