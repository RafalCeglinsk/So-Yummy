import axios from "axios";

const logout = async () => {
  try {
    const logoutEndpoint = "http://localhost:5001/api/auth/logout";
    const response = await axios.post(logoutEndpoint);

    if (response.status === 200) {
      localStorage.removeItem("token");

      //window.location.href = "/SoYummy"; // Przekierowanie użytkownika na stronę główną po poprawnym wylogowaniu
    } else {
      throw new Error("Nie udało się wylogować użytkownika.");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Token JWT jest nieprawidłowy lub wygasł.");
      window.location.href = "/SoYummy";
      // Obsługa nieprawidłowego lub wygasłego tokenu JWT
    } else {
      console.error("Wystąpił błąd podczas wylogowywania:", error.message);
      // Obsługa innych błędów
    }
  }
};

export default logout;
