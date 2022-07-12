import React from 'react';

export default function Messages({ msgs }) {
  return (
    <div>
      {msgs.map((msg, i) => {
        return (<div key={i}>- {msg}</div>);
      })}
    </div>
  );
};
