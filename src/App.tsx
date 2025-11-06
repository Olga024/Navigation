import './App.css'
import { Menu } from './components/Menu';
import { DriftPage } from './pages/DriftPage';
import { ForzaPage } from './pages/ForzaPage';
import { HomePage } from './pages/HomePage';
import { TimeAttackPage } from './pages/TimeAttackPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
