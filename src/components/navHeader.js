import React, { Component } from "react";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

class NavHeader extends Component {
  constructor(props) {
    super(props);
  }

  bob = () => {
    this.props.test();
  }

  render() {
    return (
      <nav className={"navHeader"}>
        <ul>
          <Link to="/about"><li>About</li></Link>
          <Link to="/books"><li>Books</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <a href="https://drive.google.com/open?id=1YP1scTyrv3Z-voqNcL6EVOPC5KF4vi2nyamLb9ldfQo" target="blank"><li>Resume</li></a>
          <a href="https://angularportfolio-99685.firebaseapp.com/about" target="blank"><li>Angular Version</li></a>
          <a href="https://vueportfolio-f5902.firebaseapp.com" target="blank"><li>Vue Version</li></a>
        </ul>
      </nav>
    );
  }
}

export default NavHeader;