import "./flavorCard.css";

function NewFlavors(props) {
  return (
    <>
      <div className={`one_flavor ${props.parentClass}`}>
        <a href={props.destination} className="image_link">
          <img src={props.image} alt={props.name} />
        </a>
        <a href={props.destination}>
          <span>{props.name}</span>
        </a>
        <span>
          {`$${props.price}.00`}
          {props.max_price ? ` - $${props.max_price}.00` : ""}
        </span>
      </div>
    </>
  );
}

export default NewFlavors;
