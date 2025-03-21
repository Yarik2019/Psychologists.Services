import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { animationsNotFound } from "../../utils/animation";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative overflow-hidden">
      {/* Рухомий фон */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-200 to-blue-300"
        initial="hidden"
        animate="visible"
        variants={animationsNotFound.background}
      ></motion.div>

      {/* Велика 404 */}
      <motion.h1
        className="text-9xl font-inter font-bold text-black drop-shadow-lg relative z-10"
        initial="hidden"
        animate="visible"
        variants={animationsNotFound.number}
        whileInView="floating"
      >
        404
      </motion.h1>

      {/* Текст-помилка */}
      <motion.p
        className="text-2xl mb-8 font-inter text-black mt-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={animationsNotFound.text}
        whileInView="floating"
      >
        Oops! This page has vanished into space... 🚀
      </motion.p>

      {/* Кнопка "Назад" */}
      <motion.button
        className="mt-6 px-6 py-3 bg-primary-color text-white text-lg rounded-lg shadow-md transition-all relative z-10"
        whileHover="hover"
        variants={animationsNotFound.button}
        onClick={() => navigate("/")}
      >
        Back to Home
      </motion.button>
    </div>
  );
};

export default NotFoundPage;
