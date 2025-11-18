import  { useState } from "react";
import { fetchUserData } from "../services/githubService";
//import UserCard from "./UserCard";

const Search = () => {
  const [username, setUsername] = useState("");       // Input value
  const [user, setUser] = useState(null);            // API response
  const [loading, setLoading] = useState(false);     // Loading state
  const [error, setError] = useState("");            // Error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetchUserData(username);
      setUser(response.data);   // GitHub API returns the user object
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} /> 
            <p>{user.login}</p>                            
            <p>{user.avatar_url}</p>                       
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
