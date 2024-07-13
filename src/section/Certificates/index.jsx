import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import certN1 from "../../assets/cert1.png";
import certN2 from "../../assets/cert2.png";
import certN3 from "../../assets/cert3.png";
import certN4 from "../../assets/cert4.png";
import certN5 from "../../assets/cert5.png";
import certN6 from "../../assets/cert6.png";

const slides = [
  {
    image: certN1,
    alt: "Certificates",
  },
  {
    image: certN2,
    alt: "Certificates",
  },
  {
    image: certN3,
    alt: "Certificates",
  },
  {
    image: certN4,
    alt: "Certificates",
  },
  {
    image: certN5,
    alt: "Certificates",
  },
  {
    image: certN6,
    alt: "Certificates",
  },
];

function Certificates({ onInitial }) {
  useEffect(() => {
    onInitial("Certificates-section");
  }, []);
  return (
    <div
      className="bg-primarySubContent rounded-lg p-2 scroll-m-14 mb-80"
      id="Certificates-section"
    >
      <div className="text-primaryTitle text-lg font-medium">Certificates</div>
      <div className="py-2">
        <Carousel slides={slides} interval={5000} autoPlay={true} />
      </div>
    </div>
  );
}

export default Certificates;
