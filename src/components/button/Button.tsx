import styles from "./Button.module.scss";

type Props = {
    variant: "primary" | "secondary";
    text: string;
    onClick?: () => void;
}

const Button = ({variant, text, onClick = () => {}}: Props) => {
    const getVariant = () => {
        switch (variant) {
            case "primary":
                return "button-primary";
            case "secondary":
                return "button-secondary";
            default:
                return "button-primary";
        }
    }

    return (
        <button className={styles[getVariant()]} onClick={onClick}>{text}</button>
    )
}

export default Button