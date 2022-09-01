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
              id={cats[i].id}
              name={cats[i].name.substring(0, 14)}
              email={cats[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;