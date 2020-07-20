import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";
const MessageTimeline = ({ currentUser }) => {
  return (
    <div className="message-time-line row">
      <UserAside currentUser={currentUser} />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
