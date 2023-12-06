import { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  variant: "primary" | "secondary" | "back";
  text: string;
  onClick?: () => void;
  children?: ReactNode
};

const Button = ({ children ,variant, text, onClick = () => {} }: Props) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "button-primary";
      case "secondary":
        return "button-secondary";
        case "back":
          return "button-back";
      default:
        return "button-primary";
    }
  };

  return (
    <button className={styles[getVariant()]} onClick={onClick}>
      {children != undefined ? children : text}
    </button>
  );
};

export default Button;
