// Styles
import styles from "./SignIn.module.css";
// Styles

// Redux
import { handleSignIn } from "../../redux/actions/auth";

import { useDispatch, useSelector } from "../../redux/typedHooks";
// Redux

// Custom Hooks
import { useFormWithValidation } from "../../customHooks/FormValidation";
// Custom Hooks

// Components
import InputString from "../../components/InputString/InputString";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
// Components

const SignIn = () => {
  const dispatch = useDispatch();

  const email = useFormWithValidation();
  const password = useFormWithValidation();

  const { isLogged, isLoading } = useSelector((store) => store.auth);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.values.email && password.values.password) {
      dispatch(handleSignIn(email.values.email, password.values.password));
    }
  };

  return (
    <>
      {isLoading && <Loader isLoaderActive={isLoading} />}
      <section className={styles.sign_in}>
        <form className={styles.form} onSubmit={handleSubmitForm}>
          <InputString
            inputName="email"
            inputType="text"
            inputId="email"
            labelText="Email"
            inputWidth="500px"
            inputValue={email.values.email || ""}
            onChange={email.handleChange}
          />
          <InputString
            inputName="password"
            inputType="text"
            inputId="password"
            labelText="Password"
            inputWidth="500px"
            inputValue={password.values.password || ""}
            onChange={password.handleChange}
          />
          <Button
            text="Войти"
            width="200px"
            height="50px"
            marginTop="30px"
            alignSelf="flex-end"
          />
        </form>
      </section>
    </>
  );
};

export default SignIn;
