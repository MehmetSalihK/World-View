# Informations sur les Pays du Monde

Ce projet est une application web basique construite avec Next.js qui liste les pays du monde et affiche des informations détaillées sur chaque pays en utilisant l'API REST Countries.

## Table des Matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Composants](#composants)
- [Fonctionnalités Bonus](#fonctionnalités-bonus)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Introduction

Cette application web fournit une liste de tous les pays du monde avec leurs noms et drapeaux. Les données sont récupérées à partir de l'[API REST Countries](https://restcountries.com/). Ce projet vise à démontrer l'utilisation de Next.js pour construire une application web responsive et consommer une API tierce.

## Fonctionnalités

- **Page d'accueil** : Liste tous les pays avec leurs noms et drapeaux.
- **Page de détail** : Affiche des informations détaillées sur un pays sélectionné, y compris :
  - Informations de base sur le pays
  - Données géographiques
  - Données politiques et administratives
  - Données économiques et démographiques
  - Données culturelles
- **Fonction de recherche** : Permet aux utilisateurs de rechercher des pays par nom.
- **Design responsive** : L'application est conçue pour être responsive et accessible sur divers appareils.

## Installation

Pour exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/MehmetSalihK/World-View.git
    ```

2. Accédez au répertoire du projet :
    ```sh
    cd World-View
    ```

3. Installez les dépendances :
    ```sh
    npm install
    ```

4. Démarrez le serveur de développement :
    ```sh
    npm run dev
    ```

5. Ouvrez votre navigateur et naviguez à `http://localhost:3000` pour voir l'application.

## Utilisation

- **Page d'accueil** : Parcourez la liste des pays triés par ordre alphabétique. Cliquez sur un pays pour voir plus de détails.
- **Recherche** : Utilisez le champ de recherche dans la barre de navigation pour trouver un pays par son nom.

## Composants

### Navbar

La barre de navigation comprend :
- Un bouton Home qui renvoie à la page principale.
- Un champ de recherche pour rechercher des pays par nom.

### CountryCard

Le composant `CountryCard` est utilisé pour afficher le nom du pays, le drapeau, et un lien vers la page de détail pour chaque pays.

### Page de Détail

La page de détail inclut les sections suivantes pour un pays sélectionné :
- **Titre** : Nom du pays et grand drapeau.
- **Informations de base sur le pays** : Noms communs et natifs, noms officiels, et TLD.
- **Données géographiques** : Latitude, longitude, superficie, pays frontaliers, région et sous-région.
- **Données politiques et administratives** : Capitale, statut d'indépendance, et adhésion à l'ONU.
- **Données économiques et démographiques** : Population, devises, et coefficient GINI.
- **Données culturelles** : Langues et gentilés.

## Fonctionnalités Bonus

- **Recherche par région** : Ajouter la possibilité de filtrer les pays par région.
- **Recherche avancée** : Implémenter des options de recherche supplémentaires.

## Contribuer

Les contributions sont les bienvenues ! Veuillez forker le dépôt et créer une pull request avec vos modifications. Assurez-vous que votre code respecte les standards de codage du projet et inclut des tests appropriés.

## Licence

Ce projet est licencié sous la licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
