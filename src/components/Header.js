import React from 'react';
import logoIcon from '../assets/img/logo.svg';
import homeIcon from '../assets/img/home-icon.svg';
import personalIcon from '../assets/img/personal-icon.svg';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <nav className="header__nav">
        <a href="/" className="header__item">
          <img src={homeIcon} alt="home" />
          <span>На главную</span>
        </a>
        <a href="/" className="header__item">
          <img src={personalIcon} alt="personal" />
          <span>Персональные данные</span>
        </a>
        <a href="/" className="header__item">
          <span>Выход</span>
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
