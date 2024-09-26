import "../styles/Card.css";

function Card({ img, name, onClick }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <button className={"card"} onClick={() => onClick(name)}>
      <img src={img} alt="" />
      <h2>{capitalizeFirstLetter(name)}</h2>
    </button>
  );
}

export default Card;
