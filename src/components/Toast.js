// named export -> import
import React, { useState } from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";

const Toast = ({ message }) => {
  // text : 변수명, setText : 바꿀 메서드
  const [text, setText] = useState("sample");
  const buttonClickHandler = (title) => {
    setText("changed");
    console.log(title);
  };

  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />
      <p>{text}</p>
      <button
        className="toast__button"
        // 화살표 함수를 이용해야 onClick을 했을 때 반응
        onClick={() => buttonClickHandler(message.title)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Toast;
