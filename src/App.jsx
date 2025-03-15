import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import { Toaster } from "react-hot-toast";

// import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
// import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />}>
            <Route path="psychologists/:id/reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="/features" element={<FavoritesPage />} />
        </Route>
      </Routes>
      <ThemeSwitch />
      <Toaster />
    </>
  );
}

export default App;
