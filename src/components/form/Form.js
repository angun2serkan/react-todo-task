import React from "react";
import classes from "./Form.module.css";

function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className={classes.todo__form}>
      <input
        className={classes.todo__input__text}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        required
      />
      <button className={classes.todo__input__submit}>
        {props.buttonTitle}
      </button>
    </form>
  );
}

export default Form;
