import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import "../styles/header.scss"; // Adjust the path if necessary


const Header = () => {
  const [group, setGroup] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "group"][0]{
          groupName,
          members[] {
            name,
            "slug": slug.current
          }
        }`
      )
      .then((data) => setGroup(data))
      .catch(console.error);
  }, []);

  if (!group) return <p>Laster...</p>;

  return (
    <header className="header">
      <h1>{group.groupName}</h1>
      <nav>
        <Link to="/">Hjem</Link>
        {group.members.map((member) => (
          <Link key={member.slug} to={`/profile/${member.slug}`}>
            {member.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
