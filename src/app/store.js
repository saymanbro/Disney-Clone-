import  { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice'
import movieReducer from '../features/movie/movieSlice';
import userSlice from '../features/User/userSlice';

const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: userSlice
    }
}) 

export default store;