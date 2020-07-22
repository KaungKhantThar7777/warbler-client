import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewMessage, fetchMessages } from "../store/actions/messages";
const MessageForm = ({ errors, postNewMessage, fetchMessages }) => {
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("text", data);
    postNewMessage(message)
      .then(() => {
        fetchMessages();
        setMessage("");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit} className="form-inline full-width">
        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}
        <input
          type="text"
          name="message"
          className="form-control"
          value={message}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-success right-pull">
          Send
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { postNewMessage, fetchMessages })(
  MessageForm
);
