import logo from '../logo.svg';

export default function HomePage() {


  return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <button className="Play-button" onClick={play_click}>Play</button>
            <button className="nav-button" onClick={nav_to_song}>To songs</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
  );
}

function play_click() {
  const audio = new Audio('wrong.mp3');
  audio.volume = 0.2;
  audio.play();
}

function nav_to_song() {
    window.location.href = '/songpage';
}