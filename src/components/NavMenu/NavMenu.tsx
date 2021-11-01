import { Link } from "react-router-dom";

// Styles
import styles from "./NavMenu.module.css";
// Styles

const NavMenu = () => {
  return (
    <nav className={styles.nav_menu}>
      <Link to="/contacts" className={styles.link}>
        Контакты
      </Link>
    </nav>
  );
};

export default NavMenu;
