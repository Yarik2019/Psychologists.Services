import { motion } from "framer-motion";
import { animationsProfile } from "../../utils/animation";

const TherapistProfile = ({ therapistProfile }) => {
  if (!therapistProfile) return null;

  return (
    <motion.ul
      className="flex gap-x-1 gap-y-2 flex-wrap pb-6"
      initial="hidden"
      animate="visible"
      variants={animationsProfile.container}
    >
      <motion.li variants={animationsProfile.item}>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          Specialization:{" "}
          <span className="text-black">{therapistProfile.specialization}</span>
        </p>
      </motion.li>

      <motion.li variants={animationsProfile.item}>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          Experience:{" "}
          <span className="text-black"> {therapistProfile.experience}</span>
        </p>
      </motion.li>

      <motion.li variants={animationsProfile.item}>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          License:{" "}
          <span className="text-black">{therapistProfile.license}</span>
        </p>
      </motion.li>

      <motion.li variants={animationsProfile.item}>
        <p className="px-4 py-2 bg-primary-bg-white font-inter font-medium text-primary-color-gray text-base leading-normal rounded-3xl">
          Initial Consultation:{" "}
          <span className="text-black">
            {therapistProfile.initial_consultation}
          </span>
        </p>
      </motion.li>
    </motion.ul>
  );
};

export default TherapistProfile;
