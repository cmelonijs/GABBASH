import styles from "./Nfts.module.scss";
import CategoryCard from "../../components/category-card/CategoryCard";
import BackButton from "../../components/back-button/BackButton";
import { useEffect } from "react";

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
  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  return (
    <div>
      <BackButton />
      <h2 className={styles.title}>NFTs</h2>
      <div className={styles.back}>
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
