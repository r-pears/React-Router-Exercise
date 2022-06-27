import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  const [chips, setChips] = useState(0);

  return (
    <div className='chips container'>
      <h1 style={{ cursor: 'pointer' }} onClick={() => setChips(chips + 1)} className='chips message'>
        EAT ME!
      </h1>
      <h2 style={{ textAlign: 'center' }}>
        You have eaten: {chips} {chips === 1 ? 'bag' : 'bags'}.
      </h2>
        <h2><Link className='chips link' to="/">Go back</Link></h2>
      <a style={{ position: 'absolute', bottom: '0', left: '0' }} href="http://www.freepik.com">Background image by macrovector / Freepik</a>
    </div>
  )
}

export default Chips;
