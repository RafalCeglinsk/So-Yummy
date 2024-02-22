import React from "react";

const RecipesList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <div>No recipes to display.</div>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <a
              href={recipe.recipeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={recipe.imageURL} alt={recipe.title} style={{}} />
              <h3>{recipe.title}</h3>
            </a>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;
