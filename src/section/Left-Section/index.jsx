import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({ navbarItems, currentSection }) => {
  return (
    <div className="px-4 mb-20 lg:mb-0">
      <div className="sticky top-14 grid gap-y-5 lg:grid-row-[35%_45%_20%] lg:h-[80vh]">
        <Header />
        <Navbar navbarItems={navbarItems} currentSection={currentSection} />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSection;
