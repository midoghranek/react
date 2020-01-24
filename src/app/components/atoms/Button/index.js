import React from "react";
import styles from "./index.module.scss";

const Button = props => {
  const styleType = {
    red: styles.red,
    yellow: styles.yellow,
    fun: function() {
      if (props.stype === "red") return this.red;
      else if (props.stype === "yellow") return this.yellow;
      else return "";
    }
  };

  return (
    <button className={`${styles.button} ${styleType.fun()}`}>
      {props.children}
    </button>
  );
};

export default Button;
