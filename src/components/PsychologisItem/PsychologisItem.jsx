// import useFavoriteTherapists from "../../hooks/useFavoriteTherapists";
import TherapistProfile from "../TherapistProfile/TherapistProfile";
import sprite from "../../assets/icons.svg";
import ReviewsAccardion from "../ReviewsAccardion/ReviewsAccardion";

const PsychologistItem = ({ profile }) => {
  // userId;
  // const { isFavorite, toggleFavorite } = useFavoriteTherapists(
  //   userId,
  //   profile.id
  // );
  const isFavorite = false;
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
                  <use href={`${sprite}#icon-star`}></use>
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

            {/* Кнопка "Додати в улюблені" */}
            <svg
              // onClick={toggleFavorite}
              className={`w-6 h-6 cursor-pointer hover:text-primary-color hover:scale-110 transition-all duration-300 ${
                isFavorite ? "text-red-500" : "texts-gray-400"
              }`}
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <h2 className="text-black mb-6 font-inter font-medium text-2xl leading-none">
          {profile.name}
        </h2>
        <TherapistProfile therapistProfile={profile} />
        <ReviewsAccardion
          name={profile.name}
          avatar={profile.avatar_url}
          reviews={profile.reviews}
        />
      </div>
    </div>
  );
};

export default PsychologistItem;
