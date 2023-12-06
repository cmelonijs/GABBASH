import styles from "./Concepts.module.scss";
import { data } from "../../data";
import CreationsList from "../../components/creations-list/CreationsList";
import BackButton from "../../components/back-button/BackButton";

function Concepts() {
  return (
    <div>
      <BackButton />
      <h2 className={styles.title}>Concepts</h2>
      <CreationsList data={data} />
    </div>
  );
}

export default Concepts;
