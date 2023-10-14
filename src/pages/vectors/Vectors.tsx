import styles from "./Vectors.module.scss";
import { data } from "../../data";
import CreationsList from "../../components/creations-list/CreationsList";

function Vectors() {
  return (
    <div>
      <h2 className={styles.title}>Vectors</h2>
      <CreationsList data={data} />
    </div>
  );
}

export default Vectors;
