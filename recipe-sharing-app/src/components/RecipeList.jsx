import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
const recipes = useRecipeStore((state) => state.recipes)

if (!recipes.length) return <p>No recipes yet. Add one!</p>

return (
<div>
{recipes.map((recipe) => (
<div key={recipe.id} style={{ border: '1px solid #eee', padding: '8px', marginBottom: '8px' }}>
<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
<Link to={`/recipe/${recipe.id}`}>View</Link> | <Link to={`/edit/${recipe.id}`}>Edit</Link>
</div>
))}
</div>
)
}

export default RecipeList;