import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import {
  setAuthorizationToken,
  setCurrentUser,
  getMe,
} from "../store/actions/auth";
import { apiCall } from "../services/api";

const Homepage = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const fetchMe = async () => {
      if (localStorage.jwtToken) {
        setAuthorizationToken(localStorage.jwtToken);
        try {
          const decode = jwtDecode(localStorage.jwtToken);
          const res = await apiCall("get", `/api/users/${decode._id}`);
          setCurrentUser(res.user);
          // store.dispatch(setCurrentUser(decode));
        } catch (err) {
          setCurrentUser({});
        }
      } else {
        setAuthorizationToken(false);
      }
    };
    fetchMe();
    //eslint-disable-next-line
  }, []);
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <div className="primary-overlay">
          <h1>What's happening?</h1>
          <h4>New to Warbler</h4>
          <Link to="signup" className="btn btn-primary">
            Sign up here
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {" "}
      <MessageTimeline currentUser={currentUser} />
    </div>
  );
};

export default connect(null, { getMe, setCurrentUser })(Homepage);
