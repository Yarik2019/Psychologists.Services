import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <RestrictedRoute component={<HomePage />} redirectTo="/" />
            }
          />
          <Route
            path="/psychologists"
            element={
              <RestrictedRoute
                component={<PsychologistsPage />}
                redirectTo="/"
              />
            }
          />

          <Route
            path="/features"
            element={
              <PrivateRoute
                component={<FavoritesPage />}
                redirectTo="/features"
              />
            }
          />
        </Route>
      </Routes>
      <ThemeSwitch />
      <Toaster />
    </>
  );
}

export default App;
