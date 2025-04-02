import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../sanityClient';
import '../styles/header.scss';

const Header = () => {
  // Oppretter tilstand (state) for gruppenavn, gruppenummer og medlemmer
  const [gruppenavn, setGruppenavn] = useState('');
  const [gruppenummer, setGruppenummer] = useState('');
  const [medlemmer, setMedlemmer] = useState([]);

  // Henter data fra Sanity én gang når komponenten rendres første gang
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header"][0]{ // Henter første dokument av typen "header"
          groupName,              // Gruppens navn
          groupNumber,           // Gruppens nummer
          members[]->{           // Henter hver referert person
            fornavn,             // Kun fornavn
            "slug": slug.current // Og slug (brukes i URL)
          }
        }`
      )
      .then((data) => {
        // Oppdaterer state med data fra Sanity
        setGruppenavn(data?.groupName || 'Team X');
        setGruppenummer(data?.groupNumber || '');
        setMedlemmer(data?.members || []);
      });
  }, []);

  // Returnerer header-komponenten med gruppenavn, "Hjem"-lenke og medlem-lenker
  return (
    <header className="header">
      {/* Viser gruppenavn og gruppenummer, eksempel: "Team Trolljegerne – 3A" */}
      <div className="header__title">
        {gruppenavn} {gruppenummer && `– ${gruppenummer}`}
      </div>

      {/* Navigasjonsmeny */}
      <nav className="header__nav">
        {/* Første lenke: Hjem */}
        <Link to="/">Hjem</Link>

        {/* Visuell skillelinje mellom Hjem og navn */}
        <div className="nav-divider" />

        {/* Genererer en lenke for hver person i gruppen */}
        {medlemmer.map((person) => (
          <Link key={person.slug} to={`/profile/${person.slug}`}>
            {person.fornavn}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;