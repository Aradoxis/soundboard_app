
export default function SongPage() {


  return (
    <div className="App">
          <header className="App-header">
            <p>
              Welcome to the song page.
            </p>
            <button className="Play-button" onClick={play_click}>Play</button>
            <button className="nav-button" onClick={nav_to_home}>Back to home</button>
          </header>
        </div>
  );
}

function play_click() {
  const audio = new Audio('zen_garden.mp3');
  audio.volume = 0.5;
  audio.play();
}

function nav_to_home() {
    window.location.href = '/';
}