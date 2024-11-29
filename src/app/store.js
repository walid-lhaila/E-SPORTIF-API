import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/slices/authSlice';
import eventReducer from '../features/slices/eventSlice';
import participantsReducer from '../features/slices/participants';



const store = configureStore({
    reducer: {
        auth: authReducer,
        event: eventReducer,
        participants: participantsReducer,
    },
});

export default store;