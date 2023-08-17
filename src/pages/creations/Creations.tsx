import styles from "./Creations.module.scss";

function Creations() {
  return (
    <div>
      <h2 className={styles.title}>Creations</h2>
      <div className={styles.list}>
        <div className={styles["list-item"]}>
            <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" alt="placeholder" />
            <div className={styles["list-item__content"]}>
              <h3 className={styles["list-item__title"]}>Title</h3>
              <p className={styles["list-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              </p>
            </div>
        </div>
        <div className={styles["list-item"]}>
            <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" alt="placeholder" />
            <div className={styles["list-item__content"]}>
              <h3 className={styles["list-item__title"]}>Title</h3>
              <p className={styles["list-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              </p>
            </div>
        </div>
        <div className={styles["list-item"]}>
            <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" alt="placeholder" />
            <div className={styles["list-item__content"]}>
              <h3 className={styles["list-item__title"]}>Title</h3>
              <p className={styles["list-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              </p>
            </div>
        </div>
        <div className={styles["list-item"]}>
            <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" alt="placeholder" />
            <div className={styles["list-item__content"]}>
              <h3 className={styles["list-item__title"]}>Title</h3>
              <p className={styles["list-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              </p>
            </div>
        </div>
        <div className={styles["list-item"]}>
            <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" alt="placeholder" />
            <div className={styles["list-item__content"]}>
              <h3 className={styles["list-item__title"]}>Title</h3>
              <p className={styles["list-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Creations;
