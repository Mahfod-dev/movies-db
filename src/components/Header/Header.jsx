import DarkMode from "../DarkMode/DarkMode";
import NavBar from "../NavBar/NavBar";

import "./header.css";

function Header({ dark, setDark }) {
  return (
    <section className='header-container'>
      <div className='header-items'>
        <h1>MediaCorp</h1>
        <NavBar />
        <DarkMode dark={dark} setDark={setDark} />
      </div>
    </section>
  );
}

export default Header;
