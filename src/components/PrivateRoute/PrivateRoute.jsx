import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// If the route is private and the user is logged in, render <Navigate> to redirectTo
// Otherwise render the component

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
