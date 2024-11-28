import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/slices/authSlice';
import eventReducer from '../features/slices/eventSlice';



const store = configureStore({
    reducer: {
        auth: authReducer,
        event: eventReducer,
    },
});

export default store;