import { NavLink } from "react-router-dom";

import "./navbar.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

function NavBar() {
  return (
    <div className='navbar-container'>
      {navigation.map((item) => {
        return (
          <NavLink
            key={item.name}
            className={({ isActive }) => {
              return isActive ? "link-elem isActive" : "link-elem";
            }}
            to={item.href}
          >
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavBar;
