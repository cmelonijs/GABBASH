import { Link } from "react-router-dom";
import styles from "./Creations.module.scss";

function Creations() {
  return (
    <div>
      <h2 className={styles.title}>Creations</h2>
      <div className={styles.container}>
      <Link className={styles.category} to="/nfts">
        <h3 className={styles['category-title']}>NFT</h3>
      </Link>
      <Link className={styles.category} to="/concepts">
        <h3 className={styles['category-title']}>Vectors</h3>
      </Link>
      <Link className={styles.category} to="/concepts">
        <h3 className={styles['category-title']}>Concepts</h3>
      </Link>
      </div>
    </div>
  );
}

export default Creations;
