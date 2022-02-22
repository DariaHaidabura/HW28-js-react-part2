import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import { addOne, minusOne } from '../../redux/actions/todos';
import "./Test.css";
import { addCart, removeCart } from "../../redux/actions/cart";

function Test({cart}) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
 
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
 

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => setTodos(res.data));
  }, []);

  const createNewTest = (e) => {
    e.preventDefault();
    const data = { title: inputValue, status: false };

    axios
      .post(`http://localhost:3000/todos`, data)
      .then((res) => setTodos([...todos, res.data]));
    setInputValue("");
  };

  const changeStatus = (data) => {
    data.status = !data.status;
    axios.put(`http://localhost:3000/todos/` + data.id, data).then(() => {
      setTodos([...todos]);
    });
  };

  const onInputValueChanged = (e) => {
    setInputValue(e.target.value);
  };

  const addToFavs = (todo) => {
    axios.post(`http://localhost:3000/favorites/`, todo)
    .then((res) => {dispatch(addCart(res.data))})
  }

  const removeToFavs = (id) => {
    axios.delete(`http://localhost:3000/favorites/` + id)
    .then(() => {dispatch(removeCart(id))})
  }

  return (
    <div>
      <div
        className="main"
        style={{
          borderTop: "none",
          display: "flex",
          marginLeft: "300px",
          marginTop: "10px",
        }}
      >
        <p>Count:</p>
        <p style={{ marginLeft: "5px" }}>{counter.number}</p>
        <button onClick={() => dispatch(addOne())}>+</button>
        <button onClick={() => dispatch(minusOne())}>-</button>
        <input
          value={inputValue}
          onChange={onInputValueChanged}
          style={{ width: "300px", marginLeft: "10px" }}
          type="text"
        />
        <button
          onClick={(e) => createNewTest(e)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Create
        </button>
      </div>
      <ol type="number" style={{ marginLeft: "350px", marginTop: "10px" }}>
        {todos.map((todo) => (
          <li
            className={`${todo.status ? "green" : "red"}`}
            style={{ display: "flex", width: "200px" }}
            key={todo.id}
          >
            {todo.title}
            <button
              onClick={() => changeStatus(todo)}
              style={{ marginLeft: "10px", height: "40px" }}
            >
              Status
            </button>
            <button onClick={() => addToFavs(todo)}>Add</button>
            <button onClick={() => removeToFavs(todo.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Test;
