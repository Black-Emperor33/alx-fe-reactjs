import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
return (
<Router>
<header style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
<h1>Recipe Sharing</h1>
<nav>
<Link to="/">Home</Link>
</nav>
</header>
<main style={{ padding: '12px' }}>
<Routes>
<Route
path="/"
element={
<div>
<SearchBar />
<AddRecipeForm />
<RecipeList />
<FavoritesList />
<RecommendationsList />
</div>
}
/>
<Route path="/recipe/:id" element={<RecipeDetails />} />
<Route path="/edit/:id" element={<EditRecipeForm />} />
</Routes>
</main>
</Router>
)
}

export default App;
