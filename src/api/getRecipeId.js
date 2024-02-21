import axios from "axios";

export const getRecipeId = async (id) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const URL = `${BASE_URL}/api/recipes/${id}`;
  try {
    const response = await axios.get(URL);
    const data = response.data;
    const recipe = data.recipe;
    console.log(recipe);
  } catch (error) {
    console.log(error);
  }
};
