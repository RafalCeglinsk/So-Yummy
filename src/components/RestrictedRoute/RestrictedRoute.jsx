import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  // If the route is restricted and the user is logged in, render <Navigate> to redirectTo
  // Otherwise render the component

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
