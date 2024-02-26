import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const FetchName = () => {
  const [name, setName] = useState("");
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/auth/current",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userName = response.data.ResponseBody.name;
        setName(userName);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchUserName();
  }, [token]);

  return name;
};

export default FetchName;
