import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Components/Header';
import ReserveButton from '../Components/ReserveButton';
import { fetchRockets, selectRockets, selectReserved } from '../app/features/rocketsReducer';

const Rockets = () => {
  const rocketsList = useSelector(selectRockets);
  const reservedValue = useSelector(selectReserved);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <ul className="rockets-container">
        { rocketsList.map((rocket) => (
          <li className="rocket-card" key={rocket.id} id={rocket.id}>
            <img className="rocket-img" src={rocket.flickr_images[1]} alt="rocket" />
            <div className="rocket-infos-div">
              <h1>{rocket.rocket_name}</h1>
              <p>{rocket.description}</p>
              <ReserveButton reservedValue={reservedValue} />
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Rockets;
