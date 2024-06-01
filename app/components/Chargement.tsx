import React from 'react';
import styles from '../../css/chargement.module.css';

// Composant de chargement, représentant un spinner pendant le chargement des données
const Chargement: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      {/* Div contenant le spinner pour l'effet de chargement */}
      <div className={styles.spinner}></div>
    </div>
  );
};

// Exporter le composant Chargement
export default Chargement;
