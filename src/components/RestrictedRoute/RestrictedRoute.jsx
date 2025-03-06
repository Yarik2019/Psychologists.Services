// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/user/selectors.js";
// redirectTo;
export const RestrictedRoute = ({ component: Component }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return Component;
  //   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
