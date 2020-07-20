import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler-logo.png";
import { logout } from "../store/actions/auth";
const Navbar = ({ currentUser, logout }) => {
  const signout = (e) => {
    e.preventDefault();

    logout();
  };
  return (
    <nav className="navbar navbar-expand fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Warbler home" />
        </Link>

        {currentUser.isAuthenticated ? (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#!" onClick={signout}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="signup">Sign up</Link>
            </li>
            <li>
              <Link to="signin">Log in</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, {
  logout,
})(Navbar);
