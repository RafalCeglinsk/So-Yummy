import axios from "axios";
import React, { useEffect, useState } from "react";

export const GetPopular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const response = await axios.get("/test-api-test/recipes.json");
        console.log(response);
        setPopular(response.data);
      } catch (error) {
        console.error("Błąd:", error);
      }
    };

    getPopular();
  }, []);
};
