import TherapistProfile from "../TherapistProfile/TherapistProfile";
import sprite from "../../assets/icons.svg";
import ReviewsAccardion from "../ReviewsAccardion/ReviewsAccardion";

const PsychologisItem = ({ profile }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-3 md:p-6 bg-white rounded-3xl">
      <div>
        <div className="relative w-full h-[300px] md:w-[120px] md:h-[120px] p-3 border-2 border-solid border-primary-color/20 rounded-[30px]">
          <div className="relative w-full h-[274px] md:w-[96px] md:h-[96px]">
            <img
              className="block w-full h-full rounded-[15px] object-cover"
              src={profile.avatar_url}
              alt={profile.name}
            />
          </div>
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
          <div className="flex justify-between">
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
            <svg className="w-6 h-6 fill-white cursor-pointer">
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <h2 className="text-black mb-6 font-inter font-medium text-2xl leading-none">
          Dr. Lisa Anderson
        </h2>
        <TherapistProfile
          therapistProfile={{
            experience: profile.experience,
            license: profile.license,
            specialization: profile.specialization,
            initial_consultation: profile.initial_consultation,
          }}
        />
        <p className="text-black/50  text-base font-inter font-normal leading-tight">
          {profile.about}
        </p>
        <ReviewsAccardion reviews={profile.reviews} />
      </div>
    </div>
  );
};

export default PsychologisItem;
