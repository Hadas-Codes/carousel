import { useState, useEffect } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  function move(step) {
    setSelected((prev) => (prev + step + images.length) % images.length);
  }

  useEffect(() => {
    console.log("effect: timer started");
    const timer = setTimeout(() => {
      move(1);
    }, intervalSeconds * 1000);

    return () => {
      console.log("cleanup: timer cleared");
      clearTimeout(timer);
    };
  }, [selected, intervalSeconds]);

  return (
    <div className="carousel">
      {images.map(
        (src, index) =>
          index === selected && (
            <CarouselItem key={src} src={src} alt={`תמונה ${1 + index}`} />
          )
      )}

      <button className="carousel-arrow prev" onClick={() => move(-1)}>
        ❯
      </button>
      <button className="carousel-arrow next" onClick={() => move(1)}>
        ❮
      </button>

      <div className="carousel-dots">
        {images.map((src, index) => (
          <button
            key={src}
            className={index === selected ? "active carousel-dot" : "carousel-dot"}
            onClick={() => setSelected(index)}
            aria-label={`מעבר לתמונה ${1 + index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;