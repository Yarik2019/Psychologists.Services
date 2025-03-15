import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Загальні посилання для всіх користувачів
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Psychologists", link: "/psychologists" },
    // Додаємо "Features" лише для авторизованих користувачів
    ...(user ? [{ text: "Features", link: "/features" }] : []),
  ];

  // Перевірка авторизації при спробі переходу на Features
  useEffect(() => {
    if (!user && window.location.pathname === "/features") {
      navigate("/"); // Перенаправляємо на головну сторінку
    }
  }, [user, navigate]);

  // Функція для обробки переходу на Features
  const handleNavLinkClick = (link) => {
    if (link === "/features" && !user) {
      navigate("/"); // Перенаправляємо на головну сторінку, якщо користувач не авторизований
    } else {
      navigate(link); // Інакше переходимо за посиланням
    }
  };

  return (
    <header className="fixed z-50 bg-gray-100 border-b w-full">
      <div className="container-width container-px container-py flex items-center justify-between gap-10">
        <NavLink
          className="text-primary-color text-xl font-bold leading-[1.2] transition-all duration-300"
          to="/"
        >
          psychologists.<span className="text-black">services</span>
        </NavLink>

        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="text-black focus:outline-none lg:hidden"
        >
          {isMenu ? (
            <svg
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
            </svg>
          ) : (
            <svg
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
            </svg>
          )}
        </button>

        <nav
          className={`absolute flex flex-col gap-4.5 top-14 left-0 w-full bg-gray-100 py-3 transition-all duration-500 ease-in-out 
          ${
            isMenu ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:bg-transparent lg:top-0 lg:w-auto 
          lg:flex lg:translate-x-0 lg:py-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10 w-full lg:w-auto">
            {navItems.map(({ text, link }, index) => (
              <li key={index} className="w-full lg:w-auto text-center">
                <NavLink
                  to={link}
                  onClick={() => handleNavLinkClick(link)} // Викликаємо функцію для переходу
                  className={({ isActive }) =>
                    `relative flex justify-center p-3 lg:p-0 text-base leading-tight text-black font-normal 
                    before:absolute before:bottom-0 lg:before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 
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
              </li>
            ))}
          </ul>

          {/* Mobile buttons */}
          <div className="flex justify-center gap-4 lg:hidden">
            {!user ? <AuthMenu /> : <UserMenu />}
          </div>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden gap-4 lg:flex">
          {!user ? <AuthMenu /> : <UserMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
