import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";
import { data } from "../../data";
import { Creation } from "../../types";
import BackButton from "../../components/back-button/BackButton";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const creation = data.find((item: Creation) => item.id === id);
  const backgroundImage = creation ? creation.image : null;

  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  return (
    <div
      className={styles.detail}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
      >
      <BackButton />
      <div className={styles["detail-info"]}>
        <h1>{creation?.title}</h1>
        <p>{creation?.description}</p>
        <a href="https://www.google.it/?hl=it">Crypto.com</a>
      </div>
    </div>
  );
}

export default Detail;
