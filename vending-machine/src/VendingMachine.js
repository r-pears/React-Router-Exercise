import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div className='vending container'>
      <h1 className='vendingMessage'>
        Hello, I am a vending machine. What would you like to eat?
      </h1>
      <div className='vendingLinks'>
        <h2><Link className='vendingLink' to="/soda">Soda</Link></h2>
        <h2><Link className='vendingLink' to="/chips">Chips</Link></h2>
        <h2><Link className='vendingLink' to="/sardines">Fresh Sardines</Link></h2>
      </div>
      <a style={{ position: 'absolute', bottom: '0', left: '0' }} href="http://www.freepik.com">Background image by macrovector / Freepik</a>
    </div>
  );
}

export default VendingMachine;
