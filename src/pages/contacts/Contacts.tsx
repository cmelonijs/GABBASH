// import styles from "./App.module.scss";

import { useEffect } from "react";

function Contacts() {
  useEffect(() => {
    window.scrollTo(0 ,0)
  }, [])
  return (
    <div>
      <h2>GABBASH CONTATTI</h2>
    </div>
  );
}

export default Contacts;
