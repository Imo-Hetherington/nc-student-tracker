import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/students">Students </Link>
      <Link to="/blocks">Blocks</Link>
    </nav>
  );
};

export default NavBar;
