import styles from "./App.module.scss";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1>GABBASH WEBSITE</h1>
        <p>
          Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
          Libero culpa <span>reprehenderit</span> aut itaque{" "}
          <span>temporibus</span> magni corrupti optio.
        </p>
        <div className={styles.buttons}>
          <Link to="/creations">
            <Button variant="primary" text="Creations" />
          </Link>
          <Link to="/contacts">
            <Button variant="secondary" text="Contact me" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
