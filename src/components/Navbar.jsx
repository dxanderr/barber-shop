import { NavLink } from "react-router-dom";


import barber from "../assets/barber.svg";
export default function Navbar(props) {

  return (
    <nav className={props.homeTheme ? "home" : ""}>
      <div className="brand">
        <img src={barber} alt="logo" className="logo" />
      </div>
      <div className='links-container' >
        <ul className="links">
          <li>
            <NavLink 
              to="/" 
              exact 
              activeClassName 
              onClick={props.homeTheme ? "" : props.toggleTheme}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              exact 
              activeClassName 
              onClick={props.homeTheme ? props.toggleTheme : ""}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/register" 
              exact 
              activeClassName 
              onClick={props.homeTheme ? props.toggleTheme : ""}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              exact 
              activeClassName 
              onClick={props.homeTheme ? props.toggleTheme : ""}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/book" 
              exact 
              activeClassName 
              onClick={props.homeTheme ? props.toggleTheme : ""}
              >
                Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


