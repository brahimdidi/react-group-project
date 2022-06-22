import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { fetchMissions } from '../app/features/missionsReducer';
import './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <Header />
      <h1>Missions</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {missions.map((missions) => (
            <tr key={missions.id}>
              <td>{missions.mission_name}</td>
              <td>{missions.description}</td>
              <td>NOT A MEMBER</td>
              <td>Join Mission</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
