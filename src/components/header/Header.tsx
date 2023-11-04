import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    // Aggiorna activeRoute quando la posizione cambia
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <div className={styles["header__menu-list__item"]}>LOGO</div>
        </Link>
      </div>
      <div className={styles.header__menu}>
        <ul className={styles["header__menu-list"]}>
          <li>
            <Link className={activeRoute === "/" ? styles["header__menu-list__active"] : styles["header__menu-list__item"]} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={activeRoute.includes('nfts') ? styles["header__menu-list__active"] : styles["header__menu-list__item"]} to="/nfts">
              NFTs
            </Link>
          </li>
          <li>
            <Link className={activeRoute.includes('creations') ? styles["header__menu-list__active"] : styles["header__menu-list__item"]} to="/creations">
              Creations
            </Link>
          </li>
          <li>
            <Link className={activeRoute.includes('contacts') ? styles["header__menu-list__active"] : styles["header__menu-list__item"]} to="/contacts">
              Let's keep in touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
