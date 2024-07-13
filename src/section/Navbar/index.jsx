import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Education", sectionId: "Education-section" },
  { title: "Skills", sectionId: "Skills-section" },
  { title: "Projects", sectionId: "Projects-section" },
  { title: "Certificates", sectionId: "Certificates-section" },
];

const Navbar = ({ navbarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden lg:flex flex-col font-bold">
      {navbarItems.map((e, i) => (
        <div
          key={`nav-${e}-${i}`}
          onClick={() => handleClick(e.sectionId)}
          onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
          onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
          className="cursor-pointer flex py-2"
        >
          <div>
            <FontAwesomeIcon
              className={`${
                currentSection === e.sectionId
                  ? "text-primaryTitle"
                  : isMouseEnter[e.title]
                  ? ""
                  : "hidden"
              }`}
              icon={faArrowRight}
            />
          </div>
          <div
            className={`${
              currentSection === e.sectionId || isMouseEnter[e.title]
                ? "translate-x-4"
                : ""
            } duration-500 ease-out`}
          >
            {e.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
