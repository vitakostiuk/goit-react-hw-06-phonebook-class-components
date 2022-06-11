//-------VANILA REDUX----------------
// import types from './phonebook-types';
// import shortid from 'shortid';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
//
//
//----------REDUX TOOLKIT------------------
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

//----create Actions
// -- in addContact need prepare Payload
const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
// console.log(addContact({ name: 'vita kos', number: '555-55-55' }));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
