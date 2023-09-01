import styles from "./Creations.module.scss";

const data = [
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://gdrtales.files.wordpress.com/2012/02/angelo-di-platino.jpg",
  },
];

function Creations() {
  return (
    <div>
      <h2 className={styles.title}>Creations</h2>
      <div className={styles.list}>
        {data.map((item, index) => (
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

export default Creations;
