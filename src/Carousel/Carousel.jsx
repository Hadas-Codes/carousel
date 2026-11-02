import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
  return (
    <div className="carousel">
      {images.map((src, index) => (
        <CarouselItem key={src} src={src} alt={`תמונה ${1 + index}`} />
      ))}
    </div>
  );
}

export default Carousel;