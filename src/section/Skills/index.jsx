import { useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import {
  faHtml5,
  faCss3,
  faReact,
  faVuejs,
  faSquareJs,
  faNodeJs,
  faJava,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills({ onInitial }) {
  useEffect(() => {
    onInitial("Skills-section");
  }, []);
  return (
    <div
      className="bg-primarySubContent rounded-lg p-2 scroll-m-14"
      id="Skills-section"
    >
      <div className="text-primaryTitle text-lg font-medium">Skills</div>
      <div className="grid grid-cols-[25%_75%] mx-10 py-2 items-center">
        <FontAwesomeIcon className="text-7xl py-3" icon={faHtml5} />
        <ProgressBar percentage={70} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faCss3} />
        <ProgressBar percentage={80} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faReact} />
        <ProgressBar percentage={75} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faVuejs} />
        <ProgressBar percentage={40} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faSquareJs} />
        <ProgressBar percentage={50} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faNodeJs} />
        <ProgressBar percentage={50} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faJava} />
        <ProgressBar percentage={40} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faPython} />
        <ProgressBar percentage={70} color="primaryTitle" />
        <FontAwesomeIcon className="text-7xl py-3" icon={faGithub} />
        <ProgressBar percentage={60} color="primaryTitle" />
        <img
          src="https://static-00.iconduck.com/assets.00/mongodb-icon-512x512-mhzq0108.png"
          alt=""
          className="lg:w-2/4 py-3 opacity-80"
        />
        <ProgressBar percentage={70} color="primaryTitle" />
      </div>
    </div>
  );
}

export default Skills;
