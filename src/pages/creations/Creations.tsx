import { useNavigate } from "react-router-dom";
import styles from "./Creations.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";
import Button from "../../components/button/Button";
import { goBack } from "../../helpers";

const creations = [
  {
    name: "NFTs",
    path: "/nfts",
  },
  {
    name: "Vectors",
    path: "/vectors",
  },
  {
    name: "Concepts",
    path: "/concepts",
  },
];

function Creations() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className={styles.title}>Creations</h2>
      <div className={styles.back}>
        <Button variant="secondary" onClick={() => goBack(navigate)} text="Back" />
      </div>
      <div className={styles.container}>
        {creations.map((creation) => (
          <CategoryCard key={creation.name} category={creation} cardWidth="31.5%" />
        ))}
      </div>
    </div>
  );
}

export default Creations;
