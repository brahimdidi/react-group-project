import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/getRockets', async () => fetch(rocketsUrl).then((res) => res.json()));

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    status: null,
    reserved: true,
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [fetchRockets.rejected]: (state) => {
      state.list = payload;
      state.status = 'failed';
    },
  },
});
export const selectRockets = (state) => state.rockets.list;
export const selectStatus = (state) => state.rockets.status;
export const selectReserved = (state) => state.rockets.reserved;
export default rocketsSlice.reducer;
