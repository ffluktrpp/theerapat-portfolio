import { useEffect } from "react";
import Carousel from "../../components/Carousel";

const slides = [
  {
    image: "https://example.com/image1.jpg",
    alt: "Image 1",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://example.com/image2.jpg",
    alt: "Image 2",
    title: "Slide 2",
    description: "This is the second slide",
  },
  {
    image: "https://example.com/image3.jpg",
    alt: "Image 3",
    title: "Slide 3",
    description: "This is the third slide",
  },
];

function Activities({ onInitial }) {
  useEffect(() => {
    onInitial("Activities-section");
  }, []);
  return (
    <div
      className="bg-primarySubContent rounded-lg p-2 scroll-m-14"
      id="Activities-section"
    >
      <div className="text-primaryTitle text-lg font-medium">Activities</div>
      <div>
        <Carousel slides={slides} interval={3000} autoPlay={true} />
      </div>
    </div>
  );
}

export default Activities;
