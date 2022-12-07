import React, { useState } from "react";
import Header from "./components/header";
import Inputbox from "./components/Inputbox";
import "./App.css";
import Listbox from "./components/Listbox";

const App = () => {
  const [todolist, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [list, setList] = useState("");
  const addTodo = () => {
    const newTodo = {
      id: todolist.length + 1,
      title: title,
      list: list,
      isDone: false,
    };
    if (newTodo.title === "") {
      alert("제목을 입력해주세요!");
    } else if (newTodo.list === "") {
      alert("내용을 입력해주세요!");
    } else {
      setTodoList([...todolist, newTodo]);
      setList("");
      setTitle("");
    }
  };
  const delTodo = (id) => {
    const newTodoList = todolist.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  const updateClick = (id) => {
    const comTodo = todolist.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoList(comTodo);
  };

  return (
    <div className="base">
      <Header>나의 Todolist</Header>
      <Inputbox
        setTitle={setTitle}
        title={title}
        setList={setList}
        list={list}
        addTodo={addTodo}
      />
      <Listbox
        todolist={todolist}
        delTodo={delTodo}
        updateClick={updateClick}
      />
    </div>
  );
};

export default App;
