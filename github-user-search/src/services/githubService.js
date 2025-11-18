import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};
