import Thoughts from "./routes/thoughts";
import Profiles from "./routes/profiles";

export default function App() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/profiles">Profiles</a>
        </li>
        <li>
          <a href="/thoughts">Thoughts</a>
        </li>
      </ul>
    </nav>
  );
}
