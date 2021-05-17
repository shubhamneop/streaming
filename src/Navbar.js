import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  navbar-color">
        <Link to="/">
          <span className="navbar-brand">Play Movie</span>
        </Link>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
