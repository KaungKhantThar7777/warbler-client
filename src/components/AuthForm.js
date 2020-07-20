import React, { useState, Fragment } from "react";

const AuthForm = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const onFileChange = (e) => {
    setProfileImageUrl(e.target.files[0]);
  };

  const { heading, signup, buttonText, onAuth, errors } = props;
  const { email, username, password } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const path = signup ? "/signup" : "/signin";
    const data = new FormData();
    data.set("email", email);
    data.set("password", password);
    data.set("username", username);
    if (profileImageUrl) {
      data.append("file", profileImageUrl);
    }
    onAuth(path, data)
      .then(() => props.history.push("/"))
      .catch((e) => console.log(e));
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="my-3 row justify-content-md-center text-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit} className="my-3">
          <h2>{heading}</h2>

          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control my-2"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
          ></input>

          <label htmlFor="name">Password:</label>
          <input
            type="password"
            className="form-control  my-2"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          ></input>

          {signup && (
            <Fragment>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={onChange}
              ></input>

              <label htmlFor="name">Profile Image:</label>
              <input
                type="file"
                className="form-control"
                id="profileImageUrl"
                name="profileImageUrl"
                onChange={onFileChange}
              ></input>
            </Fragment>
          )}

          <input
            type="submit"
            className="my-3 btn btn-block btn-primary"
            value={buttonText}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
