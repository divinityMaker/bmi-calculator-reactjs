import React, { useState } from "react";

import styles from "./app.module.css";
import logoImage from "./assets/powered.png";
import GridItem from "./components/GridItem";

import { levels, calculateBmi } from "./utils/bmi";

const App: React.FC = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    }
    return alert("Preencha todos os campos");
  };

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpéra, paramêtro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            type="number"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            type="number"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
              {levels.map((item, index) => {
                return <GridItem key={index} data={item} />
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
