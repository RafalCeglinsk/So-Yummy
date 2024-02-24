import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchAvatar = ({}) => {
  const [avatarURL, setName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDllYzMxOTVmNTc1OWEyYzc3NmNlOCIsImlhdCI6MTcwODc4MTcwOCwiZXhwIjoxNzA5Mzg2NTA4fQ.0pKjE4ku7Dr2QN94lRKkMBNUy_2w3IvSLnEpnqMYuiU"; // Twój token JWT
        const response = await axios.get(
          "http://localhost:5001/api/auth/current",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Dodanie nagłówka Authorization z tokenem JWT
            },
          }
        );
        const userName = response.data.ResponseBody.avatarURL;
        setName(userName);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchUserName();
  }, []); // useEffect będzie wywoływany tylko raz po załadowaniu komponentu

  return avatarURL;
};

export default FetchAvatar;
