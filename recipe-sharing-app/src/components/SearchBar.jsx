import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // runs each time user types
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      className="search-bar"
      style={{
        padding: '10px',
        width: '80%',
        margin: '20px auto',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;