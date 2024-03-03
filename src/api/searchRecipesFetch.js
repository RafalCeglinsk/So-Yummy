import axios from "axios";



 export const fetchData = async () => {
  const baseAxiosURL = "http://localhost:5001";
  axios.defaults.baseURL = baseAxiosURL;

  try {
    const response = await axios.get(`api/recipes/search`);
    console.log(response);
    const data = response.data.result
    console.log(data)
     return response;


  } catch (err) {}
};



 export const fetchIngredients = async () => {
    const baseAxiosURL = "http://localhost:5001";
    axios.defaults.baseURL = baseAxiosURL;
  
    try {
      const response = await axios.get(`api/ingredients`);
      console.log(response);
      const data = response.data.result
      console.log(data)
       return response;
  
  
    } catch (err) {}
  };
