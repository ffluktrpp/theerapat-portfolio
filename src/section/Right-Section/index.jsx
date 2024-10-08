import About from "../About";
import Experience from "../Experience";
import Education from "../Education";
import Skills from "../Skills";
//import Activities from "../Activities";
import Certificates from "../Certificates";
import HeroSection from "../Hero";

const RightSection = ({ onInitial }) => {
  return (
    <div className="grid gap-y-20 px-4">
      <HeroSection />
      <About onInitial={onInitial} />
      <Education onInitial={onInitial} />
      <Skills onInitial={onInitial} />
      <Experience onInitial={onInitial} />
      <Certificates onInitial={onInitial} />
    </div>
  );
};

export default RightSection;
