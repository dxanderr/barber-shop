import { NavLink } from "react-router-dom";

import barber from "../assets/barber.svg";
export default function Navbar({navTheme, setNavTheme}) {
  return (
    <nav>
      <div className={navTheme}>
        <div className="brand">
          <img src={barber} alt="logo" className="logo" />
        </div>
        <div className='links-container' >
          <ul className="links">
            <li>
              <NavLink to="/" exact activeClassName onClick={setNavTheme('light')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" exact activeClassName onClick={setNavTheme('dark')}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/register" exact activeClassName onClick={setNavTheme('dark')}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/login" exact activeClassName onClick={setNavTheme('dark')}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/book" exact activeClassName onClick={setNavTheme('dark')}>Book</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
