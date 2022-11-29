import React from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={classes.footer}>
      <hr color="#eee" />
      <div className={classes.footer__line}>
        <div className={classes.footer__line__left}>
          <span>{props.itemCount} </span>
          <span>items selected</span>
        </div>
        <div className={classes.footer__line__right}>
          <button onClick={props.onClick}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
