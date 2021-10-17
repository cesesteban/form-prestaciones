import React from "react";
import styles from "./app.module.css";
import BackOffice from "./containers/backOffice/";

function App(props) {
  return (
    <div className={styles.container}>
      <BackOffice />
    </div>
  );
}

export default App;
