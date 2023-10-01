import { useNavigate } from "react-router-dom";
import styles from "./Creations.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";

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
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <h2 className={styles.title}>Creations</h2>
      <button onClick={goBack}>Back</button>	
      <div className={styles.container}>
        {creations.map((creation) => (
          <CategoryCard key={creation.name} category={creation} />
        ))}
      </div>
    </div>
  );
}

export default Creations;
