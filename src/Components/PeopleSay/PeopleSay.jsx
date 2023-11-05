import "./peopleSay.css";
import PI_1 from "../../assets/Images/people_say/PI_1.png";
import PI_2 from "../../assets/Images/people_say/PI_2.png";
import PI_3 from "../../assets/Images/people_say/PI_3.png";

import { Testimonial } from "../Fragments";
import { useState, useRef, useEffect } from "react";

function PeopleSay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const myElementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(1019);
  useEffect(() => {
    const element = myElementRef.current;

    let handleResize = () => {
      const element = myElementRef.current;
      if (element) {
        const width = element.getBoundingClientRect().width;
        setElementWidth(width);
      }
    };
    window.addEventListener("resize", handleResize);

    if (element) {
      const width = element.getBoundingClientRect().width;
      setElementWidth(width);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonials = [
    {
      image: PI_1,
      name: "LARA CROFT",
      testimony:
        "I’m very grateful to you for introducing me and my whole family to your extensive range of smoothies and organic juices. We are true fans and regular customers of your store!",
    },
    {
      image: PI_2,
      name: "PATRIC GOORMAN",
      testimony:
        "Your healthy drinks have a wonderful taste and the amazing selection of their flavors is what really attracts me in your store. Thank you for fast delivery and your fresh drinks!",
    },
    {
      image: PI_3,
      name: "KATE SMITH",
      testimony:
        "I am amazed and extremely satisfied by your smoothies, their taste, and the customer service you provide to unexperienced clients who know nothing about organic drinks.",
    },
  ];
  return (
    <section
      className="peopleSay_container"
      style={{ "--elementWidth": elementWidth, "--currentSlide": currentIndex }}
    >
      <div className="peopleSay_content">
        <h3>What People Say</h3>
        <div className="testimonies_cards" ref={myElementRef}>
          {testimonials.map((element, idx) => (
            <Testimonial
              element={element}
              id={idx}
              key={idx}
              style={{ "--testimony_index": idx }}
            />
          ))}
        </div>
        <div className="peopleSay_dot">
          {testimonials.map((element, idx) => (
            <span
              className="dotStyle"
              key={idx}
              onClick={() => goToSlide(idx)}
              id={currentIndex == idx ? "peopleSay_selectedSlide" : ""}
            >
              ●
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeopleSay;
