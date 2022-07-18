import React from 'react';
import styled from 'styled-components';

export default function Messages({ msgs }) {
  return (
    // <MessagesSection>
    <div>
      {msgs.map((msg, i) => {
        return (<div key={i}>- {msg}</div>);
      })}
    </div>
    // </MessagesSection>
  );
};

const MessagesSection = styled.div`
  max-height: 100px;
  overflow-y: scroll;
`;
