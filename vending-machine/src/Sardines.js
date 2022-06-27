import React from 'react';
import { Link } from 'react-router-dom';

function Sardines() {
  return (
    <div className='sardines container'>
      <h1 className='sardines message'>
        You don't eat the sardines. The sardines, THEY EAT YOU!
      </h1>
        <h2><Link className='sardines link' to="/">Go back</Link></h2>
      <a style={{ position: 'absolute', bottom: '0', left: '0' }} href="http://www.freepik.com">Background image by macrovector / Freepik</a>
    </div>
  )
}

export default Sardines;
