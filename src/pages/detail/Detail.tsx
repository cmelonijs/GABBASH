import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";
import { data } from "../../data";
import { Creation } from "../../types";

function Detail() {
  const { id } = useParams();
  const creation = data.find((item: Creation) => item.id === id);
  const backgroundImage = creation ? creation.image : null;
  return (
    <div
      className={styles.detail}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <h1>
        {creation?.title}
      </h1>
      <p>
        {creation?.description}
      </p>
    </div>
  );
}

export default Detail;
