import { Component } from 'react';
import { ContactsTitle, PhonebookTitle } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
