import React from "react";

import styles from './app.module.css';
import logoImage from './assets/powered.png'

const App: React.FC = () => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt='' width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}></div>
      </div>
    </>
  );
};

export default App;
