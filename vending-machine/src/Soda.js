import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div className='soda container'>
      <h1 className='soda message'>
        I AM COLD!
      </h1>
        <h2><Link className='soda link' to="/">Go back</Link></h2>
      <a style={{ position: 'absolute', bottom: '0', left: '0' }} href="http://www.freepik.com">Background image by brgfx / Freepik</a>
    </div>
  )
}

export default Soda;
