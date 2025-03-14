import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ children, redirectTo }) => {
  const { user, loading } = useAuth();

  // Показуємо завантаження, якщо все ще перевіряється стан аутентифікації
  if (loading) {
    return <div>Loading...</div>; // або компонент для завантаження
  }

  return user ? children : <Navigate to={redirectTo} />;
};
  