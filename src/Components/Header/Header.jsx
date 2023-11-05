import "./header.css";
import { Title, Nav } from "../Fragments";

function Header(props) {
  return (
    <>
      <section className="header_container">
        <Title homeView={props.homeView} />
        <Nav />
        <div className="header_content">
          <h2>New Drink, New Day</h2>
          <p className="header_paragraph">
            With our wide variety of smoothies and healthy drinks, we are sure
            to help you make the right choice to start your day.
          </p>
          <button className="header_button">
            <a href="#">SHOP NOW</a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
