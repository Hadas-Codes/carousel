import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";

const URL = "https://dummyjson.com/recipes?limit=6&select=name,image";

function RecipesCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`שגיאת שרת: ${response.status}`);
        }
        const data = await response.json();
        const urls = data.recipes.map((recipe) => recipe.image);
        setImages(urls);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  if (loading) {
    return <div className="carousel-message">טוען...</div>;
  }

  if (error) {
    return <div className="carousel-message error">{error}</div>;
  }

  return <Carousel images={images} intervalSeconds={4} />;
}

export default RecipesCarousel;