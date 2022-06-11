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
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook/phonebook-reducer';
import logger from 'redux-logger';

const persistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  phonebook: persistReducer(persistConfig, phonebookReducer),
});

// ----create Store
// -- devTools for development, but not production
// -- to reduser give object
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export default { store, persistor };

// export эквивалентно ниже
// export default () => {
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
