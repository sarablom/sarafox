import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p>Har F-skattsedel</p>
            <Link to="/contact" className="footer__link">Kontakt</Link>
            <Link to="/terms" className="footer__link">Köpvillkor</Link>
            <p className="footer__copywright">&copy; 2021 Sara Fox Barnkläder</p>
        </footer>
    )
}

export default Footer
