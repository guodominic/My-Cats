import React from 'react';

function Card({ name, email, id }) {
  return (
    <div className='tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5' >
      <img alt='robots' src={`https://robohash.org/${id}?set=set4`} width='200' height='200' />
      <div>
        <h3 className='gray'>{name}</h3>
        <p className='gray underline'>{email}</p>
      </div>
    </div >
  );
}

export default Card;
