import css from "./Contact.module.css";
const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={css.contactItem}>
      <div>
        <p className={css.text}>👤{contact.name}</p>
        <p className={css.text}>📞{contact.number}</p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
