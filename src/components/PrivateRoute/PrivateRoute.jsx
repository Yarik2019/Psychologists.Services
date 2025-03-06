// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/user/selectors.js";
// redirectTo
export const PrivateRoute = ({ component: Component }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   return isLoggedIn ? Component : <Navigate to={redirectTo} />;

  return Component;
};
