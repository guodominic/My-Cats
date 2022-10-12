import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ name, email, id }) {
  const navigate = useNavigate()
  const toCatPage = (id) => {
    navigate(`/My-Cats/${id}`)
  }

  return (
    <div
      onClick={() => { toCatPage(id) }}
      className='tc grow bg-yellow br3 pa3 ma2 dib bw2 shadow-5 pointer'>
      <img alt='cats' src={`https://robohash.org/${id + 200}?set=set4`} width='200' height='200' />
      <div>
        <h3 className='gray'>{name}</h3>
        <p className='gray underline'>{email}</p>
      </div>
    </div >
  );
}

export default Card;
