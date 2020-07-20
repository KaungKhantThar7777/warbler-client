import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../types";
import { setError, removeError } from "./errors";
import { apiCall } from "../../services/api";

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  payload: messages,
});

export const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  payload: id,
});

export const deleteMessage = (userId, messageId) => async (dispatch) => {
  try {
    const res = await apiCall(
      "delete",
      `/api/users/${userId}/messages/${messageId}`
    );
    console.log(res);
    dispatch(removeMessage(messageId));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
export const fetchMessages = () => async (dispatch) => {
  try {
    const res = await apiCall("get", "/api/messages");

    dispatch(loadMessages(res));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

// export const postNewMessage = (text) => async (dispatch, getState) => {
//   try {
//     const {
//       currentUser: { user },
//     } = getState();
//     await apiCall("post", `/api/users/${user._id}/messages`, {
//       text,
//     });
//   } catch (err) {
//     dispatch(setError(err.message));
//   }
// };

export const postNewMessage = (text) => (dispatch, getState) => {
  const {
    currentUser: { user },
  } = getState();
  return new Promise((resolve, reject) => {
    apiCall("post", `/api/users/${user._id}/messages`, {
      text,
    })
      .then((res) => resolve())
      .catch((err) => {
        dispatch(setError(err.message));
        setTimeout(() => {
          dispatch(removeError());
        }, 3000);
      });
  });
};
