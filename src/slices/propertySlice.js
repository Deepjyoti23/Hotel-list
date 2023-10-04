// slices/propertySlice.js
import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
  name: 'properties',
  initialState: [],
  reducers: {
    loadProperties: (state, action) => {
      return action.payload;
    },
  },
});

export const { loadProperties } = propertySlice.actions;
export default propertySlice.reducer;
