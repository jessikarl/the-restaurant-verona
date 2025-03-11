import { NavLink, Outlet, useNavigate } from "react-router";
import "./../styles/layout.scss";
import { useState } from "react";

export const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClick = () => {
    navigate("/booking");
    setOpenMenu(false);
  };

  return (
    <>
      <header className={openMenu ? "open-menu" : ""}>
        <div className="top-nav">
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span className={openMenu ? "cross-icon" : ""}></span>
            <span className={openMenu ? "cross-icon" : ""}></span>
            <span className={openMenu ? "cross-icon" : ""}></span>
          </div>
          <h1 className="the-label">
            <NavLink to={"/"}>Verona</NavLink>
          </h1>
        </div>
        <nav>
          <ul className={openMenu ? "open" : "nav-list"}>
            <li onClick={() => setOpenMenu(false)}>
              <a href="/#menu">Meny</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
        <div className={openMenu ? "show-cta" : "bookingbtn"}>
          <button onClick={handleClick}>Boka bord</button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-container">
          <div className="info-column-box">
            <div className="info-column">
              <h1 className="the-label">Verona</h1>
              <div className="restaurant-address">
                <p>Strandvägen 1</p>
                <p>114 51 Stockholm</p>
              </div>
              <div className="contact-info">
                <p>08 49 78 15</p>
                <p>bokning@restaurangverona.se</p>
              </div>
            </div>
            <div className="info-column">
              <h4>Öppetider</h4>
              <p>Vardagar: 18.00 - 23.30</p>
              <p>Lördagar: 18.00 - 23.30</p>
              <p>Söndagar: 18.00 - 23.30</p>
            </div>
            <div className="info-column">
              <h4>Följ oss</h4>
              <a href="https://www.instagram.com/restaurangverona">Instagram</a>
              <a href="https://www.facebook.com/restaurangverona">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
