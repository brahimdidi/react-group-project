import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/getRockets',
  async () => {
    const res = await fetch(rocketsUrl);
    const rockets = await res.json();
    const rocketsList = rockets.map((rocket) => ({
      id: rocket.rocket_id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      img: rocket.flickr_images,
      reserved: false,
    }));
    return rocketsList;
  });

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],

  },
  reducers: {
    reserveRocket: (state, action) => {
      const { list, id } = action.payload;
      const setReserved = (e) => (e === 'true' ? 'false' : 'true');
      const newList = list.map((el) => {
        switch (el.id) {
          case (id):
            return { ...el, reserved: setReserved(el.reserved) };
          default: return el;
        }
      });
      state.list = newList;
    },
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
      state.status = 'failed';
    },
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export const selectRockets = (state) => state.rockets.list;
export const selectState = (state) => state.rockets;
export default rocketsSlice.reducer;
