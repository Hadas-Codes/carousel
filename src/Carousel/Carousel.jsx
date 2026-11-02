import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="carousel">
      {images.map(
        (src, index) =>
          index === selected && (
            <CarouselItem key={src} src={src} alt={`תמונה ${1 + index}`} />
          )
      )}

      <div className="dots-carousel">
        {images.map((src, index) => (
          <button
            key={src}
            className={index === selected ? "active dot-carousel" : "dot-carousel"}
            onClick={() => setSelected(index)}
            aria-label={`מעבר לתמונה ${1 + index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;