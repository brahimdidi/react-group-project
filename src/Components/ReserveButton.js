import React from 'react';

const ReserveButton = (props) => {
  const { reservedValue } = props;
  const reservedStyle = {
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (<button style={reservedValue ? reservedStyle : null}>reserve </button>);
};

export default ReserveButton;
