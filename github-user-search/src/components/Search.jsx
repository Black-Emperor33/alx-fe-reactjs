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
      if (username && !location && !minRepos) {
        const response = await fetchUserData(username);
        setUser(response.data);
      } else {
        const response = await fetchAdvancedUsers({ username, location, minRepos, page: 1 });
        setUsers(response.data.items);
        setHasMore(response.data.total_count > response.data.items.length);
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const response = await fetchAdvancedUsers({ username, location, minRepos, page: nextPage });
      setUsers((prev) => [...prev, ...response.data.items]);
      setPage(nextPage);
      setHasMore(users.length + response.data.items.length < response.data.total_count);
    } catch {
      setError("Looks like we cant find more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {/* Single user */}
        {user && (
          <div className="border p-4 rounded flex items-center gap-4 mt-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              <p>{user.avatar_url}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>
          </div>
        )}

        {/* Advanced search users */}
        {users.length > 0 && (
          <div className="grid grid-cols-1 gap-4 mt-4">
            {users.map((u) => (
              <div key={u.id} className="border p-4 rounded flex items-center gap-4">
                <img src={u.avatar_url} alt={u.login} className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-bold">{u.login}</p>
                  <p>{u.avatar_url}</p>
                  <a href={u.html_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasMore && !loading && (
          <button
            onClick={loadMore}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
