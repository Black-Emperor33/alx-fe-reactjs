import  { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = () => {
const { id } = useParams()
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
const updateRecipe = useRecipeStore((s) => s.updateRecipe)
const navigate = useNavigate()

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')

useEffect(() => {
if (recipe) {
setTitle(recipe.title)
setDescription(recipe.description)
}
}, [recipe])

if (!recipe) return <p>Recipe not found.</p>

const handleSubmit = (e) => {
e.preventDefault()
updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() })
navigate(`/recipe/${recipe.id}`)
}

return (
<form onSubmit={handleSubmit}>
<input value={title} onChange={(e) => setTitle(e.target.value)} />
<br />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
<br />
<button type="submit">Save</button>
</form>
)
}

export default EditRecipeForm;