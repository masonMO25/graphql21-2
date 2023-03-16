import { useQuery } from "@apollo/client";
import { PROFILES } from "../graphql/type-defs";

export default function Profiles() {
  const { loading, error, data } = useQuery(PROFILES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.profiles.map(({ id, name, skills }) => (
    <ul key={id}>
<<<<<<< HEAD
      <li>{name}</li>
      <li>{skills}</li>
=======
      <li>
        {name} - {skills[0]}
      </li>
>>>>>>> 9bd16b8ea0b5d99303135e05a705b8642aea32ce
    </ul>
  ));
}
