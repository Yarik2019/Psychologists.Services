import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
      <Outlet />
    </div>
  );
};

export default Layout;
