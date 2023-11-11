import { Link, useLocation } from "react-router-dom";
import styles from "./CreationsList.module.scss";
import { Creation } from "../../types";

function CreationsList({ data }: { data: Creation[] }) {
  const location = useLocation();

  const linkTo = location.pathname.split('/').pop() === 'concepts' ? 'concepts' : 'vectors';
  
  return (
    <div className={styles.list}>
      {data.map((item: Creation) => (
        <Link
          className={styles["list-item"]}
          key={item.id}
          to={`/nfts/${linkTo}/${item.id}`}
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
