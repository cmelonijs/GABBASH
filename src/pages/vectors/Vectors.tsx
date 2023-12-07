import styles from "./Vectors.module.scss";
import { data } from "../../data";
import CreationsList from "../../components/creations-list/CreationsList";
import BackButton from "../../components/back-button/BackButton";
import { useEffect } from "react";

function Vectors() {
  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  return (
    <div>
      <BackButton />
      <h2 className={styles.title}>Vectors</h2>
      <CreationsList data={data} />
    </div>
  );
}

export default Vectors;
