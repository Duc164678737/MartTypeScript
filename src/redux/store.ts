
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import rootReducers from './reducers';

const store = configureStore({
    reducer: rootReducers
});

export default store;

