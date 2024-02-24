export const SearchedRecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </li>
      ))}
    </div>
  );
};
