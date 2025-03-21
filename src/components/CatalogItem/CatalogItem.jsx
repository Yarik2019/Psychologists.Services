import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import icons from "../../assets/icons.svg";
import {
  addToFavorites,
  removeFromFavorites,
  fetchFavoritesForUser,
} from "../../redux/сatalog/operations";
import { selectFavorites } from "../../redux/сatalog/selectors";

import Loader from "../Loader/Loader";
import TherapistProfile from "../TherapistProfile/TherapistProfile";
import ReviewsAccordion from "../ReviewsAccardion/ReviewsAccardion";
import { errToast, successfullyToast } from "../../utils/toast";
import { selectUser } from "../../redux/auth/selectors";
import { animationsItem } from "../../utils/animation";

const CatalogItem = ({ profile }) => {
  const userAuth = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites) || [];
  const [loadingFavorites, setLoadingFavorites] = useState(false);

  useEffect(() => {
    if (userAuth) {
      dispatch(fetchFavoritesForUser({ userId: userAuth?.uid }));
    }
  }, [dispatch, userAuth]);

  const isFavorite = favorites.some((fav) => fav?.id === profile?.id);

  const toggleFavorite = async () => {
    if (!userAuth) {
      errToast("You are not registered! Please log in to your account.");
      navigate("/");
      return;
    }

    setLoadingFavorites(true);

    try {
      if (isFavorite) {
        await dispatch(
          removeFromFavorites({
            userId: userAuth?.uid,
            psychologistId: profile.id,
          })
        ).unwrap();
        successfullyToast("Removed from favorites.");
      } else {
        await dispatch(
          addToFavorites({ userId: userAuth?.uid, psychologist: profile })
        ).unwrap();
        successfullyToast("Added to favorites.");
      }
      dispatch(fetchFavoritesForUser({ userId: userAuth?.uid }));
    } catch (error) {
      errToast(`Error: ${error.message}`);
    } finally {
      setLoadingFavorites(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 p-3 md:p-6 bg-white rounded-3xl"
      initial="hidden"
      animate="visible"
      variants={animationsItem.container}
    >
      <motion.div variants={animationsItem.avatar}>
        <div className="relative w-full h-[300px] md:w-[120px] md:h-[120px] p-3 border-2 border-solid border-primary-color/20 rounded-[30px]">
          <img
            className="block w-full h-full rounded-[15px] object-cover"
            src={profile.avatar_url}
            alt={profile.name}
          />
          <div className="absolute top-2.5 right-2.5 flex justify-center items-center w-[14px] h-[14px] bg-white rounded-full">
            <div className="w-[10px] h-[10px] bg-color-green rounded-full"></div>
          </div>
        </div>
      </motion.div>

      <div>
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2"
          variants={animationsItem.header}
        >
          <motion.h3
            className="text-base font-medium text-primary-color-gray font-inter leading-normal"
            variants={animationsItem.text}
          >
            Psychologist
          </motion.h3>
          <motion.div
            className="flex justify-between items-center"
            variants={animationsItem.rating}
          >
            <div className="flex">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 fill-primary-color-star">
                  <use href={`${icons}#icon-star`}></use>
                </svg>
                <p className="text-base text-black font-inter font-medium leading-normal">
                  Rating: {profile.rating}
                </p>
              </div>
              <div className="ml-4 mr-4 pl-px bg-black/20"></div>
              <p className="text-base text-black font-inter font-medium leading-normal mr-7">
                Price / 1 hour:{" "}
                <span className="text-color-green">
                  {profile.price_per_hour}$
                </span>
              </p>
            </div>

            <motion.button
              onClick={toggleFavorite}
              disabled={loadingFavorites}
              variants={animationsItem.favoriteButton}
              whileHover="hover"
            >
              {loadingFavorites ? (
                <Loader height={26} width={26} color={"green"} />
              ) : isFavorite ? (
                <svg className="w-6.5 h-6.5 fill-primary-color hover:scale-125 transition-all duration-300">
                  <use href={`${icons}#icon-hearts`}></use>
                </svg>
              ) : (
                <svg className="w-6.5 h-6.5 hover:text-primary-color hover:scale-125 transition-all duration-300">
                  <use href={`${icons}#icon-heart`}></use>
                </svg>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-black mb-6 font-inter font-medium text-2xl leading-none"
          variants={animationsItem.name}
        >
          {profile.name}
        </motion.h2>

        <TherapistProfile therapistProfile={profile} />
        <ReviewsAccordion
          name={profile.name}
          avatar={profile.avatar_url}
          reviews={profile.reviews}
        />
      </div>
    </motion.div>
  );
};

export default CatalogItem;
