import { NavLink } from "react-router-dom";
import barber from "../assets/barber.svg";
export default function Navbar({theme, booking}) {
  return (
    <nav className={theme}>
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
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              exact 
              activeClassName 
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/book" 
              exact 
              activeClassName 
              >
                Book
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/register" 
              exact 
              activeClassName 
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              exact 
              activeClassName 
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      { booking && <div className="booking-menu">
        <a className="booking-btn book">Book</a>
        <a className="booking-btn appointments">My Appointments</a>
      </div>}
      
    </nav>
  );
}


