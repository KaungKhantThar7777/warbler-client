import React, { useEffect } from "react";
import { connect } from "react-redux";

const withAuth = (ComponentToRender) => {
  const Authenticate = (props) => {
    useEffect(() => {
      if (!props.isAuthenticated) {
        props.history.push("/");
      }
      //eslint-disable-next-line
    }, [props.isAuthenticated]);
    return <ComponentToRender {...props} />;
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.currentUser.isAuthenticated,
  });

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
