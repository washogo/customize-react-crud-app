import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const result = localStorage.getItem("todos");
    if (result) {
      return JSON.parse(result)
    } else {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onChangeForm = (e) => {
    setTodo(e.target.value)
  }
  
  const onClickAddTodo = (e) => {
    e.preventDefault();
    
    if (todo !== "") {
      setTodos([...todos, {
        id: todos.length + 1,
        text: todo
      }])
    };
    
    setTodo("");
  }

  const onClickDeleteTodo = (id) => {
    const removeTodo = todos.filter(todo => todo.id !== id);
    setTodos(removeTodo);
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
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td><button type="button" className="btn btn-danger" onClick={() => onClickDeleteTodo(todo.id)}>Delete Todo</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;