import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import { selectUser, selectIsRefreshing } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const menuVariants = {
  hidden: { x: "-100%" },
  visible: { x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const userAuth = useSelector(selectUser);
  const isLoading = useSelector(selectIsRefreshing);
  const navigate = useNavigate();

  const navItems = [
    { text: "Home", link: "/" },
    { text: "Psychologists", link: "/psychologists" },
    ...(userAuth ? [{ text: "Features", link: "/features" }] : []),
  ];

  useEffect(() => {
    if (!userAuth && window.location.pathname === "/features") {
      navigate("/");
    }
  }, [userAuth, navigate]);

  const handleNavLinkClick = (link) => {
    if (link === "/features" && !userAuth) {
      navigate("/");
    } else {
      navigate(link);
    }
    setIsMenu(false); // Закриваємо мобільне меню після кліку
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed z-50 bg-gray-100 border-b w-full"
    >
      <div className="container-width container-px container-py flex items-center justify-between gap-10">
        {/* Логотип */}
        <motion.div variants={navVariants}>
          <NavLink
            className="text-primary-color text-xl font-bold leading-[1.2] transition-all duration-300"
            to="/"
          >
            psychologists.<span className="text-black">services</span>
          </NavLink>
        </motion.div>

        {/* Десктопне меню */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navItems.map(({ text, link }, index) => (
              <motion.li key={index} variants={navVariants}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `relative p-3 text-base leading-tight text-black font-normal 
                    before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
                    before:w-2 before:h-2 before:rounded-full before:transition-transform before:duration-300 
                    ${
                      isActive
                        ? "before:bg-primary-color before:scale-100"
                        : "before:scale-0"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Авторизація для десктопа */}
        <div className="hidden lg:flex">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div key="loader-desktop" variants={navVariants}>
                <Loader height={30} width={30} color={"green"} />
              </motion.div>
            ) : !userAuth ? (
              <motion.div key="auth-menu-desktop" variants={navVariants}>
                <AuthMenu />
              </motion.div>
            ) : (
              <motion.div key="user-menu-desktop" variants={navVariants}>
                <UserMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Кнопка мобільного меню */}
        <motion.button
          variants={navVariants}
          onClick={() => setIsMenu((prev) => !prev)}
          className="text-black focus:outline-none lg:hidden"
        >
          {isMenu ? (
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </motion.svg>
          )}
        </motion.button>

        {/* Мобільне меню */}
        <AnimatePresence>
          {isMenu && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute flex flex-col gap-5 top-14 left-0 w-full bg-gray-100 py-5 lg:hidden"
            >
              <ul className="flex flex-col items-center w-full">
                {navItems.map(({ text, link }, index) => (
                  <motion.li
                    key={index}
                    variants={navVariants}
                    className="w-full lg:w-auto text-center"
                  >
                    <NavLink
                      to={link}
                      onClick={() => handleNavLinkClick(link)}
                      className={({ isActive }) =>
                        `relative flex justify-center p-3 text-base leading-tight text-black font-normal 
                        before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
                        before:w-2 before:h-2 before:rounded-full before:transition-transform before:duration-300 
                        ${
                          isActive
                            ? "before:bg-primary-color before:scale-100"
                            : "before:scale-0"
                        }`
                      }
                    >
                      {text}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Авторизація для мобільного меню */}
              <div className="flex flex-col items-center mt-4">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div key="loader-mobile" variants={navVariants}>
                      <Loader height={30} width={30} color={"green"} />
                    </motion.div>
                  ) : !userAuth ? (
                    <motion.div key="auth-menu-mobile" variants={navVariants}>
                      <AuthMenu />
                    </motion.div>
                  ) : (
                    <motion.div key="user-menu-mobile" variants={navVariants}>
                      <UserMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
