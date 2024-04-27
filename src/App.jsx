import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import phonebookContacts from "./contact.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contactsStorage");
    return JSON.parse(stringifiedContacts) ?? phonebookContacts;
    // const parsedContacts = JSON.parse(stringifedContacts);
    // return parsedContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contactsStorage", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContact = { ...formData, id: nanoid() };

    setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
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
}

export default App;
