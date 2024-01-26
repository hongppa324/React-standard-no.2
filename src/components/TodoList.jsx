import React, { useState } from "react";
import InputForm from "./InputArea";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const submitTodos = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodos = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    alert("정말 삭제하시겠습니까?");
  };

  const moveTodos = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <InputForm submitTodos={submitTodos} />
      <Todo headTitle="Working...🔥!" todos={workingTodos} deleteTodos={deleteTodos} moveTodos={moveTodos} />
      <Todo headTitle="Done..!🎉" todos={doneTodos} deleteTodos={deleteTodos} moveTodos={moveTodos} />
    </div>
  );
}

export default TodoList;
