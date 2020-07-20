import React from "react";
import { configureStore } from "../store";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    const decode = jwtDecode(localStorage.jwtToken);

    store.dispatch(setCurrentUser(decode));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
} else {
  setAuthorizationToken(false);
}
const App = () => {
  return (
    <Provider store={store}>
      <div className="onboarding">
        <Router>
          <Navbar />
          <Main />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
