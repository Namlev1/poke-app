import "../styles/Card.css";

function Card({ img, name }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <button className={"card"}>
      <img src={img} alt="" />
      <h2>{capitalizeFirstLetter(name)}</h2>
    </button>
  );
}

export default Card;
