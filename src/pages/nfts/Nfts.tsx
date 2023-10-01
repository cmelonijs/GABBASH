import styles from "./Nfts.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";

const nfts = [
  {
    name: "Vectors",
    path: "/vectors",
  },
  {
    name: "Concepts",
    path: "/concepts",
  },
];

function Nfts() {
  return (
    <div>
      <h2 className={styles.title}>NFTs</h2>
      <div className={styles.container}>
        {nfts.map((nft) => (
            <CategoryCard key={nft.name} category={nft} />
          ))}
      </div>
    </div>
  );
}

export default Nfts;
