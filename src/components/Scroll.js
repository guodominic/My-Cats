import React from 'react';

function Scroll(props) {
  return (
    <div style={{ overflowY: 'scroll', border: '0px solid white', height: '900px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;