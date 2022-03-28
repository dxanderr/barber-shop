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
            <li className="active">
              <a href="/" onClick={setNavTheme('light')}>Home</a>
            </li>
            <li>
              <a href="/gallery" onClick={setNavTheme('dark')}>Gallery</a>
            </li>
            <li>
              <a href="/register" onClick={setNavTheme('dark')}>Register</a>
            </li>
            <li>
              <a href="/login" onClick={setNavTheme('dark')}>Login</a>
            </li>
            <li>
              <a href="/book" onClick={setNavTheme('dark')}>Book</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
