function Card({ img, name }) {
  return (
    <button className={"card"}>
      <img src={img} alt="" />
      <h2>{name}</h2>
    </button>
  );
}

export default Card;
