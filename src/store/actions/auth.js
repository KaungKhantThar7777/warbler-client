import { apiCall, setTokenHeader } from "../../services/api";

import { SET_CURRENT_USER } from "../types";
import { setError, removeError } from "./errors";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setAuthorizationToken = (token) => {
  setTokenHeader(token);
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}));
  setAuthorizationToken(false);
};

export const authUser = (path, userData) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${path}`, userData)
        .then((res) => {
          const { token, ...user } = res;
          console.log(res);
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          resolve();
        })
        .catch((err) => {
          dispatch(setError(err.message));
          setAuthorizationToken(false);
          setTimeout(() => {
            dispatch(removeError());
          }, 3000);
        });
    });
  };
};

// export const authUser = (path, userData) => {
//   return async (dispatch) => {
//     try {
//       const res = await apiCall("post", `/api/auth/${path}`, userData);
//       const { token, ...user } = res;
//       localStorage.setItem("jwtToken", token);
//       dispatch(setCurrentUser(user));
//     } catch (err) {
//       dispatch(setError(err.message));

//       setTimeout(() => {
//         dispatch(removeError());
//       }, 3000);
//     }
//   };
// };
