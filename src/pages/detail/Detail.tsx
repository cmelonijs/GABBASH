import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";
import { data } from "../../data";

function Detail() {
  const { id } = useParams();
  const creation = data.find((item: any) => item.id === id);
  const backgroundImage = creation ? creation.image : null;
  return (
    <div
      className={styles.detail}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {id}
    </div>
  );
}

export default Detail;
