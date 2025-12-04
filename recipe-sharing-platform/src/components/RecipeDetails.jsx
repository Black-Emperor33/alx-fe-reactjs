import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

 function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-6">Loading...</div>;
  }

  // Example ingredients & steps (mocked for demo)
  const ingredients = [
    "1 cup ingredient A",
    "2 tbsp ingredient B",
    "Salt and pepper to taste",
  ];
  const steps = [
    "Step 1: Prepare the ingredients.",
    "Step 2: Cook according to instructions.",
    "Step 3: Serve and enjoy!",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Cooking Steps</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {steps.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;