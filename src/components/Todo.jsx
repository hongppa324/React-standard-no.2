import React from "react";
import "./styles/Todo.css";

function Todo({ todos, headTitle, deleteTodos, moveTodos }) {
  return (
    <div className="card-wrapper">
      <h2>{headTitle}</h2>
      <div className="todo-wrapper">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <div className="button-wrapper">
              <button className="del-btn" onClick={() => deleteTodos(todo.id)}>
                삭제하기
              </button>
              <button className="move-btn" onClick={() => moveTodos(todo.id)}>
                {todo.isDone ? "취소하기" : "완료하기"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
