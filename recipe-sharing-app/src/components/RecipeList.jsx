import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
const recipes = useRecipeStore((s) => s.recipes)
const filteredRecipes = useRecipeStore((s) => s.filteredRecipes)
const searchTerm = useRecipeStore((s) => s.searchTerm)
const filterRecipes = useRecipeStore((s) => s.filterRecipes)

useEffect(() => {
filterRecipes()
}, [recipes, searchTerm, filterRecipes])

const displayRecipes = searchTerm ? filteredRecipes : recipes

const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

if (!displayRecipes.length) return <p>No recipes found.</p>

return (
<div>
{displayRecipes.map((recipe) => (
<div key={recipe.id} style={{ border: '1px solid #eee', padding: '8px', marginBottom: '8px' }}>
<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
<button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? '★ Unfavorite' : '☆ Favorite'}
          </button>
<Link to={`/recipe/${recipe.id}`}>View</Link> | <Link to={`/edit/${recipe.id}`}>Edit</Link>
</div>
))}
</div>
)
}

export default RecipeList;