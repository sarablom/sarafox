import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <Link to="/contact" className="footer__link">
          Kontakt
        </Link>
      </p>

      <p className="footer__copywright">&copy; 2021 Sara Fox Barnkläder</p>
    </footer>
  );
}

export default Footer;
