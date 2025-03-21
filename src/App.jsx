import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PsychologistsPage = lazy(() =>
  import("./pages/PsychologistsPage/PsychologistsPage")
);
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
import { pageVariants } from "./utils/animation";
const Loaders = () => (
  <div className="h-screen w-full bg-black/50 flex justify-center items-center">
    <Loader height={100} width={100} color={"green"} />
  </div>
);

function App() {
  const location = useLocation(); // Отримуємо поточний маршрут

  return (
    <>
      <Suspense fallback={<Loaders />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname} // Анімація при зміні маршруту
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/psychologists" element={<PsychologistsPage />} />
                <Route
                  path="/psychologists/:id/reviews"
                  element={<ReviewsPage />}
                />
                <Route path="/features" element={<FavoritesPage />} />
              </Route>
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>

      {/* Темна/світла тема */}
      <ThemeSwitch />

      {/* Сповіщення */}
      <Toaster />
    </>
  );
}

export default App;
