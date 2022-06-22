import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Components/Header';
import ReserveButton from '../Components/ReserveButton';
import { fetchRockets, selectRockets, selectReserved } from '../app/features/rocketsReducer';
import store from '../app/store';

const Rockets = () => {
  // define state keys
  const rocketsList = useSelector(selectRockets);
  const reservedValue = useSelector(selectReserved);
  // function to toggle reserve button text
  const notreserved = 'reserve';
  const reserved = 'cancel reservation';
  const btnText = (e) => (e === 'true' ? reserved : notreserved);
  // dispatch the fetch action only once
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  // define styles for reserved span
  const reservedSpanStyle = {
    display: 'inline',
    background: '#2eabbf',
    color: 'white',
    width: '35px',
    height: '12px',
    fontSize: '12px',
    borderRadius: '5px',
    padding: '2px',
  };
  const nonReservedSpanStyle = {
    display: 'none',
  };
  const spanSetStyle = (e) => (e === 'true' ? reservedSpanStyle : nonReservedSpanStyle);
  // return the jsx
  return (
    <div>
      <Header />
      <ul className="rockets-container">
        { rocketsList.map((rocket) => (
          <li className="rocket-card" key={rocket.id} id={rocket.id}>
            <img className="rocket-img" src={rocket.flickr_images[1]} alt="rocket" />
            <div className="rocket-infos-div">
              <h1>{rocket.rocket_name}</h1>
              <p>
                <span style={spanSetStyle(reservedValue)}>
                  Reserved
                </span>
                {' '}
                {rocket.description}
              </p>
              <ReserveButton reservedValue={reservedValue} btnText={btnText} />
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Rockets;
