import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import icons from "../../assets/icons.svg";
import {
  addToFavorites,
  removeFromFavorites,
  fetchFavoritesForUser,
} from "../../service/FetchService.js";
import Loader from "../Loader/Loader";
import { errToast, successfullyToast } from "../../utils/toast";
import { useAuth } from "../../hooks/useAuth";
import TherapistProfile from "../TherapistProfile/TherapistProfile";
import ReviewsAccordion from "../ReviewsAccardion/ReviewsAccardion";

const CatalogItem = ({ profile, onFavoriteChange }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Перевіряємо, чи психолог є в улюблених
  useEffect(() => {
    if (!user) return;

    const checkFavoriteStatus = async () => {
      try {
        const favorites = await fetchFavoritesForUser(user.uid);
        setIsFavorite(favorites.some((fav) => fav.id === profile.id));
      } catch (error) {
        console.error("Помилка отримання улюблених:", error);
      }
    };

    checkFavoriteStatus();
  }, [user, profile.id]);

  // Додавання/видалення психолога в улюблені
  const toggleFavorite = async () => {
    if (!user) {
      errToast("Ви не зареєстровані! Увійдіть в акаунт.");
      navigate("/");
      return;
    }

    setIsLoading(true);
    try {
      if (isFavorite) {
        await removeFromFavorites(user.uid, profile);
        successfullyToast("Видалено з улюблених");
      } else {
        await addToFavorites(user.uid, profile);
        successfullyToast("Додано в улюблені");
      }
    } catch (error) {
      errToast(`Помилка: ${error.message}`);
    }

    setIsFavorite((prev) => !prev);
    onFavoriteChange();
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-3 md:p-6 bg-white rounded-3xl">
      <div>
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
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
          <h3 className="text-base font-medium text-primary-color-gray font-inter leading-normal">
            Psychologist
          </h3>
          <div className="flex justify-between items-center">
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

            <button onClick={toggleFavorite} disabled={isLoading}>
              {isLoading ? (
                <div>
                  <Loader
                    height={20}
                    width={20}
                    color={"green"}
                    className="text-red-600"
                  />
                </div>
              ) : isFavorite ? (
                <svg className="w-6.5 h-6.5 fill-primary-color hover:scale-125 transition-all duration-300">
                  <use href={`${icons}#icon-hearts`}></use>
                </svg>
              ) : (
                <svg className="w-6.5 h-6.5 hover:text-primary-color hover:scale-125 transition-all duration-300">
                  <use href={`${icons}#icon-heart`}></use>
                </svg>
              )}
            </button>
          </div>
        </div>
        <h2 className="text-black mb-6 font-inter font-medium text-2xl leading-none">
          {profile.name}
        </h2>
        <TherapistProfile therapistProfile={profile} />
        <ReviewsAccordion
          name={profile.name}
          avatar={profile.avatar_url}
          reviews={profile.reviews}
        />
      </div>
    </div>
  );
};

export default CatalogItem;
