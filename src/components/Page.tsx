import React from 'react';
import { Header } from './Header';
import './Page.css';

export class Page extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
      </div>
    );
  }
}
