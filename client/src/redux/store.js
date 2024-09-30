import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';


export const store = configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development mode
})