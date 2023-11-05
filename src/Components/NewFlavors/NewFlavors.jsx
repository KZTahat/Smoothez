import "./newFlavors.css";
import Orange from "../../assets/Images/new_flavors/Orange.jpg";
import Apple from "../../assets/Images/new_flavors/Apple.jpg";
import Aurore_grape from "../../assets/Images/new_flavors/Aurore_grape.jpg";
import Bananas from "../../assets/Images/new_flavors/Bananas.jpg";
import Carrots from "../../assets/Images/new_flavors/Carrots.jpg";
import Grapes from "../../assets/Images/new_flavors/Grapes.jpg";
import Guava from "../../assets/Images/new_flavors/Guava.jpg";
import Strawberry from "../../assets/Images/new_flavors/Strawberry.jpg";

import {FlavorCard} from "../Fragments";

function NewFlavors() {
  let newFlavors = [
    {
      name: "ORANGE",
      image: Orange,
      price: 34,
      destination: "#",
    },
    {
      name: "APPEL",
      image: Apple,
      price: 14,
      destination: "#",
    },
    {
      name: "AURORE GRAPE",
      image: Aurore_grape,
      price: 13,
      destination: "#",
    },
    {
      name: "BANANAS",
      image: Bananas,
      price: 12,
      destination: "#",
    },
    {
      name: "CARROTS",
      image: Carrots,
      price: 21,
      destination: "#",
    },
    {
      name: "GRAPES",
      image: Grapes,
      price: 34,
      destination: "#",
    },
    {
      name: "GUAVA",
      image: Guava,
      price: 53,
      destination: "#",
    },
    {
      name: "STRAWBERRY",
      image: Strawberry,
      price: 12,
      destination: "#",
    },
  ];

  return (
    <>
      <section className="new_flavors_container">
        <div className="newFlavors_content">
          <h3>New Flavors</h3>
          <div className="new_flavors">
            {newFlavors.map((element, idx) => {
              return (
                <FlavorCard
                  parentClass="new_flavors_card"
                  key={idx}
                  destination={element.destination}
                  image={element.image}
                  name={element.name}
                  price={element.price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewFlavors;
