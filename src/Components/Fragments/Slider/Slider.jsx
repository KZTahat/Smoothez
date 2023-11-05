import { useState } from "react";
import "./slider.css";
import { FlavorCard } from "../../Fragments";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider">
      <div onClick={goToPrevious} className="slideLeftArrow">
        ❰
      </div>
      <div onClick={goToNext} className="sliderRightArrow">
        ❱
      </div>
      <div className="slides">
        <FlavorCard
          parentClass="organic_flavor_card"
          destination={slides[currentIndex].destination}
          image={slides[currentIndex].image}
          name={slides[currentIndex].name}
          price={slides[currentIndex].price}
          max_price={slides[currentIndex].max_price}
        />
      </div>
      <div className="dotsContainer">
        {slides.map((slide, slideIndex) => (
          <div
            className="dotStyle"
            id={currentIndex == slideIndex ? "selectedSlide" : ""}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
