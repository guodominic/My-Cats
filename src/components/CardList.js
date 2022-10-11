import React from 'react';
import Card from './Card';

function CardList({ cats }) {
  return (
    <div>
      {
        cats.map((cat) => {
          return (
            <Card
              key={cat.id}
              id={cat.id}
              name={cat.name.substring(0, 14)}
              email={cat.email.substring(0, 22)}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;