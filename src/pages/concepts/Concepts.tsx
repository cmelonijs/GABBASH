import styles from "./Concepts.module.scss";
import { data } from "../../data";
import CreationsList from "../../components/creations-list/CreationsList";

function Concepts() {
  return (
    <div>
      <h2 className={styles.title}>Concepts</h2>
      <CreationsList data={data} />
    </div>
  );
}

export default Concepts;
