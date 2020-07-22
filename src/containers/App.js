import React from "react";

import Navbar from "./Navbar";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";

import { connect } from "react-redux";

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
} else {
  setAuthorizationToken(false);
}
const App = () => {
  return (
    <div className="onboarding">
      <Router>
        <Navbar />
        <Main />
      </Router>
    </div>
  );
};

export default connect(null, { setCurrentUser })(App);
