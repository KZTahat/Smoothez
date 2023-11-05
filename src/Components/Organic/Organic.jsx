import "./organic.css";

import chili_mongo from "../../assets/Images/organic/chili_mongo.png";
import banana_berry from "../../assets/Images/organic/banana_berry.png";
import aurore_grape from "../../assets/Images/organic/aurore_grape.png";
import { useEffect, useState } from "react";

import { Slider } from "../Fragments";

function Organic() {
  let [previousSelected, setPreviousSelected] = useState(0);

  let slides = [
    {
      name: "CHILI MANGO",
      image: chili_mongo,
      price: 23,
      destination: "#",
    },
    {
      name: "BANANA BERRY",
      image: banana_berry,
      price: 13,
      destination: "#",
    },
    {
      name: "AURORE_GRAPE",
      image: aurore_grape,
      price: 12,
      destination: "#",
      max_price: 35,
    },
  ];

  let accordions = [
    {
      title: "Organic drinks contain more antioxidants",
      description:
        "There are many substances that can act as antioxidants; chief among them are vitamins A and C, as well as beta-carotene and manganese. A lack of antioxidant-rich foods can lead to a greater risk of atherosclerosis.",
    },
    {
      title: "Organic drinks are better for the environment",
      description:
        "While you’re helping yourself be as healthy as can be, how about helping the environment and your fellow humans? Organic farming practices help conserve water and improve soil quality. Given the droughts we see occurring every year and the dire reports from environmental experts, these are no small reasons to go organic.",
    },
    {
      title: "They're higher in nutrients",
      description:
        "Along with fewer pesticides, this is probably the No. 1 reason folks decide to eat organic. Studies have shown that organic drinks are often higher in vitamin C, iron, magnesium, and phosphorous than their non-organic counterparts.",
    },
  ];

  let badges = [
    {
      name: "FREE SHIPPING",
      icon: <i class="ri-map-pin-2-line"></i>,
      description: "Enjoy our fast & free delivery",
    },
    {
      name: "CUSTOMER CARE",
      icon: <i class="ri-chat-3-line"></i>,
      description: "Always ready to help you",
    },
    {
      name: "HEALTHY & ENERGETIC",
      icon: <i class="ri-heart-line"></i>,
      description: "Our drinks are very nutritious.",
    },
  ];

  useEffect(() => {
    let accordionItems = document.getElementsByClassName("accordion_items");
    accordionItems[0].setAttribute("id", "selected_item");
  }, []);

  function changeSelected(idx) {
    let accordionItems = document.getElementsByClassName("accordion_items");
    if (idx == previousSelected) {
      accordionItems[previousSelected].removeAttribute("id");
      setPreviousSelected(-1);
      return;
    }
    if (previousSelected != -1) {
      accordionItems[previousSelected].removeAttribute("id");
    }
    accordionItems[idx].setAttribute("id", "selected_item");
    setPreviousSelected(idx);
  }

  return (
    <section className="organic_container">
      <div className="upper_part">
        <div className="organic_left_part">
          <Slider slides={slides} />
        </div>
        <div className="organic_right_part">
          <h3>Why Organic?</h3>
          {accordions.map((element, idx) => {
            return (
              <div
                className="accordion_items"
                key={idx}
                onClick={() => changeSelected(idx)}
              >
                <div className="accordion_title">
                  <i className="ri-arrow-down-s-line"></i>
                  <span>{element.title}</span>
                </div>
                <div className="accordion_description">
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom_part">
        {badges.map((element, idx) => {
          return (
            <div className="badge_box" key={idx}>
              <span className="badge_icon">{element.icon}</span>
              <div className="badge_text">
                <h4>{element.name}</h4>
                <span>{element.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Organic;
