import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import expImg1 from "../../assets/weather-app.png";
import expImg2 from "../../assets/funkfood.png";
import expImg3 from "../../assets/stroop-test.png";

const Experience = ({ onInitial }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  useEffect(() => {
    onInitial("Projects-section");
  }, []);

  return (
    <div
      className="bg-primarySubContent rounded-lg p-2 scroll-m-14"
      id="Projects-section"
    >
      <div className="text-primaryTitle text-lg font-medium">Projects</div>
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-2 py-6 rounded-xl transition-all ${
          isMouseEnter["exp1"] ? "bg-blue-900" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp1"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp1"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2023</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img src={expImg1} alt="#" className="w-5/6 rounded-lg" />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold ${
              isMouseEnter ? "text-primaryTitle" : ""
            }`}
          >
            Weather Web App
          </div>
          <div className="text-sm">
            A Weather website using API. This web application will tell about
            the weather conditions of different cities or countries. By typing
            the correct name of the city or country. It tells about the
            temperature, humidity and wind speed. and displayed on the website
            screen.
          </div>
          <div>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl hover:text-gray-400 transition-all"
              />
            </a>
          </div>
          <div className="flex gap-x-4">
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              Html
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              CSS
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              JavaScript
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-2 py-6 rounded-xl transition-all ${
          isMouseEnter["exp2"] ? "bg-blue-900" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp2"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp2"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2024</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img src={expImg2} alt="#" className="w-5/6 rounded-lg" />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold ${
              isMouseEnter ? "text-primaryTitle" : ""
            }`}
          >
            Food Ordering Website
          </div>
          <div className="text-sm">
            A simple website food ordering practice about my React and Tailwind
            skill
          </div>
          <div>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl hover:text-gray-400 transition-all"
              />
            </a>
          </div>
          <div className="flex gap-x-4">
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              React
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              Tailwind
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-2 py-6 rounded-xl transition-all ${
          isMouseEnter["exp3"] ? "bg-blue-900" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp3"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp3"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2024</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img src={expImg3} alt="#" className="w-5/6 rounded-lg" />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold ${
              isMouseEnter ? "text-primaryTitle" : ""
            }`}
          >
            Stroop Test
          </div>
          <div className="text-sm">
            The stroop test website I tried to adapts this classic experiment
            into an online format.
          </div>
          <div className="text-sm mt-2">
            The Stroop test is a psychological experiment designed to measure
            cognitive control and processing speed. It involves a task where
            participants must name the color of the ink used to print words,
            which can be incongruent with the word itself.
          </div>
          <div>
            <a href="https://d8fp8g.csb.app/" target="blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl hover:text-gray-400 transition-all"
              />
            </a>
          </div>
          <div className="flex gap-x-4">
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              Html
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              CSS
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-105 transition-all">
              JavaScript
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
