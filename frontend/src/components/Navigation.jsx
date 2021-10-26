import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logotyp.png";

function Navigation() {
    const location = useLocation();

  return (
    <nav className="navigation">
      <img src={logo} alt="Logo Sara Fox" className="navigation__logo" />
      <ul className="navigation__list">
          <Link to="/" className="navigation__link">
              <li className="navigation__link__item">
                  Hem
              </li>
          </Link>
          <Link to="/about" className="navigation__link">
              <li className="navigation__link__item">
                  Om
              </li>
          </Link>
          <Link to="/products" className="navigation__link">
              <li className="navigation__link__item">
                  Produkter
              </li>
          </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
