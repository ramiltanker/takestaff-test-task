import React, { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import InputString from "../InputString/InputString";
import Button from "../Button/Button";
// Components

// Styles
import styles from "./AddNewContactForm.module.css";
// Styles

// Custom Hooks
import { useFormWithValidation } from "../../customHooks/FormValidation";
// Custom Hooks

// Types
import { TUser } from "../../types/contacts";
// Types

interface IAddNewContactForm {
  handleAddNewContact: (contact: TUser) => void;
}

type FC<P> = FunctionComponent<P>;

const AddNewContactForm: FC<IAddNewContactForm> = ({ handleAddNewContact }) => {
  const name = useFormWithValidation();
  const email = useFormWithValidation();
  const address = useFormWithValidation();
  const phone = useFormWithValidation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      name.values.name &&
      email.values.email &&
      address.values.address &&
      phone.values.phone
    ) {
      const newContact = {
        id: uuidv4(),
        name: name.values.name,
        email: email.values.email,
        address: address.values.address,
        phone: phone.values.phone,
      };
      handleAddNewContact(newContact);
      name.values.name = "";
      email.values.email = "";
      address.values.address = "";
      phone.values.phone = "";
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputString
          inputName="name"
          inputType="text"
          inputId="name"
          labelText="Имя"
          inputWidth="600px"
          inputValue={name.values.name || ""}
          onChange={name.handleChange}
        />
        <InputString
          inputName="email"
          inputType="email"
          inputId="email"
          labelText="Email"
          inputWidth="600px"
          inputValue={email.values.email || ""}
          onChange={email.handleChange}
        />
        <InputString
          inputName="address"
          inputType="text"
          inputId="address"
          labelText="Address"
          inputWidth="600px"
          inputValue={address.values.address || ""}
          onChange={address.handleChange}
        />
        <InputString
          inputName="phone"
          inputType="text"
          inputId="phone"
          labelText="Phone"
          inputWidth="600px"
          inputValue={phone.values.phone || ""}
          onChange={phone.handleChange}
        />
        <Button
          text="Добавить"
          width="200px"
          height="50px"
          marginTop="30px"
          alignSelf="flex-end"
        />
      </form>
    </section>
  );
};

export default AddNewContactForm;
