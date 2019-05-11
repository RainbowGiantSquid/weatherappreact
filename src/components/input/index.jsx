import React from "react";
import "./input.css";

const Input = props => (
  <input
    className="input"
    value={props.value}
    placeholder={props.placeholder}
    type={props.type || "text"}
    onChange={props.onChange || (_ => null)}
    name={props.name}
    id={props.id}
    {...props}
  />
);

export default Input;
