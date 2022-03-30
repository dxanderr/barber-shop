import { NavLink } from "react-router-dom";


import barber from "../assets/barber.svg";
export default function Navbar({navTheme, darkTheme, lightTheme}) {

  return (
    <nav className={navTheme}>
      <div className="brand">
        <img src={barber} alt="logo" className="logo" />
      </div>
      <div className='links-container' >
        <ul className="links">
          <li>
            <NavLink to="/" exact activeClassName onClick={lightTheme}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" exact activeClassName >Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/register" exact activeClassName >Register</NavLink>
          </li>
          <li>
            <NavLink to="/login" exact activeClassName >Login</NavLink>
          </li>
          <li>
            <NavLink to="/book" exact activeClassName onClick={darkTheme}>Book</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
