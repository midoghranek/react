import React from "react";
import styles from "./index.module.scss";

const Input = props => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      className={styles.input}
    />
  );
};

export default Input;
