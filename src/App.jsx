import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./section/Left-Section";
import RightSection from "./section/Right-Section";
import basketball from "../../assets/floatItem/basketball-ball.png";
import guitar from "../../assets/floatItem/guitar.png";
import laptop from "../../assets/floatItem/laptop-screen.png";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addsectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle =
      document.getElementById(sectionId).childNodes[0].textContent;
    const obj = { title: elementTitle, sectionId: elementId };
    setNavbarItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];

      const offsetTop = document.getElementById(el).getClientRects()[0].y;
      const height =
        document.getElementById(el).getClientRects()[0].height * 0.5;
      const viewportHeight = window.innerHeight * 0.3;

      if (offsetTop <= 0) {
        if (offsetTop + height > viewportHeight) {
          setCurrentSection(el);
        }
      } else if (offsetTop > 0 && offsetTop < viewportHeight) {
        setCurrentSection(el);
      }
    }
  };

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    <div>
      <div className="mt-14 mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[40%_60%]">
        <LeftSection
          navbarItems={navbarItems}
          currentSection={currentSection}
        />
        <RightSection onInitial={addsectionIds} />
      </div>

      <div className="hidden md:block">
        {/*<img
          src="src\assets\floatItem\blood.png"
          alt="Blood"
          className="absolute -top-[18%] right-16 w-52 -z-10"
        />
        <img
          src="src\assets\floatItem\blood.png"
          alt="Blood"
          className="absolute -top-[18%] left-12 w-52 -z-10"
        />*/}
        <img src={guitar} alt="Guitar" className="guitar w-[350px]" />
        <img src={basketball} alt="Basketball" className="basketball w-40" />
        <img src={laptop} alt="Laptop" className="laptop w-56" />
      </div>
    </div>
  );
}

export default App;
