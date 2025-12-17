import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the React Router Advanced Demo</p>

    <nav>
      <ul>
        <li>
          <Link to="/profile/details">Profile Details</Link>
        </li>
        <li>
          <Link to="/profile/settings">Profile Settings</Link>
        </li>
        <li>
          <Link to="/blog/1">Blog Post #1</Link>
        </li>
        <li>
          <Link to="/blog/42">Blog Post #42</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Home;
