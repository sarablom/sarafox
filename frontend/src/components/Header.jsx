import React from 'react'
import {MdMailOutline, MdCheck} from "react-icons/md";

function Header() {
    return (
        <header className="header">
            <button className="header__button">
            <MdMailOutline /> <span className="header__mail">sarafox.barnklader@gmail.com</span> 
            </button>
            <ul className="header__list">
                <li className="header__list__item"><MdCheck /> Designa dina egna barnkläder</li>
                <li className="header__list__item"><MdCheck /> Högkvalitativa ekologiska tyger</li>
                <li className="header__list__item"><MdCheck /> Betala med Klarna eller faktura</li>
            </ul>
        </header>
    )
}

export default Header
