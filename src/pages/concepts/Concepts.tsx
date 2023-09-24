import styles from "./Concepts.module.scss";
import {data} from "../../data"

function Concepts() {
    return (
      <div>
        <h2 className={styles.title}>Concepts</h2>
            <div className={styles.list}>
       {data.map((item: any, index: any) => (
        <div key={index} className={styles["list-item"]}>
        <img src={item.image} alt="placeholder" />
        <div className={styles["list-item__content"]}>
          <h3 className={styles["list-item__title"]}>{item.title}</h3>
          <p className={styles["list-item__description"]}>
            {item.description}
          </p>
        </div>
    </div>
      ))} 
    </div>
      </div>
    );
  }
  
  export default Concepts;
  