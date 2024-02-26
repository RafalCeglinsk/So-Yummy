import axios from "axios";
import { useEffect, useState } from "react";

function Name() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const authData = localStorage.getItem("persist:auth", "token");
    if (authData) {
      const { token } = JSON.parse(authData);
      setToken(token);
      console.log("błąd pobierania tokena");
    }

    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/auth/current",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setName(response.data.name);
      } catch (error) {
        console.error("Błąd:", error);
      }
    }

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      <h1>Witaj, {name}!</h1>
    </div>
  );
}

export default Name;
