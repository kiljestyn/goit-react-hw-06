// import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectorFilter, setFilter } from "./redux/filtersSlice";

// import phonebookContacts from "./contact.json";

const App = () => {
  // const phonebookContacts = [
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ];

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectorFilter);

  const onAddContact = (formData) => {
    const finalContact = { ...formData, id: nanoid() };

    dispatch(addContact(finalContact));

    // setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    // setContacts((prevContacts) =>
    //   prevContacts.filter((contact) => contact.id !== contactId)
    // );
    dispatch(deleteContact(contactId));
  };

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        onDeleteContact={onDeleteContact}
        contacts={filteredContacts}
      />
    </>
  );
};

export default App;
