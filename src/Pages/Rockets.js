import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { selectRockets } from '../app/features/rocketsReducer';
import Header from '../Components/Header';
import { fetchRockets, selectRockets, selectStatus } from '../app/features/rocketsReducer';

const Rockets = () => {
  const rocketsList = useSelector(selectRockets);
  const listStatus = useSelector(selectStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <h1>
        The rockets wer fetched with
        {' '}
        {listStatus}
      </h1>
      <ul>
        { rocketsList.map((rocket) => (
          <li key={rocket.id}>
            id:
            {rocket.id}
            {' '}
            name:
            {rocket.rocket_name}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Rockets;
