import axios from "axios";

const baseAxiosURL = "http://localhost:5001/api";
axios.defaults.baseURL = baseAxiosURL;

export const fetchCategories = async () => {
  try {
    const response = await axios.get("/recipes/main-page");
    return Object.values(response.data.recipesMainPage);
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};