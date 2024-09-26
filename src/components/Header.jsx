import '../styles/Header.css'

function Header({score, highScore}) {
  return (
    <header>
      <div>
        <h1>Pokemon Memory Game</h1>
        <p>
          Get point by clicking an image, but you cannot click the same image
          twice.
        </p>
      </div>
      <div>
        <p>Score: {score}</p>
          <p>Best score: {highScore}</p>
      </div>
    </header>
  );
}

export default Header;
