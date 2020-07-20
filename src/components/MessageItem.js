import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import defaultImage from "../images/default-profile-image.jpg";

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  deleteMessage,
  isCorrectUser,
}) => {
  return (
    <div>
      <li className="list-group-item">
        <img
          className="item-img"
          src={
            `https://warbler-server-mm.herokuapp.com/uploads/${profileImageUrl}` ||
            defaultImage
          }
          alt={username}
          width="100"
          height="100"
        ></img>
        <div className="message-area">
          <Link to="/">@{username} &nbsp;</Link>
          <span className="text-muted">
            <Moment fromNow>{date}</Moment>
          </span>
          <p>{text}</p>
          {isCorrectUser && (
            <button className="btn btn-danger" onClick={deleteMessage}>
              Delete
            </button>
          )}
        </div>
      </li>
    </div>
  );
};

export default MessageItem;
