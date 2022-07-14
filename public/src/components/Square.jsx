import React from 'react';
import styled from 'styled-components';

export default function Square({ val, handleClick }) {
  return (
    <Button onClick={handleClick}>{val}</Button>
  );
};

const Button = styled.button`
    border: 2px solid darkblue
    fontSize: 30px;
    fontWeight: 800;
    cursor: pointer;
    outline: none;
`;