import React, { ChangeEvent } from 'react';
import '../../css/Navbar.css';
import '../../css/BoutonNavbar.css';
//import '../css/SearchInput.css';

// Interface décrivant les propriétés attendues par le composant Navbar
interface NavbarProps {
  Chercher: (searchTerm: string) => void;
}

// Composant Navbar, qui affiche la barre de navigation
const Navbar: React.FC<NavbarProps> = ({ Chercher }) => {
  return (
    <nav>
      {/* Conteneur du bouton de recherche et du logo */}
      <div className="BoutonCherche">
        {/* Logo (image de la terre) */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/053/736/original/world-globe-earth-map-png.png"
          alt="World Globe"
          className="globe-image"
        />
        {/* Bouton "Home" pour réinitialiser la recherche */}
        <button className="button" onClick={() => Chercher('')}>
          Home
        </button>
        {/* Conteneur de la barre de recherche */}
        <div className="search__container">
          {/* Champ de saisie pour la recherche par nom */}
          <input
            className="search__input"
            type="text"
            placeholder="Rechercher par nom"
            onChange={(e: ChangeEvent<HTMLInputElement>) => Chercher(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

// Exporter le composant Navbar
export default Navbar;
