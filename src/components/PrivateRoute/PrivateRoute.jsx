import { Navigate } from "react-router-dom";
import { selectUser, selectIsRefreshing } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ element, redirectTo }) => {
  const userAuth = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  // Show loading if authentication state is still being checked
  if (isRefreshing) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader height={100} width={100} color={"green"} />
      </div>
    );
  }

  // If the user is not authenticated, redirect to the provided redirectTo path
  return userAuth ? element : <Navigate to={redirectTo} />;
};
