import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <div className={styles["header__menu-list__item"]}>
            LOGO
          </div>
        </Link>
      </div>
      <div className={styles.header__menu}>
        <ul className={styles["header__menu-list"]}>
          <li>
            <Link className={styles["header__menu-list__item"]} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles["header__menu-list__item"]} to="/about">
              What About Me
            </Link>
          </li>
          <li>
            <Link className={styles["header__menu-list__item"]} to="/creations">
              Creations
            </Link>
          </li>
          <li>
            <Link className={styles["header__menu-list__item"]} to="/contacts">
              Let's keep in touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
