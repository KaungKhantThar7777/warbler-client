import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import MessageForm from "./MessageForm";
import withAuth from "../hocs/withAuth";
const Main = ({ authUser, errors, currentUser }) => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Homepage {...props} currentUser={currentUser} />}
        ></Route>

        <Route
          exact
          path="/signup"
          render={(props) => (
            <AuthForm
              {...props}
              signup
              buttonText="Sign me up"
              heading="Welcome New User"
              onAuth={authUser}
              errors={errors}
            />
          )}
        ></Route>

        <Route
          exact
          path="/signin"
          render={(props) => (
            <AuthForm
              {...props}
              buttonText="Sign in"
              heading="Welcome Back!"
              onAuth={authUser}
              errors={errors}
            />
          )}
        ></Route>

        <Route
          path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { authUser })(Main));
