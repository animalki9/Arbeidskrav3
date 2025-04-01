import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../sanityClient";

const Profile = () => {
  const { name } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "group"][0].members[_type == "member" && slug.current == $name][0]`,
        { name }
      )
      .then((data) => setProfile(data))
      .catch(console.error);
  }, [name]);

  if (!profile) return <p>Laster profil...</p>;

  return (
    <div>
      <h2>Profil: {profile.name}</h2>
      <p>Her kan du legge til mer informasjon om {profile.name}.</p>
    </div>
  );
};

export default Profile;
