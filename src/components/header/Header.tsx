import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">
          <h1>Gabbash</h1>
        </a>
      </div>
      <div className={styles.header__menu}>
        <ul className={styles["header__menu-list"]}>
          <li className={styles["header__menu-list__item"]}>
            <a href="/about">CHI SIAMO</a>
          </li>
          <li className={styles["header__menu-list__item"]}>
            <a href="/events">GLI EVENTI</a>
          </li>
          <li className={styles["header__menu-list__item"]}>
            <a href="/coming-next">COMING NEXT</a>
          </li>
          <li className={styles["header__menu-list__item"]}>
            <a href="/contacts">CONTATTI</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
