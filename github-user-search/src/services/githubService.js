import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

export const fetchAdvancedUsers = ({ username, location, minRepos,  page = 1, per_page = 30 }) => {
  let query = username || "";

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  return axios.get(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};