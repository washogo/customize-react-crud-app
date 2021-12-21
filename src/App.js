import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  console.log("start");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeForm = (e) => {
    setTodo(e.target.value)
  }
  
  const onClickAddTodo = (e) => {
    e.preventDefault();
    
    if (todo !== "") {
      setTodos([...todos, todo])
    };
    
    setTodo("");
  }

  return (
    <>
      <h2>React Crud Todo App</h2>
      <form className="form-group">
          <label className="form-label" htmlFor="todo">Input Form</label>
          <input
            className="form-control"
            name="todo"
            id="todo"
            type="text"
            value={todo}
            placeholder="input your todo"
            onChange={onChangeForm}
          />
          <button className="btn btn-primary" onClick={onClickAddTodo}>Add Todo</button>
      </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;