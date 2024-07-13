import { useEffect } from "react";
import { data } from "../../contents/about";

const About = ({ onInitial }) => {
  useEffect(() => {
    onInitial("About-section");
  }, []);
  return (
    <div
      className="space-y-4 bg-primarySubContent rounded-lg p-2 scroll-m-14"
      id="About-section"
    >
      <div className="text-primaryTitle text-lg font-medium">{data.title}</div>
      <div>{data.description}</div>
    </div>
  );
};

export default About;
