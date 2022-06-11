//-------VANILA REDUX----------------
//
// import { combineReducers } from 'redux';
// import types from './phonebook-types';

// // const initialState = [
// //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// // ];

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return state.find(contact => contact.name === payload.name)
//         ? alert(`${payload.name} is already in contacts.`)
//         : [payload, ...state];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({ contacts, filter });
//
//
//----------REDUX TOOLKIT------------------
import { combineReducers } from 'redux';
import phonebookActions from './phonebook-actions';
import { createReducer } from '@reduxjs/toolkit';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// console.log(phonebookActions.addContact.type);

const contacts = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => {
    return state.find(contact => contact.name === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [payload, ...state];
  },

  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ contacts, filter });
