import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected=0] = useState(0);

  return (
    <div className="carousel">
      {images.map(
        (src, index) =>
          index === selected && (
            <CarouselItem key={src} src={src} alt={`תמונה ${1 + index}`} />
          )
      )}
    </div>
  );
}

export default Carousel;