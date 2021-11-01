import React from "react";

// Components
import AddNewContactForm from "../../components/AddNewContactForm/AddNewContactForm";
import Card from "../../components/Card/Card";
import SearchForm from "../../components/SearchForm/SearchForm";
// Components

// Types
import { TUser, TContacts } from "../../types/contacts";
// Types

// Styles
import styles from "./Contacts.module.css";
// Styles

const Contacts = () => {
  const [contacts, setContacts] = React.useState<TContacts>([]);
  const [renderContacts, setRenderContacts] = React.useState<TContacts>([]);

  const handleAddNewContact = (contact: TUser) => {
    let newArr: TContacts = [];
    newArr.push(contact);
    setContacts([...contacts, ...newArr]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSaveNewContact = (id: string, newContact: TUser) => {
    let newArr: TContacts = [];
    newArr = contacts.map((contact) => {
      if (contact.id === id) {
        return (contact = newContact);
      }
      return contact;
    });
    setContacts(newArr);
  };

  const handleSearchContact = (word: string) => {
    const filteredContacts = contacts.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toUpperCase().includes(word.toUpperCase())
      )
    );
    setRenderContacts(filteredContacts);
  };

  React.useEffect(() => {
    setRenderContacts([...contacts]);
  }, [contacts]);

  return (
    <section className={styles.contacts}>
      <AddNewContactForm handleAddNewContact={handleAddNewContact} />
      {contacts.length > 0 && (
        <SearchForm
          handleSearchContact={(word: string) => handleSearchContact(word)}
        />
      )}
      <div className={styles.container}>
        {renderContacts.map((contact) => {
          return (
            <Card
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              address={contact.address}
              email={contact.email}
              handleDeleteContact={(id: string) => handleDeleteContact(id)}
              handleSaveNewContact={(newContact: TUser) =>
                handleSaveNewContact(contact.id, newContact)
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;
