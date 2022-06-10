//-------VANILA REDUX----------------
/*
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
*/
//
//
//----------REDUX TOOLKIT------------------
// ----imported configureStore
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

// ----create Store
// -- devTools for development, but not production
// -- to reduser give object
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
