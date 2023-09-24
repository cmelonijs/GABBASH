import { Link } from "react-router-dom";
import styles from "./Nfts.module.scss";

function Nfts() {
  return (
    <div>
      <h2 className={styles.title}>NFTs</h2>
      <div className={styles.container}>
      <Link className={styles.category} to="/vectors">
        <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" className={styles['category-image']} alt="placeholder" />
        <h3 className={styles['category-title']}>Vectors</h3>
      </Link>
      <Link className={styles.category} to="/concepts">
        <img src="https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg" className={styles['category-image']} alt="placeholder" />
        <h3 className={styles['category-title']}>Concepts</h3>
      </Link>
      </div>
    </div>
  );
}

export default Nfts;
