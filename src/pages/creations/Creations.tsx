import { useNavigate } from "react-router-dom";
import styles from "./Creations.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";
import BackButton from "../../components/back-button/BackButton";

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
  const navigate = useNavigate();
  return (
    <div>
      <h2 className={styles.title}>Creations</h2>
      <div className={styles.back}>
        <BackButton />
      </div>
      <div className={styles.container}>
        {creations.map((creation) => (
          <CategoryCard
            key={creation.name}
            category={creation}
            cardWidth="31.5%"
          />
        ))}
      </div>
    </div>
  );
}

export default Creations;
