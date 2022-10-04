import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState("");

  const handlebars = (e) => {
    setTodos(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handlebars}
        value={todos}
        className="todos"
      />
      <button className="add_todo">Add</button>
      <br />
    </div>
  );
};

export default Todos;
