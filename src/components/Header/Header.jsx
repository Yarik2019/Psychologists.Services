import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="font-inter text-primary-color-users">Routing</div>
      {/* <button
        onClick={handleThemeToggle}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
      >
        {theme === themes.green
          ? "🔵 Blue Mode"
          : theme === themes.blue
          ? "🟠 Orange Mode"
          : "🟢 Green Mode"}
      </button> */}
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
};

export default Header;
