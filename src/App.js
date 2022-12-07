import React, { useState } from "react";
import Todolist from "./components/Todolist";
import "./App.css";

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
  const comClick = (id) => {
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
      <header className="header">나의 Todolist</header>
      <div className="input_box">
        <input
          className="input"
          type="text"
          placeholder="제목을 입력하세요"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="input"
          type="text"
          placeholder="내용을 입력하세요"
          onChange={(e) => setList(e.target.value)}
          value={list}
        />
        <button className="add_Bt" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <div className="list_box">
        <div className="working_box">
          <p>Working</p>
          {todolist.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todolist
                  todo={todo}
                  key={todo.id}
                  delTodo={delTodo}
                  comClick={comClick}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="done_box">
          <p>Done</p>
          {todolist.map((todo) => {
            if (todo.isDone) {
              return (
                <Todolist
                  todo={todo}
                  key={todo.id}
                  delTodo={delTodo}
                  comClick={comClick}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
