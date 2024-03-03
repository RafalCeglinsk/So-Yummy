import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchCategories = async () => {
  try {
    const response = await axios.get("/recipes/main-page");
    return Object.values(response.data.recipesMainPage);
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
