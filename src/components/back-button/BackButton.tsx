import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  const navigate = useNavigate();

  const currentPathname = window.location.pathname;

  const toPreviousPathname =
    currentPathname.substring(0, currentPathname.lastIndexOf("/")) === ""
      ? "/"
      : currentPathname.substring(0, currentPathname.lastIndexOf("/"));

  return (
    <Button
      variant="back"
      onClick={() => navigate(toPreviousPathname)}
      text=""
    >
       <IoIosArrowBack />
    </Button>
  );
};

export default BackButton;
