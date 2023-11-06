// Penyimpanan_data.js
import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './Penyimpanan_data';
import Auth_Pneyimapan from './Auth_Pneyimapan';

const store = configureStore({reducer: {
    roomReducer,
    auth: Auth_Pneyimapan,
}});

export default store;