import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import expImg1 from "../../assets/weather-app.png";
import expImg2 from "../../assets/water-system.png";
import expImg3 from "../../assets/stroop-test.png";
import expImg4 from "../../assets/movies-review.png";
import expImg5 from "../../assets/oph-website.png";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

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

      {/* BU Open House Website */}
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-4 py-6 mt-4 rounded-xl transition-transform transform hover:scale-105 ${
          isMouseEnter["exp5"] ? "bg-slate-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp5"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp5"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2024</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={expImg5}
              alt="BU oph Website"
              className="w-5/6 rounded-lg shadow-md transition-transform duration-300"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold transition-all ${
              isMouseEnter["exp5"] ? "text-primaryTitle" : ""
            }`}
          >
            BU Open House Website
          </div>
          <div className="text-sm">
            This group mini projects for CS319. This is the Open House website
            for the IT faculty at Bangkok University, developed using HTML and
            CSS. I have worked on the home page, about page, workshop and
            activities page, sponsors and partners page, along with the
            navigation bar and footer.
          </div>
          <div>
            <a
              href="https://ffluktrpp.github.io/bu-oph-website/"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xl hover:text-gray-400 transition-all mr-3"
              />
            </a>
            <a
              href="https://github.com/ffluktrpp/bu-oph-website"
              target="blank"
            >
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
          </div>
        </div>
      </div>

      {/* Movies Review Website */}
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-4 py-6 mt-4 rounded-xl transition-transform transform hover:scale-105 ${
          isMouseEnter["exp4"] ? "bg-slate-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp4"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp4"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2024</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={expImg4}
              alt="Food Ordering Website"
              className="w-5/6 rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={`text-xl font-bold transition-all ${
              isMouseEnter["exp4"] ? "text-primaryTitle" : ""
            }`}
          >
            CozyBlock: Movies Review Website
          </div>
          <div className="text-sm">
            This project is for a community of movie lovers to review their
            favorite movies and read other's reviews. It was built using React,
            TailwindCSS, JavaScript, and Firebase. I worked on the website's
            interface and some backend features. (unfinished)
          </div>
          <div>
            <a
              href="https://github.com/ffluktrpp/movies-review-project"
              target="blank"
            >
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
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              JavaScript
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              Firebase
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
                icon={faArrowUpRightFromSquare}
                className="text-xl hover:text-gray-400 transition-all mr-3"
              />
            </a>
            <a
              href="https://codesandbox.io/p/sandbox/stroop-test-d8fp8g?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clt8n1k3l0006356h2sach4et%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clt8n1k3k0002356h2q8mgsug%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clt8n1k3k0003356hj8t3jmb0%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clt8n1k3k0005356h57gwutzz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clt8n1k3k0002356h2q8mgsug%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clt8n1k3k0001356he77884ri%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A47%252C%2522startColumn%2522%253A8%252C%2522endLineNumber%2522%253A47%252C%2522endColumn%2522%253A8%257D%255D%257D%255D%252C%2522id%2522%253A%2522clt8n1k3k0002356h2q8mgsug%2522%252C%2522activeTabId%2522%253A%2522clt8n1k3k0001356he77884ri%2522%257D%252C%2522clt8n1k3k0005356h57gwutzz%2522%253A%257B%2522id%2522%253A%2522clt8n1k3k0005356h57gwutzz%2522%252C%2522activeTabId%2522%253A%2522clt8nhxz200ls356h1k5d301z%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clt8nhxz200ls356h1k5d301z%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clt8n1k3k0003356hj8t3jmb0%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clt8n1k3k0003356hj8t3jmb0%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="text-xl hover:text-gray-400 transition-all"
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

      {/* Happy Water Management System */}
      <div
        className={`lg:grid lg:grid-cols-[30%_70%] px-4 py-6 rounded-xl transition-transform transform hover:scale-105 ${
          isMouseEnter["exp2"] ? "bg-slate-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ ["exp2"]: true })}
        onMouseLeave={() => setIsMouseEnter({ ["exp2"]: false })}
      >
        <div className="text-sm text-gray-300">
          <div className="text-xl mb-2">
            <span>2023</span>
          </div>
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              src={expImg2}
              alt="Weather Web App"
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
            Happy Water Management System
          </div>
          <div className="text-sm">
            This is the final project for the CS403 course, created using
            Python, Tkinter, and SQL. The project is designed to manage a
            drinking water business, including employee management, product
            inventory management, raw material inventory management in the
            factory, order management, and invoicing. I was responsible for
            designing the user interface and some of the backend
            functionalities.
          </div>
          <div>
            <a
              href="https://github.com/ffluktrpp/finalproject-happy-water-system.git"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl hover:text-gray-400 transition-all"
              />
            </a>
          </div>
          <div className="flex gap-x-4">
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              Python
            </div>
            <div className="bg-primaryTitle text-primaryContent rounded-md px-2 py-1 hover:scale-110 transition-all">
              SQL
            </div>
          </div>
        </div>
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
            <a
              href="https://github.com/ffluktrpp/weather-widget.git"
              target="blank"
            >
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
