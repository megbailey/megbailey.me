import React from "react";
import { useSelector } from 'react-redux';
import '../../assets/styles/menu.css'

const Menu = ({ items }) => {
  const theme = useSelector(state => state.theme.value)

  return (
    <nav className={`site-nav site-nav--${theme.mode}`} aria-label="Primary">
      <ul className="site-nav__list">
        {items.map(({ text, link }) => (
          <li key={`nav-${text}`} className="site-nav__item">
            <a className="site-nav__link" href={link} rel="noopener noreferrer">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
