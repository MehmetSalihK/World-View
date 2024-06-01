'use client'
import React, { useState, useEffect, useContext } from 'react'
import '../../../css/DetailsPays.css'
import Chargement from '../../components/Chargement'
import { Span } from 'next/dist/trace'
import Link from 'next/link';

interface CountryData {
  name: {
    common: string
    nativeName: {
      [key: string]: {
        common: string
        official: string
      }
    }
    official: string
  }
  flags: {
    svg: string
  }
  tld: string[]
  population: number
  area: number
  borders: string[]
  region: string
  subregion: string
  capital: string
  independent: boolean
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  } 
  gini: number
  languages: {
    [key: string]: string
  }
  demonyms: {
    [key: string]: {
      f: string
      m: string
    }
  }
  UN: boolean
  latlng: number[]
}

interface DetailsCountryProps {
  params: { code: string }
}

export default function DetailsCountry({ params }: { params: { code: string } }) {
  const [countryData, setCountryData] = useState<CountryData | null>(null)

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const pays = await fetch(`https://restcountries.com/v3.1/alpha/${params.code?.toUpperCase()}`)
        const data = await pays.json()
        const country = data[0]
        setCountryData(country)
        console.log(country)
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du pays :', error)
      }
    }

    fetchCountryData()
  }, [params.code])

  if (!countryData) {
    return <Chargement />
  }

  // const {
  //   name = { common: 'N/A' },
  //   flags = { svg: 'N/A' },
  //   population = 0,
  //   area = 0,
  //   borders = [],
  //   region = 'N/A',
  //   subregion = 'N/A',
  //   capital = 'N/A',
  //   independent = false,
  //   currencies,
  //   gini = 0,
  //   languages,
  //   demonym = 'N/A',
  //   UN = false,
  //   latlng = [0, 0],
  //   tld = [],
  // } = countryData;

  // console.log('Country Data:', countryData);

  return (
    <div className="imahe">

      <button className="backButton" onClick={() => window.history.back()}>
        Retour
      </button>
      <div className="image3">
        <img src={countryData.flags.svg} alt={`Drapeau de ${countryData.name.common}`} className="flagImage" />
        <h1 className="countryName">{countryData.name.common}</h1>
      </div>

      <section className="section">
        <h2 className="section-title">Informations de base sur le pays</h2>
        <p>Nom commun : {countryData.name.common}</p>
        <p>
          Nom natif :{' '}
          {countryData.name.nativeName
            ? Object.keys(countryData.name.nativeName).map((item, i) => (
                <span key={i}>{countryData.name.nativeName[item].common}</span>
              ))
            : 'N/A'}
        </p>
        <p>Nom officiel courant : {countryData.name.official || 'N/A'}</p>
        <p>
          Nom officiel natif :{' '}
          {countryData.name.nativeName
            ? Object.keys(countryData.name.nativeName).map((item, i) => (
                <span key={i}>{countryData.name.nativeName[item].official}</span>
              ))
            : 'N/A'}
        </p>
        <p>TLD : {countryData.tld[0]}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Données géographiques</h2>
        <p>Latitude : {countryData.latlng[0]}</p>
        <p>Longitude : {countryData.latlng[1]}</p>
        <p>Superficie : {countryData.area} km²</p>
        <p>Pays en bordure : {countryData.borders? countryData.borders.join(', '): "N/A"}</p>
        <p>Région : {countryData.region}</p>
        <p>Sous-région : {countryData.subregion? countryData.subregion: "N/A"}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Données politiques et administratives</h2>
        <p>Capitale : {countryData.capital? countryData.capital: "N/A"}</p>
        <p>Indépendant : {countryData.independent ? 'Oui' : 'Non'}</p>
        <p>Membre de l'ONU : {countryData.UN ? 'Oui' : 'Non'}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Données économiques et démographiques</h2>
        <p>Nombre d'habitants : {countryData.population}</p>
        <p>Devises : {countryData.currencies ? Object.keys(countryData.currencies).map((item, i) => (
                <span key={i}>{countryData.currencies[item].name} {countryData.currencies[item].symbol}</span>
              ))
            : 'N/A'}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Données culturelles</h2>
        <p>
          Langages :{' '}
          {countryData.languages
            ? Object.keys(countryData.languages).map((item, i) => <span key={i}>{countryData.languages[item]}</span>)
            : 'N/A'}
        </p>
        <p>Gentilés : {countryData.demonyms? Object.keys(countryData.demonyms).map((item, i) => <span className='mx-2' key={i}>{countryData.demonyms[item].f}</span>)
            : 'N/A'}</p>
      </section>
    </div>
  )
}
