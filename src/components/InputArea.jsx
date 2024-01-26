import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/InputArea.css";

const InputForm = ({ submitTodos }) => {
  const titleRef = useRef("");
  const contentRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;

    if (!title) {
      alert("제목을 입력해주세요.");
      return titleRef.current.focus();
    }
    if (!content) {
      alert("내용을 입력해주세요.");
      return contentRef.current.focus();
    }

    submitTodos({
      id: uuidv4(),
      title,
      content,
      isDone: false
    });

    event.target.reset();
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      {/* <InputBox> */}
      <label>
        제목 :
        <input type="text" placeholder="제목을 입력해주세요." name="title" ref={titleRef} autoFocus />
      </label>
      <label>
        내용 :
        <input type="text" placeholder="내용을 입력해주세요." name="content" ref={contentRef} />
      </label>
      {/* </InputBox> */}
      <button className="add-btn" type="submit">
        추가하기
      </button>{" "}
    </form>
  );
};

export default InputForm;
