import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/animation";

const Layout = () => {
  return (
    <div>
      {/* Анімований заголовок */}
      <motion.div initial="hidden" animate="visible" variants={headerVariants}>
        <Header />
      </motion.div>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
