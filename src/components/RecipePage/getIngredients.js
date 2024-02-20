// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { RecipeIngredientsList } from "../components/RecipePage/RecipeIngredientsList/RecipeIngredientsList";
// export const IngredientsContainer = ({}) => {
//   const [ingredients, setIngredients] = useState([]);

//   useEffect(() => {
//     const getIngredients = async () => {
//       try {
//         const recipeResponse = await axios.get(
//           `/test-api-test/ingredients.json`
//         );
//         const recipe = recipeResponse.data;

//         setIngredients(recipe);
//       } catch (error) {
//         console.error("Błąd:", error);
//       }
//     };

//     getIngredients();
//   }, []);

//   return (
//     <>
//       <RecipeIngredientsList ingredients={ingredients} />;
//     </>
//   );
// };
