import React from 'react';

export default Square(props) {
  return (
    <button onClick={props.handleClick}>{props.value}</button>
  );
};
