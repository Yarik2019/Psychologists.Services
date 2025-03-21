import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const userAuth = useSelector(selectUser);
  return userAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
