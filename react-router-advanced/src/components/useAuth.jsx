// Simple authentication hook
const useAuth = () => {
  // You can toggle this to test protected route
  const isLoggedIn = true; 
  return isLoggedIn;
};

export default useAuth;
