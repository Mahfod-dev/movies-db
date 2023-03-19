import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  return (
    <div className='navbar-container'>
      <Link className='link-elem' to={"/"}>
        {" "}
        Home
      </Link>
      <Link className='link-elem' to={"/about"}>
        About
      </Link>
    </div>
  );
}

export default NavBar;
