import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-left']}>
        <h1 className={styles['footer-logo']}>LOGO</h1>
      </div>
      <div className={styles['footer-right']}>
        <div className={styles['footer-right-menu']}>
        <ul className={styles["footer-right-menu-list"]}>
          <li>
            <Link className={styles["footer-right-menu-list__item"]} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles["footer-right-menu-list__item"]} to="/about">
              What About Me
            </Link>
          </li>
          <li>
            <Link className={styles["footer-right-menu-list__item"]} to="/creations">
              Creations
            </Link>
          </li>
          <li>
            <Link className={styles["footer-right-menu-list__item"]} to="/contacts">
              Let's keep in touch
            </Link>
          </li>
        </ul>
        </div>
        <div className={styles['footer-right-menu']}>
        <ul className={styles["footer-right-menu-list"]}>
          <li>
            <a className={styles["footer-right-menu-list__item"]} href="https://www.google.com">
              Instagram
            </a>
          </li>
          <li>
            <a className={styles["footer-right-menu-list__item"]} href="https://www.google.com">
              Crypto
            </a>
          </li>
          <li>
            <a className={styles["footer-right-menu-list__item"]} href="https://www.google.com">
              Facebook
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
