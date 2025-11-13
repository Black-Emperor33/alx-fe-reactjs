import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
const { id } = useParams()
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))

if (!recipe) return (
<div>
<p>Recipe not found.</p>
<Link to="/">Back</Link>
</div>
)

return (
<div>
<h1>{recipe.title}</h1>
<p>{recipe.description}</p>
<Link to={`/edit/${recipe.id}`}>Edit</Link>
<DeleteRecipeButton id={recipe.id} />
<br />
<Link to="/">Back to list</Link>
</div>
)
}

export default RecipeDetails;