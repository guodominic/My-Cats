import React from 'react';

function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        className='pa2 br3 ba b--yellow'
        type='search'
        placeholder='Find Cats'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;