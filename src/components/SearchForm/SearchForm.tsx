import { FunctionComponent } from "react";

// Styles
import styles from "./SearchForm.module.css";
// Styles

// Components
import InputString from "../InputString/InputString";
import Button from "../Button/Button";
// Components

// Custom Hook
import { useFormWithValidation } from "../../customHooks/FormValidation";
// Custom Hook

interface ISearchForm {
  handleSearchContact: (word: string) => void;
}

type FC<P> = FunctionComponent<P>;

const SearchForm: FC<ISearchForm> = ({ handleSearchContact }) => {
  const searchInput = useFormWithValidation();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchContact(searchInput.values.searchInput);
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <InputString
        inputName="searchInput"
        inputType="text"
        inputId="searchInput"
        labelText="Search"
        inputWidth="800px"
        inputValue={searchInput.values.searchInput || ""}
        onChange={searchInput.handleChange}
      />
      <Button
        text="Найти"
        width="100px"
        height="50px"
        marginLeft="30px"
        alignSelf="center"
      />
    </form>
  );
};

export default SearchForm;
