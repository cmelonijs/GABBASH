import styles from "./Nfts.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";
import Button from "../../components/button/Button";
import { goBack } from "../../helpers";
import { useNavigate } from "react-router-dom";

const nfts = [
  {
    name: "Vectors",
    path: "/nfts/vectors",
  },
  {
    name: "Concepts",
    path: "/nfts/concepts",
  },
];

function Nfts() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className={styles.title}>NFTs</h2>
      <div className={styles.back}>
        <Button
          variant="secondary"
          onClick={() => goBack(navigate)}
          text="Back"
        />
      </div>
      <div className={styles.container}>
        {nfts.map((nft) => (
          <CategoryCard key={nft.name} category={nft} cardWidth="48%" />
        ))}
      </div>
    </div>
  );
}

export default Nfts;
