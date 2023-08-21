import React from "react";
import classes from "./Notification.module.scss";

const Notification = (props) => {
  return (
    <div
      className={`${classes.notification} ${
        props.unread ? classes.notification__unread : ""
      }`}
    >
      <img
        src={props.avatar}
        alt={props.name}
        className={classes.notification__avatar}
      />
      <div className={classes.notification__column}>
        <p className={classes.notification__subject}>
          <span className={classes.notification__name}>{props.name}</span>{" "}
          {props.children}{" "}
          {props.unread && (
            <span className={classes["notification__unread--dot"]}></span>
          )}
        </p>
        <p className={classes.notification__since}>{props.since}</p>
        {props.privateMessage && (
          <p className={classes.notification__private}>
            {props.privateMessage}
          </p>
        )}
      </div>
      {props.img && (
        <img
          src={props.img}
          alt={props.alt}
          className={classes.notification__img}
        />
      )}
    </div>
  );
};

export default Notification;
