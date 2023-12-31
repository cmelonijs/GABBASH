import styles from "./Creations.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";
import BackButton from "../../components/back-button/BackButton";
import { useEffect } from "react";

const creations = [
  {
    name: "NFTs",
    path: "/nfts",
  },
  {
    name: "Vectors",
    path: "/nfts/vectors",
  },
  {
    name: "Concepts",
    path: "/nfts/concepts",
  },
];

function Creations() {
  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  return (
    <div>
      <BackButton />
      <h2 className={styles.title}>Creations</h2>
      <div className={styles.back}>
      </div>
      <div className={styles.container}>
        {creations.map((creation) => (
          <CategoryCard
            key={creation.name}
            category={creation}
            cardWidth="100%"
          />
        ))}
      </div>
    </div>
  );
}

export default Creations;
