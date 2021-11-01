import React from "react";

import { FunctionComponent } from "react";

// Styles
import styles from "./Card.module.css";
// Styles

// Custom Hooks
import { useFormWithValidation } from "../../customHooks/FormValidation";
// Custom Hooks

// Types
import { TUser } from "../../types/contacts";
// Types

interface ICard {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  handleDeleteContact: (id: string) => void;
  handleSaveNewContact: (newContact: TUser) => void;
}

type FC<P> = FunctionComponent<P>;

const Card: FC<ICard> = ({
  id,
  name,
  phone,
  address,
  email,
  handleDeleteContact,
  handleSaveNewContact,
}) => {
  const [isInputDisabled, setIsInputDisabled] = React.useState<boolean>(true);

  const nameInput = useFormWithValidation();
  const emailInput = useFormWithValidation();
  const addressInput = useFormWithValidation();
  const phoneInput = useFormWithValidation();

  const handleEditContact = () => {
    setIsInputDisabled(false);
  };

  React.useEffect(() => {
    if (name && email && address && phone) {
      nameInput.values.nameInput = name;
      emailInput.values.emailInput = email;
      addressInput.values.addressInput = address;
      phoneInput.values.phoneInput = phone;
    }
  }, [name, email, address, phone]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nameInput.values.nameInput !== name ||
      emailInput.values.emailInput !== email ||
      addressInput.values.addressInput !== address ||
      phoneInput.values.phoneInput !== phone
    ) {
      const newContact = {
        id: id,
        name: nameInput.values.nameInput,
        email: emailInput.values.emailInput,
        address: addressInput.values.addressInput,
        phone: phoneInput.values.phoneInput,
      };
      handleSaveNewContact(newContact);
      setIsInputDisabled(true);
    }
    return;
  };

  return (
    <section className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <input
          className={styles.input}
          name="nameInput"
          value={nameInput.values.nameInput || name || ""}
          onChange={nameInput.handleChange}
          type="text"
          disabled={isInputDisabled}
        />
        <input
          className={styles.input}
          name="emailInput"
          value={emailInput.values.emailInput || email || ""}
          onChange={emailInput.handleChange}
          type="email"
          disabled={isInputDisabled}
        />
        <input
          className={styles.input}
          name="addressInput"
          value={addressInput.values.addressInput || address || ""}
          onChange={addressInput.handleChange}
          type="text"
          disabled={isInputDisabled}
        />
        <input
          className={styles.input}
          name="phoneInput"
          value={phoneInput.values.phoneInput || phone || ""}
          onChange={phoneInput.handleChange}
          type="text"
          disabled={isInputDisabled}
        />
        <button className={styles.button_save} />
      </form>
      <button
        className={styles.button_delete}
        onClick={() => handleDeleteContact(id)}
      />
      <button className={styles.button_edit} onClick={handleEditContact} />
    </section>
  );
};

export default Card;
