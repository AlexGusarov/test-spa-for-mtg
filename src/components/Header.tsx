import React from 'react';
import { Watch } from './Watch';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Watch />
        <h1 className="header__heading">Отзывы</h1>
        <label className="header__label"
          htmlFor="language-select">
            Выберите язык:
            <select className="header__select" id="language-select">
                <option value="en">Английский</option>
                <option value="ru">Русский</option>
            </select>
        </label>
     </header>
    );
  }
}
