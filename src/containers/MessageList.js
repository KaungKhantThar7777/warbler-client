import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMessages, deleteMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
import MessageForm from "./MessageForm";

const MessageList = ({
  fetchMessages,
  messages,
  deleteMessage,
  currentUserId,
}) => {
  useEffect(() => {
    fetchMessages();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
    //eslint-disable-next-line
  }, [messages]);
  const messagesList = messages.map(({ _id, text, createdAt, user }) => (
    <MessageItem
      key={_id}
      date={createdAt}
      text={text}
      username={user.username}
      profileImageUrl={user.profileImageUrl}
      deleteMessage={deleteMessage.bind(this, user._id, _id)}
      isCorrectUser={currentUserId === user._id}
    />
  ));

  let messagesEnd;
  return (
    <div className="col-md-9 offset-lg-1 offset-md-0 mt-1 row">
      <div className="offset-md-1 col-sm-12 col-md-11">
        <ul className="list-group" id="messages">
          {messagesList}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              messagesEnd = el;
            }}
          ></div>
        </ul>
        <MessageForm className="send-form" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUser.user._id,
    messages: state.messages,
  };
};

export default connect(mapStateToProps, { fetchMessages, deleteMessage })(
  MessageList
);
