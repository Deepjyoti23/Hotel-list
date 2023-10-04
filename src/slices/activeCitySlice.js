// slices/activeCitySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'London';

const activeCitySlice = createSlice({
  name: 'activeCity',
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveCity } = activeCitySlice.actions;
export default activeCitySlice.reducer;
