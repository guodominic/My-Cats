import React from 'react';
import Card from './Card';

function CardList({ cats }) {
  return (
    <div>
      {
        cats.map((user, i) => {
          /*           if (true) {
                      throw new Error('CardList is not working!!');
                    } */
          return (
            <Card
              key={i}
              id={cats[i].id} s
              name={cats[i].name}
              email={cats[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;