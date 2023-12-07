import styles from "./Concepts.module.scss";
import { data } from "../../data";
import CreationsList from "../../components/creations-list/CreationsList";
import BackButton from "../../components/back-button/BackButton";
import { useEffect } from "react";

function Concepts() {

  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  
  return (
    <div>
      <BackButton />
      <h2 className={styles.title}>Concepts</h2>
      <CreationsList data={data} />
    </div>
  );
}

export default Concepts;
