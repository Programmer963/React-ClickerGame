import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClickerGame from './pages/ClickerGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route extend path="/" element={<ClickerGame/>}/>
      </Routes>
    </Router>
  );
}

export default App;
