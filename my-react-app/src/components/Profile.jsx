import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from '../sanityClient';

const Profile = () => {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "person" && slug.current == $slug][0]`, // 👈 direkte oppslag
        { slug }
      )
      .then((data) => setProfile(data))
      .catch(console.error);
  }, [slug]);

  if (!profile) return <p>Laster profil...</p>;

  return (
    <div>
      <h2>
        Profil: {profile.fornavn} {profile.etternavn}
      </h2>
      <p>E-post: {profile.epost}</p>
      {profile.bilde && (
        <img
          src={profile.bilde.asset.url}
          alt={`${profile.fornavn} sitt bilde`}
          width="200"
        />
      )}
    </div>
  );
};

export default Profile;
