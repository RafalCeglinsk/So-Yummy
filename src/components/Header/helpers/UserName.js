import React, { useState, useEffect } from "react";
import axios from "axios";

function Name() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    // Pobranie danych z local storage
    const authData = localStorage.getItem("persist:auth", "token");
    if (authData) {
      const { token } = JSON.parse(authData);
      setToken(token);
      console.log("błąd pobierania tokena");
    }

    // Pobranie name z backendu przy użyciu tokenu
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
  }, [token]); // Token jest ustawiony jako zależność, aby ponownie pobrać dane po zmianie tokenu

  return (
    <div>
      <h1>Witaj, {name}!</h1>
    </div>
  );
}

export default Name;
