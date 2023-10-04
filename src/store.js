import { configureStore } from '@reduxjs/toolkit';
import activeCityReducer from './slices/activeCitySlice';
import propertyReducer from './slices/propertySlice';

const store = configureStore({
  reducer: {
    activeCity: activeCityReducer,
    properties: propertyReducer,
  },
});

export default store;