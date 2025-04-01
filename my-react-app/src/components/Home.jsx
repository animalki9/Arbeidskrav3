import { useState, useEffect } from "react";
import { sanityClient } from "../sanityClient";

const Home = () => {
  const [members, setMembers] = useState([]);
  const [workLogs, setWorkLogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "member"]{ name, email, "imageUrl": image.asset->url, "slug": slug.current }`)
      .then(setMembers)
      .catch(console.error);

    sanityClient
      .fetch(`*[_type == "workLog"]{ date, task, hours, member-> { name } }`)
      .then(setWorkLogs)
      .catch(console.error);
  }, []);

  return (
    <div>
      <header>
        <h1>TEAM X</h1>
        <nav>
          <a href="/">Hjem</a>
          {members.map((m) => (
            <a key={m.slug} href={`/${m.slug}`}>{m.name}</a>
          ))}
        </nav>
      </header>

      <h2>Gruppemedlemmer</h2>
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
