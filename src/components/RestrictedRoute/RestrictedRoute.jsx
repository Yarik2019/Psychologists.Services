import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RestrictedRoute = ({ element, redirectTo }) => {
  const { user, loading } = useAuth();

  // Show loading if authentication state is still being checked
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, redirect to the provided redirectTo path
  return user ? <Navigate to={redirectTo} /> : element;
};
