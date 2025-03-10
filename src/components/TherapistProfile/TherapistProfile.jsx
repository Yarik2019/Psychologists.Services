const TherapistProfile = ({ therapistProfile }) => {
  if (therapistProfile) null;
  return (
    <ul className="flex gap-x-1 gap-y-2 flex-wrap pb-6">
      <li>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          Specialization:{" "}
          <span className="text-black">{therapistProfile.specialization}</span>
        </p>
      </li>
      <li>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          Experience:{" "}
          <span className="text-black"> {therapistProfile.experience}</span>
        </p>
      </li>
      <li>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          License:{" "}
          <span className="text-black">{therapistProfile.license}</span>
        </p>
      </li>
      <li>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          Initial Consultation:
          <span className="text-black">
            {therapistProfile.initial_consultation}
          </span>
        </p>
      </li>
    </ul>
  );
};

export default TherapistProfile;
