import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

// export const fetchMissions = createAsyncThunk(
//   'missions/getMissions',
//   async (dispatch, getState) => await fetch(missionsUrl).then((response) => response.json()),
// );

export const fetchMissions = createAsyncThunk(
  'missions/getMissions',
  async (dispatch, getState) => fetch(missionsUrl).then(
    (res) => res.json(),
  ),
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
    status: null,
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.status = 'success';
      state.missions = action.payload;
    },
    [fetchMissions.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default missionsSlice.reducer;
