import { useSelector, useDispatch } from 'react-redux';
import Header from '../Components/Header';
import styles from './MyProfile.module.css';
import { selectRockets, reserveRocket } from '../app/features/rocketsReducer';
import { selectMissions, joinMission } from '../app/features/missionsReducer';

const MyProfile = () => {
  const rocketsList = useSelector(selectRockets);
  const missionsList = useSelector(selectMissions);
  const reservedRockets = rocketsList.filter((b) => b.reserved);
  const reservedMissions = missionsList.filter((b) => b.joined);
  const generateKey = () => `_${Math.random().toString(36).substr(2, 9)}`;
  const dispatch = useDispatch();
  const clickHandler = (list, id) => {
    dispatch(list(id));
  };
  // JSX items
  // function to checken name
  const checkName = (name) => {
    if (name.length > 25) {
      const newName = `${name.substring(0, 24)}...`;
      return newName;
    }
    return name;
  };
  const itemJsx = (e, i, btnText) => (
    <li key={generateKey()} className={styles.myItem}>
      <h1 className={styles.myItemName}>{checkName(e.name)}</h1>
      <button type="button" onClick={() => clickHandler(i, e.id)}>{btnText}</button>
    </li>
  );
  const profileEmpty = (b) => (
    <li key={generateKey()} className={styles.noItems}>
      You have no
      {' '}
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
            {reservedMissions.length ? ((reservedMissions.map((mission) => (itemJsx(mission, joinMission, 'leave mission'))))) : profileEmpty('Missions reserved') }
          </ul>
        </div>
        <div className={styles.myProfileItem}>
          <h1>My Rockets</h1>
          <ul className={styles.myProfileItemList}>
            {reservedRockets.length ? ((reservedRockets.map((rocket) => (itemJsx(rocket, reserveRocket, 'cancel reservation'))))) : profileEmpty('Rockets reserved') }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
