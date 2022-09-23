import React from "react";
import { LevelsTypes } from "../../utils/bmi";

import styles from "./griditem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

interface Props {
  data: LevelsTypes;
}

const GridItem: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img src={data.icon === "up" ? upImage : downImage} alt="" width={30} />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>

        {data.yourBmi &&
            <div className={styles.yourBmi}>Seu IMC é de {data.yourBmi} kg/m²</div>
        }

      <div className={styles.gridInfo}>
        <>
            IMC está entre <strong>{data.bmi[0]}</strong> e <strong>{data.bmi[1]}</strong>.
        </>
      </div>
    </div>
  );
};

export default GridItem;
