import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";
import { data } from "../../data";
import { Creation } from "../../types";
import BackButton from "../../components/back-button/BackButton";

function Detail() {
  const { id } = useParams();
  const creation = data.find((item: Creation) => item.id === id);
  const backgroundImage = creation ? creation.image : null;
  return (
    <div
      className={styles.detail}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
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
