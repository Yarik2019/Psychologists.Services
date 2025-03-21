import { logoutUser } from "../../redux/auth/operations.js";
import { selectUser } from "../../redux/auth/selectors.js";

import sprite from "../../assets/icons.svg";
import { useNavigate } from "react-router-dom"; // імпортуємо useNavigate
import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
  const navigate = useNavigate(); // використовуємо хук useNavigate
  const dispatch = useDispatch();
  const userAuth = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/"); // використання navigate для перенаправлення
  };

  return (
    <ul className="flex gap-7">
      <li>
        <div className="flex items-center gap-3.5">
          <span className="flex items-center justify-center w-10 h-10 bg-primary-color  rounded-[10px] transition-all duration-300">
            <svg className="w-6 h-6 fill-white" width="24" height="24">
              <use href={`${sprite}#icon-mdi_user`}></use>
            </svg>
          </span>
          <p className="text-base font-medium text-black leading-tight">
            {userAuth?.displayName || "Ilona"}
          </p>
        </div>
      </li>
      <div>
        <button
          onClick={handleLogout}
          className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]"
        >
          Log In
        </button>
      </div>
    </ul>
  );
};

export default UserMenu;
