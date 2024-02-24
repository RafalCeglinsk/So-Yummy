// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import RecipesList from "../RecipesList/RecipesList.jsx";


// const SearchedRecipesList = () => {
//   const [searchParams] = useSearchParams();
//   const [recipes, setRecipes] = useState(null);
//   const [error, setError] = useState(null);
//   const [isFirstLoad, setIsFirstLoad] = useState(true);

//   useEffect(() => {
//     const query = searchParams.get("query");
//     const type = searchParams.get("type");

//     if (!query || !type) {
//       if (!isFirstLoad) {
//         setError("Missing search parameters.");
//       }
//       setRecipes(null);
//       return;
//     } else {
//       setIsFirstLoad(false);
//     }
//   }, [searchParams, isFirstLoad]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!recipes) {
//     return <div>No recipes found. Try a different search!</div>;
//   }

//   return <RecipesList recipes={recipes} />;
// };

// export default SearchedRecipesList;
