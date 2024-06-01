// Import des dépendances et des composants nécessaires
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountryCard from './components/CountryCard';
import styles from '../css/CountryCard.module.css';
import Link from 'next/link';
import '../css/styles.css';
import '../css/paginationStyles.css';
import Chargement from './components/Chargement';

// Interface décrivant la structure des données d'un pays
interface CountryData {
  cca3: string;
  name: {
    common: string;
    native?: {
      common: string;
    };
    official?: {
      common: string;
      native?: {
        common: string;
      };
    };
  };
  flags: {
    svg: string;
  };
  tld: string[];
  population: number;
  area: number;
  borders: string[];
  region: string;
  subregion: string;
  capital: string;
  independent: boolean;
  currencies: string[] | string;
  gini: number;
  languages: string[] | string;
  demonym: string;
  UN: boolean;
  latlng: number[];
}

// Interface des propriétés du composant Home
interface HomeProps {}

// Composant principal Home
const Home: React.FC<HomeProps> = () => {
  // Nombre de pays à afficher par page
  const countriesPerPage = 14;

  // États pour stocker les données, le terme de recherche, la page actuelle et l'état de chargement
  const [datas, setDatas] = useState<CountryData[]>([]);
  const [load, setLoad] = useState<CountryData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  // Effet de chargement des données au montage du composant
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Récupération des données depuis l'API REST
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data.sort((a: { name: { common: string }; }, b: { name: { common: string }; }) =>
          a.name.common.localeCompare(b.name.common)
        );
        // Mise à jour des états avec les données
        setDatas(countries);
        setLoad(countries);
      } catch (error) {
        // Gestion des erreurs lors de la récupération des données
        console.error('Error fetching countries', error);
      } finally {
        // Marquer le chargement comme terminé
        setLoading(false);
      }
    };

    // Appel de la fonction de récupération des données
    fetchCountries();
  }, []);

  // Fonction de recherche de pays en fonction du terme de recherche
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // Filtrer les pays en fonction du terme de recherche
    const filtered = datas.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
    setLoad(filtered);
    setCurrentPage(1);
  };

  // Calcul des indices pour les pays à afficher actuellement
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = load.slice(indexOfFirstCountry, indexOfLastCountry);

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    if (currentPage < Math.ceil(load.length / countriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fonction pour revenir à la page précédente
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Rendu du composant Home
  return (
    <>
      {/* Contenu de la page d'accueil */}
      <div className="fondecran">
        {/* Composant Navbar avec la fonction de recherche */}
        <Navbar Chercher={handleSearch} />
        {/* Affichage du composant de chargement pendant le chargement des données */}
        {loading ? (
          <Chargement />
        ) : (
          // Affichage de la liste des pays et des liens vers les détails
          <div className="country-list" style={{ position: 'relative', zIndex: 1 }}>
            {currentCountries.map((country) => (
              <div key={country.cca3}>
                {/* Composant CountryCard pour chaque pays */}
                <CountryCard country={country} />
                {/* Lien vers la page de détails pour chaque pays */}
                <Link href={`/details/${country.cca3}`}>
                  <div className={styles.detailsLink}>
                    <p>Voir les détails</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Boutons de pagination */}
      <div className="pagination-buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Précédent
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(load.length / countriesPerPage)}>
          Suivant
        </button>
      </div>
    </>
  );
}

// Exporter le composant Home
export default Home;
