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
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/book">Book</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
