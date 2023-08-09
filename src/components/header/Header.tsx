import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <div className={styles.header__logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABnIFBV_3qw40zx27EgpkfaFrq_1R5ANJji4DwfAVezcTPiKEQ7tX6OE5Pip8gQ78AZ8&usqp=CAU"
              alt="Clip"
            />
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
            <Link className={styles["header__menu-list__item"]} to="/products">
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
