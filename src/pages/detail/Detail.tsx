import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";

function Detail() {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
}

export default Detail;
