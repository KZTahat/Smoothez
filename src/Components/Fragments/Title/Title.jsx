import "./title.css";
import title_image from "../../../assets/Images/home/title_image.png";
function Title(props) {
  function handleSearch() {}
  return (
    <>
      <header className="title_header">
        {props.homeView ? (
          <div className="contact_info">
            <span>
              Call me:{" "}
              <a data-action="call" href="tel:0779927823">
                0779927823
              </a>
            </span>
            <span>
              <a data-action="mail" href="kztahat96@gmail.com">
                kztahat96@gmail.com
              </a>
            </span>
          </div>
        ) : (
          <></>
        )}
        <h1 className="title_main_title">
          <a href="#">
            <img src={title_image} alt="Smoothez Title" />
          </a>
        </h1>
        <form onSubmit={handleSearch} className="input_field">
          <input type="text"></input>
          <i className="ri-search-line"></i>
        </form>
        <div className="title_icons">
          <a className="cart_icon">
            <i className="ri-shopping-cart-2-fill"></i>
            <span className="title_icon_badges">0</span>
          </a>
          <a className="scale_icon">
            <i className="ri-scales-3-fill"></i>
            <span className="title_icon_badges">0</span>
          </a>
          <a>
            <i className="ri-user-3-fill"></i>
          </a>
        </div>
      </header>
      {props.homeView ? <div className="divider" /> : ""}
    </>
  );
}

export default Title;
