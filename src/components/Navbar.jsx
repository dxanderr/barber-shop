import barber from "../assets/barber.svg";
export default function Navbar({ changeTheme, currentTheme }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="brand">
          <img src={barber} alt="logo" className="logo" />
        </div>
        <div className='links-container' >
          <ul className="links">
            <li className="active">
              <a href="#features">Home</a>
            </li>
            <li>
              <a href="#about">Gallery</a>
            </li>
            <li>
              <a href="#launch">Register</a>
            </li>
            <li>
              <a href="#signup">Login</a>
            </li>
            <li>
              <a href="#signup">Book</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
