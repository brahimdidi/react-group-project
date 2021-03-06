import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rocketsReducer';
import missionsReducer from './features/missionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
