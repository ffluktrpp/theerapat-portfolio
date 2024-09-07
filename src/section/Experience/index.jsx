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
      className="bg-slate-700 rounded-lg p-4 scroll-m-14"
      id="Projects-section"
    >
      <div className="text-primaryTitle text-2xl font-bold mb-6 ml-5">
        Projects
      </div>

      {/* Weather Web App */}
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-4 py-6 rounded-xl transition-transform transform hover:scale-105 ${
          isMouseEnter["exp1"] ? "bg-slate-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp1"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp1"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2023</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={expImg1}
              alt="Weather Web App"
              className="w-5/6 rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold transition-all ${
              isMouseEnter["exp1"] ? "text-primaryTitle" : ""
            }`}
          >
            Weather Web App
          </div>
          <div className="text-sm">
            A Weather website using an API. This web application provides
            weather conditions for different cities or countries. By typing the
            correct name of a city or country, it shows temperature, humidity,
            and wind speed.
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
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              HTML
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              CSS
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              JavaScript
            </div>
          </div>
        </div>
      </div>

      {/* Food Ordering Website */}
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-4 py-6 mt-4 rounded-xl transition-transform transform hover:scale-105 ${
          isMouseEnter["exp2"] ? "bg-slate-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp2"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp2"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2024</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={expImg2}
              alt="Food Ordering Website"
              className="w-5/6 rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold transition-all ${
              isMouseEnter["exp2"] ? "text-primaryTitle" : ""
            }`}
          >
            Food Ordering Website
          </div>
          <div className="text-sm">
            A simple food ordering website to practice React and Tailwind
            skills.
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
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              React
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              Tailwind
            </div>
          </div>
        </div>
      </div>

      {/* Stroop Test */}
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-4 py-6 mt-4 rounded-xl transition-transform transform hover:scale-105 ${
          isMouseEnter["exp3"] ? "bg-slate-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp3"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp3"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2024</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={expImg3}
              alt="Stroop Test"
              className="w-5/6 rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold transition-all ${
              isMouseEnter["exp3"] ? "text-primaryTitle" : ""
            }`}
          >
            Stroop Test
          </div>
          <div className="text-sm">
            The Stroop Test website adapts a classic psychological experiment
            into an online format, measuring cognitive control and processing
            speed.
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
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              HTML
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              CSS
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              JavaScript
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
