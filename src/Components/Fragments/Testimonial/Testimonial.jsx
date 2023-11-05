import "./testimonial.css";

function Testimonial(props) {
  return (
    <div className="testimonial_container">
      <img src={props.element.image} alt={props.element.name} />
      <p>{props.element.testimony}</p>
      <div className="name_field">
        <span>{props.element.name}</span>
      </div>
      <div className="role_field">
        <span>Client</span>
      </div>
    </div>
  );
}

export default Testimonial;
