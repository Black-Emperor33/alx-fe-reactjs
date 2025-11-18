import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");       
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);             
  const [user, setUser] = useState(null);            
  const [loading, setLoading] = useState(false);     
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);               
  const [hasMore, setHasMore] = useState(false);            

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);
    setPage(1);

    try {
      // If only username is provided, fetch single user
      if (username && !location && !minRepos) {
        const response = await fetchUserData(username);
        setUser(response.data);
      } else {
        // Advanced search with multiple criteria
        const response = await fetchAdvancedUsers({ username, location, minRepos });
        setUsers(response.data.items);
        setHasMore(response.data.total_count > response.data.items.length);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const response = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...response.data.items]);
      setPage(nextPage);
      setHasMore(users.length + response.data.items.length < response.data.total_count);
    } catch (err) {
      setError("Looks like we cant find more users");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {/* Single user result */}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} /> 
            <p>{user.login}</p>                            
            <p>{user.avatar_url}</p>                       
          </div>
        )}

        {/* Advanced search results */}
        {users.length > 0 && (
          <div>
            {users.map((u) => (
              <div key={u.id} style={{ marginBottom: "16px" }}>
                <img src={u.avatar_url} alt={u.login} style={{ width: "50px", borderRadius: "50%" }} />
                <p>{u.login}</p>
                <p>{u.avatar_url}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
