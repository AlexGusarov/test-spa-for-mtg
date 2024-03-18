import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import './Page.css';

export class Page extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <Main />
      </div>
    );
  }
}
