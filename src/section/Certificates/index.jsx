import { useEffect } from "react";
import Carousel from "../../components/Carousel";

const slides = [
  {
    image: "src/assets/Certificates/cert1.png",
    alt: "Image 1",
  },
  {
    image: "src/assets/Certificates/cert2.png",
    alt: "Image 2",
  },
  {
    image: "src/assets/Certificates/cert3.png",
    alt: "Image 3",
  },
  {
    image: "src/assets/Certificates/cert4.png",
    alt: "Image 4",
  },
  {
    image: "src/assets/Certificates/cert5.png",
    alt: "Image 5",
  },
  {
    image: "src/assets/Certificates/cert6.png",
    alt: "Image 6",
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
