import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
    category: {
        name: string;
        path: string;
    };
    cardWidth: string;
}

const CategoryCard = ({category, cardWidth}: CategoryCardProps) => (
    <Link className={styles.category} to={category.path} style={{ width: cardWidth }}>
        <h3 className={styles['category-title']}>{category.name}</h3>
    </Link>
)

export default CategoryCard;