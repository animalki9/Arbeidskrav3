import { useState, useEffect } from "react";
import sanityClient from '../sanityClient'
import '../styles/home.scss';


// Hovedkomponenten for forsiden
const Home = () => {
  // Lager tilstand (state) for medlemmer og arbeidslogger
  const [members, setMembers] = useState([]);
  const [workLogs, setWorkLogs] = useState([]);

  // useEffect kjører én gang ved oppstart og henter data fra Sanity
  useEffect(() => {
    // Henter alle medlemmer av typen "member"
    sanityClient
      .fetch(`*[_type == "member"]{ name, email, "imageUrl": image.asset->url, "slug": slug.current }`)
      .then(setMembers) // Setter data direkte i state
      .catch(console.error); // Logger feil om noe går galt

    // Henter alle arbeidslogger av typen "workLog"
    sanityClient
      .fetch(`*[_type == "workLog"]{ date, task, hours, member-> { name } }`)
      .then(setWorkLogs) // Setter data direkte i state
      .catch(console.error); // Logger feil om noe går galt
  }, []);

  // Returnerer JSX som utgjør forsiden
  return (
    <div className="home">
      <h2>Gruppemedlemmer</h2>

      {/* Viser en grid med kort for hvert gruppemedlem */}
      <div className="member-grid">
        {members.map((m) => (
          <div key={m.slug} className="card">
            <img src={m.imageUrl || "placeholder.png"} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.email}</p>
          </div>
        ))}
      </div>

      <h2>Arbeidslogg</h2>

      {/* Viser en tabell med oversikt over arbeid logget av gruppemedlemmer */}
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Oppgave</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {workLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.member.name}</td>
              <td>{log.task}</td>
              <td>{log.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;