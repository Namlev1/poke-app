import '../styles/Header.css'

function Header() {
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
        <p>Score: X</p>
          <p>Best score: X</p>
      </div>
    </header>
  );
}

export default Header;
