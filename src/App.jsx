import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./section/Left-Section";
import RightSection from "./section/Right-Section";

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
    <>
      <div className="mt-14 mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[40%_60%]">
        <LeftSection
          navbarItems={navbarItems}
          currentSection={currentSection}
        />
        <RightSection onInitial={addsectionIds} />
      </div>
    </>
  );
}

export default App;
