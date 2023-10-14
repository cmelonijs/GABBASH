import { Link } from "react-router-dom";
import styles from "./CreationsList.module.scss";

type Creation = {
  id: string;
  title: string;
  description: string;
  image: string;
};

function CreationsList({ data }: { data: Creation[] }) {
  return (
    <div className={styles.list}>
      {data.map((item: Creation) => (
        <Link
          className={styles["list-item"]}
          key={item.id}
          to={`/concepts/${item.id}`}
        >
          <img src={item.image} alt="placeholder" />
          <div className={styles["list-item__content"]}>
            <h3 className={styles["list-item__title"]}>{item.title}</h3>
            <p className={styles["list-item__description"]}>
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CreationsList;
