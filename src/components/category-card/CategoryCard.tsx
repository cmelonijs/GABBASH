import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
    category: {
        name: string;
        path: string;
    };
}

const CategoryCard = ({category}: CategoryCardProps) => (
    <Link className={styles.category} to={category.path}>
        <h3 className={styles['category-title']}>{category.name}</h3>
    </Link>
)

export default CategoryCard;