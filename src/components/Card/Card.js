import React, { useState } from "react";
import classes from "./Card.module.scss";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";
import MarkWebber from "../../assets/images/avatar-mark-webber.webp";
import AngelaGray from "../../assets/images/avatar-angela-gray.webp";
import JacobThompson from "../../assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "../../assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "../../assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "../../assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "../../assets/images/avatar-anna-kim.webp";
import ImgChess from "../../assets/images/image-chess.webp";
const DUMMY_NOTIFICATIONS = [
  {
    unread: true,
    avatar: MarkWebber,
    name: "Mark Webber",
    subject: (
      <>
        reacted to your recent post <span>My first tournament today!</span>
      </>
    ),
    since: "1m ago",
    img: undefined,
    alt: undefined,
    privateMessage: undefined,
  },
  {
    unread: true,
    avatar: AngelaGray,
    name: "Angela Gray",
    subject: <>followed you</>,
    since: "5m ago",
    img: undefined,
    alt: undefined,
    privateMessage: undefined,
  },
  {
    unread: true,
    avatar: JacobThompson,
    name: "Jacob Thompson",
    subject: (
      <>
        has joined your group <span className={classes.link}>Chess Club</span>
      </>
    ),
    since: "1 day ago",
    img: undefined,
    alt: undefined,
    privateMessage: undefined,
  },
  {
    unread: false,
    avatar: RizkyHasanuddin,
    name: "Rizky Hasanuddin",
    subject: <>sent you a private message</>,
    since: "5 day ago",
    img: undefined,
    alt: undefined,
    privateMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    unread: false,
    avatar: KimberlySmith,
    name: "Kimberly Smith",
    subject: <>commented on your picture</>,
    since: "1 week ago",
    img: ImgChess,
    alt: "Someone in front of a chessboard",
    privateMessage: undefined,
  },
  {
    unread: false,
    avatar: NathanPeterson,
    name: "Nathan Peterson",
    subject: (
      <>
        reacted to your recent post{" "}
        <span>5 end-game strategies to increase your win rate</span>
      </>
    ),
    since: "2 week ago",
    img: undefined,
    alt: undefined,
    privateMessage: undefined,
  },
  {
    unread: false,
    avatar: AnnaKim,
    name: "Anna Kim",
    subject: (
      <>
        left the group <span className={classes.link}>Chess Club</span>
      </>
    ),
    since: "2 week ago",
    img: undefined,
    alt: undefined,
    privateMessage: undefined,
  },
];
const Card = () => {
  const [isUnread, setIsUnread] = useState(true);
  const markReadHandler = () => {
    setIsUnread(false);
  };
  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <h1 className={classes.card__heading}>
          Notifications {isUnread && <span>3</span>}
        </h1>
        <Button onClick={markReadHandler}>Mark all as read</Button>
      </div>
      <div className={classes.card__body}>
        {DUMMY_NOTIFICATIONS.map((notification) => (
          <Notification
            unread={notification.unread && isUnread}
            avatar={notification.avatar}
            name={notification.name}
            since={notification.since}
            privateMessage={notification.privateMessage}
            img={notification.img}
            alt={notification.alt}
          >
            {notification.subject}
          </Notification>
        ))}
      </div>
    </div>
  );
};

export default Card;
