import React from 'react';
import { Watch } from './Watch';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Watch />
        <h1 className="header__heading">Отзывы</h1>
        <LanguageSwitcher />
     </header>
    );
  }
}
