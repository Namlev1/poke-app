function Card({ img, name }) {
  return (
    <div className={"card"}>
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
