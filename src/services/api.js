import axios from "axios";

export const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};
export const apiCall = (method, path, data) => {
  return new Promise((resolve, reject) => {
    return axios({
      method,
      url: path,
      data,
    })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data.error);
      });
  });
};
