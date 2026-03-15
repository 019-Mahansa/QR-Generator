import React from "react";
import "./style/inputText.css"

function InputText({ id, name, type = "text", placeholder = "Enter your text..." }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="input"
    />
  );
}

export default InputText;