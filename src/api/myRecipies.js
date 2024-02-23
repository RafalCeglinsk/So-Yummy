import axios from "axios";export const getMyRecipesAPI=async()=>{

    try {
      const response = await axios.get("/recipes/main-page");
      return Object.values(response.data.recipesMainPage);
    } catch (error) {
      throw new Error("Error fetching categories");
    }
  
  }

  export const deleteMyRecipe = ({ recipeId }) => {
    return async dispatch => {
      try {
        await axios.delete(`/api/recipes/${recipeId}`);
  
        
        dispatch({ type: 'DELETE_RECIPE_SUCCESS', payload: { recipeId } });
      } catch (error) {
      
        console.error('Failed to delete recipe:', error);
        dispatch({ type: 'DELETE_RECIPE_FAILURE', payload: { error } });
      }
    };
  };