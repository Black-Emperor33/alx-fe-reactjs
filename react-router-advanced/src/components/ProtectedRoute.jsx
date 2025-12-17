import { Navigate } from "react-router-dom";

// Simulate authentication
const isAuthenticated = () => {
  return true; // change to false to test redirect
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
