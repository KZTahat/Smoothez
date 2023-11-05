import "./postHeader.css";
import post_home_image_one from "../../assets/Images/post_header/post_home_image_one.png";
import post_home_image_two from "../../assets/Images/post_header/post_home_image_two.png";
import post_home_image_three from "../../assets/Images/post_header/post_home_image_three.png";
import post_home_image_four from "../../assets/Images/post_header/post_home_image_four.png";
import middle_image from "../../assets/Images/post_header/post_header_middle.png";

function PostHeader() {
  let categories = [
    {
      name: "100% ORGANIC",
      image: post_home_image_one,
      description:
        "We make our products from 100% organic and fresh ingredients full of vitamins and nutrients.",
    },
    {
      name: "NO ADDITIVES",
      image: post_home_image_three,
      description:
        "Our smoothies, healthy drinks, and energy bowls contain no artificial additives, only vital elements.",
    },
    {
      name: "GOOD FOR HEALTH",
      image: post_home_image_two,
      description:
        "Our drinks are exceptionally good for boosting your health and increasing your energy level.",
    },
    {
      name: "A LOT OF ENERGY",
      image: post_home_image_four,
      description:
        "We designed our products as the universal organic energetics that can quench your thirst.",
    },
  ];
  return (
    <>
      <section className="post_header_container">
        <div className="post_header_content">
          {categories.map((element, idx) => {
            return (
              <>
                  {idx == 1 ? <div className="middle_image">
                    <img src={middle_image} alt="post_header_middle" />
                  </div> : ""}
                <div className="post_header_category" id={`category${idx}`}>
                  {idx == 0 || idx == 2 ? (
                    <>
                      <div className="text">
                        <h3>{element.name}</h3>
                        <p>{element.description}</p>
                      </div>
                      <div className="image">
                        <img src={element.image} alt={element.name} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="image">
                        <img src={element.image} alt={element.name} />
                      </div>
                      <div className="text">
                        <h3>{element.name}</h3>
                        <p>{element.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default PostHeader;
