import { useSelector, useDispatch } from 'react-redux';
import Header from '../Components/Header';
import styles from './MyProfile.module.css';
import { selectRockets, reserveRocket } from '../app/features/rocketsReducer';

const MyProfile = () => {
  const rocketsList = useSelector(selectRockets);
  const reservedRockets = rocketsList.filter((b) => b.reserved);
  const reservedMissions = [{ name: 'new', id: '23', reserved: 'true' },
    { name: 'any', id: '20', reserved: 'true' }, { name: 'mis', id: '22', reserved: 'true' }];
  const generateKey = () => `_${Math.random().toString(36).substr(2, 9)}`;
  const dispatch = useDispatch();
  const clickHandler = (list, id) => {
    dispatch(list(id));
  };
  // JSX items
  const itemJsx = (e) => (
    <li key={generateKey()} className={styles.myItem}>
      <h1 className={styles.myItemName}>{e.name}</h1>
      <button type="button" onClick={() => clickHandler(reserveRocket, e.id)}>Cancel Reservation</button>
    </li>
  );
  const profileEmpty = (b) => (
    <li key={generateKey()} className={styles.noItems}>
      You have no
      {b}
      {' '}
      yet!
    </li>
  );
  return (
    <div>
      <Header />
      <section className={styles.myProfileSection}>
        <div className={styles.myProfileItem}>
          <h1>My Missions</h1>
          <ul className={styles.myProfileItemList}>
            {reservedMissions.length ? ((reservedMissions.map((mission) => (itemJsx(mission))))) : profileEmpty('Missions reserved') }
          </ul>
        </div>
        <div className={styles.myProfileItem}>
          <h1 className={styles.myItemName}>My Rockets</h1>
          <ul className={styles.myProfileItemList}>
            {reservedRockets.length ? ((reservedRockets.map((rocket) => (itemJsx(rocket))))) : profileEmpty('Rockets reserved') }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
