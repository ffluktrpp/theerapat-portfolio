import { useEffect } from "react";
import Carousel from "../../components/Carousel";

const slides = [
  {
    image: "src/assets/cert1.png",
    alt: "Certificates",
  },
  {
    image: "src/assets/cert2.png",
    alt: "Certificates",
  },
  {
    image: "src/assets/cert3.png",
    alt: "Certificates",
  },
  {
    image: "src/assets/cert4.png",
    alt: "Certificates",
  },
  {
    image: "src/assets/cert5.png",
    alt: "Certificates",
  },
  {
    image: "src/assets/cert6.png",
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
