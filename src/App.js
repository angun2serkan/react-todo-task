import { useState } from "react";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form.js";
import Footer from "./components/footer/Footer.js";

function App() {
  const [todos, setTodos] = useState(readTodos());
  const [todoNumber, setTodoNumber] = useState(countTodo(todos));
  const [title, setTitle] = useState("");
  saveTodos(todos);

  const formSubmitted = function (event) {
    event.preventDefault();
    setTodos(sortTodos([{ title: title, isDone: false }, ...todos]));
    setTitle("");
  };

  const updateDone = function (event, index) {
    const newTodos = [...todos];
    newTodos[index].isDone = event.target.checked;
    setTodos(sortTodos(newTodos));
    setTodoNumber((x) => x + 1);
  };

  const deleteTodo = function (event) {
    event.preventDefault();
    const newTodos = [];
    setTodos(newTodos);
  };

  return (
    <div className={classes.app}>
      <Header title="Daily To Do List" />

      <Form
        onSubmit={formSubmitted}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Add new list item"
        buttonTitle="Add"
      />

      <ul>
        {todos.map((v, i) => (
          <li
            key={i}
            className={v.isDone ? `${classes.done}` : `${classes.undone}`}
          >
            <input
              type="checkbox"
              checked={v.isDone}
              onChange={(e) => updateDone(e, i)}
            />
            <span className={classes.title}>{v.title}</span>
          </li>
        ))}
      </ul>

      <Footer onClick={(e) => deleteTodo(e)} itemCount={todoNumber} />
    </div>
  );
}

function readTodos() {
  const data = localStorage["data"];
  return data ? JSON.parse(data) : [];
}

function saveTodos(todos) {
  localStorage["data"] = JSON.stringify(todos);
}

function sortTodos(todos) {
  todos.sort((a, b) => a.isDone - b.isDone);
  return todos;
}

const countTodo = function (todos) {
  const newDoneTodos = todos.filter((x) => x.isDone === true);
  const newDoneTodosLength = newDoneTodos.length;
  return newDoneTodosLength;
};

export default App;
