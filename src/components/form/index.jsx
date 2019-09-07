import React from "react";
import "./form.css";

const Form = props => <form onSubmit={props.onSubmit}>{props.children}</form>;

export default Form;
