import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, selectState } from '../app/features/rocketsReducer';

const ReserveButton = (props) => {
  const currentState = useSelector(selectState);
  const dispatch = useDispatch();
  const { reservedValue, btnText } = props;

  const reservedStyle = {
    background: 'hsl(0deg 0% 100%)',
    color: 'hsl(204deg 6% 65%)',
    width: '180px',
    border: '1px solid hsl(210deg 6% 81%)',
  };
  const nonReservedStyle = {
    background: 'hsl(211deg 100% 50%)',
    color: 'white',
    width: '150px',
    border: 'unset',
    padding: '1px',
  };
  const btnSetStyle = (e) => (e === 'true' ? reservedStyle : nonReservedStyle);

  return (
    <button
      onClick={() => dispatch(reserveRocket(currentState))}
      style={btnSetStyle(reservedValue)}
    >
      {btnText(reservedValue)}
    </button>
  );
};

export default ReserveButton;
