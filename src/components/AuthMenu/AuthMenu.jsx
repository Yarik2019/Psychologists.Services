import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const AuthMenu = () => {
  const {
    isOpen: isSignUpOpen,
    openModel: openSignUp,
    closeModel: closeSignUp,
  } = useToggle();
  const {
    isOpen: isLogInOpen,
    openModel: openLogIn,
    closeModel: closeLogIn,
  } = useToggle();
  return (
    <>
      <ul className="flex gap-2">
        <li>
          <button
            onClick={openLogIn}
            className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]"
          >
            Log In
          </button>
        </li>
        <li>
          <button
            onClick={openSignUp}
            className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
          >
            Registration
          </button>
        </li>
      </ul>
      <Modal isOpen={isLogInOpen} onClose={closeLogIn}>
        <SignInForm onClose={closeLogIn} />
      </Modal>
      <Modal isOpen={isSignUpOpen} onClose={closeSignUp}>
        <SignUpForm onClose={closeSignUp} />
      </Modal>
    </>
  );
};

export default AuthMenu;
