import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const BackButton = () => {
  const navigate = useNavigate();

  const currentPathname = window.location.pathname;

  const toPreviousPathname =
    currentPathname.substring(0, currentPathname.lastIndexOf("/")) === ""
      ? "/"
      : currentPathname.substring(0, currentPathname.lastIndexOf("/"));

  return (
    <Button
      variant="secondary"
      onClick={() => navigate(toPreviousPathname)}
      text="<-"
    />
  );
};

export default BackButton;
