import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const getSortedCategories = async () => {
  try {
    const response = await axios.get("/recipes/categories");
    return response.data.categories; 
  } catch (error) {
    console.error("Could not fetch categories:", error);
    return []; 
  }
};
