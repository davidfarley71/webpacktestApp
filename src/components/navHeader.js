import React, { Component } from "react";
import "../css/navHeader.css";
import { Link } from "react-router-dom"

class NavHeader extends Component {
  render() {
    return (
      <nav className={"navHeader"}>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <div className="navHeader">
          <header className="navHeader-header">
          </header>
        </div>
      </nav>
    );
  }
}

export default NavHeader;