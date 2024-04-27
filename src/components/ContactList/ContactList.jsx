import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map((contact) => (
    <Contact
      key={contact.id}
      contact={contact}
      onDeleteContact={onDeleteContact}
    />
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactList;
