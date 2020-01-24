import React from "react";
import styles from "./index.module.scss";

const A = props => {
  return (
    <a className={styles.link} href={props.href}>
      {props.children}
    </a>
  );
};

export default A;
