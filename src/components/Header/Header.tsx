// Styles
import styles from "./Header.module.css";
// Styles

// Components
import NavMenu from "../NavMenu/NavMenu";
// Components

const Header = () => {
  return (
    <header className={styles.header}>
      <NavMenu />
    </header>
  );
};

export default Header;
