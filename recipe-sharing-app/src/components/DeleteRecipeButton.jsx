import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({ id }) => {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
const navigate = useNavigate()

const handleDelete = () => {
if (window.confirm('Delete this recipe?')) {
deleteRecipe(id)
navigate('/')
}
}

return (
<button onClick={handleDelete} style={{ marginLeft: '8px' }}>
Delete
</button>
)
}

export default DeleteRecipeButton;