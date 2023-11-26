import styles from "./Nfts.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";
import BackButton from "../../components/back-button/BackButton";

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
  return (
    <div>
      <h2 className={styles.title}>NFTs</h2>
      <div className={styles.back}>
        <BackButton />
      </div>
      <div className={styles.container}>
        {nfts.map((nft) => (
          <CategoryCard key={nft.name} category={nft} cardWidth="100%" />
        ))}
      </div>
    </div>
  );
}

export default Nfts;
