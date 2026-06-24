import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import HomePage from './HomePageFolder/HomePage';
import SongPage from './SongPageFolder/SongPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songpage" element={<SongPage />} />
      </Routes>
  </Router>
  );
}

export default App;

