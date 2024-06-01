import React from 'react';
import Link from 'next/link';
import styles from '../../css/CountryCard.module.css';

// Interface décrivant les propriétés attendues par le composant CountryCard
interface CountryCardProps {
  country: {
    cca3: string;
    flags: {
      [x: string]: string | undefined;
      svg: string; // Change 'png' to 'svg' to match the actual data
    };
    name: {
      common: string;
    };
  };
}

// Composant CountryCard, qui représente une carte d'un pays
const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className={styles.countryCard}>
      {/* Image du drapeau du pays */}
      <img src={country.flags.png} alt={`${country.name.common} Flag`} />
      {/* Nom commun du pays */}
      <p className={styles.countryName}>{country.name.common}</p>
    </div>
  );
};

// Exporter le composant CountryCard
export default CountryCard;
