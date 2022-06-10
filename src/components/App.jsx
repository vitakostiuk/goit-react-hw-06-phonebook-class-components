import React, { Component } from 'react';
// import shortid from 'shortid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import s from '../components/App.module.css';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   this.setState(({ contacts }) => {
  //     return contacts.find(item => item.name === contact.name)
  //       ? alert(`${contact.name} is already in contacts.`)
  //       : { contacts: [contact, ...contacts] };
  //   });
  // };

  // deleteContact = contactId => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // filteredContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   parsedContacts && this.setState({ contacts: parsedContacts });
  // }

  // componentDidUpdate(prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  render() {
    // const { filter } = this.state;
    return (
      <div className={s.Container}>
        <h2 className={s.Title}>Phonebook</h2>
        <ContactForm
        // onSubmit={this.addContact}
        />

        <h2 className={s.Title}>Contacts</h2>
        <Filter
        // value={filter}
        // changeFilter={this.changeFilter}
        />
        <ContactList
        // contacts={this.filteredContacts()}
        // onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
