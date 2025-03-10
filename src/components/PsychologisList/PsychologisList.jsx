import PsychologisItem from "../PsychologisItem/PsychologisItem";
import data from "../../utils/data.json";

const PsychologisList = () => {
  return (
    <ul className="flex flex-col gap-8">
      {data.map((psychologist, index) => (
        <li key={index}>
          <PsychologisItem profile={psychologist} />
        </li>
      ))}
    </ul>
  );
};

export default PsychologisList;
