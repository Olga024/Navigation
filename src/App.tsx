import { Route, Router } from 'react-router-dom';
import './App.css'
import { Menu } from './components/Menu';
import { DriftPage } from './components/DriftPage';
import { ForzaPage } from './components/ForzaPage';
import { HomePage } from './components/HomePage';
import { TimeAttackPage } from './components/TimeAttackPage';

export default function App() {
  return (
    <Router location={''} navigator={undefined}>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" Component={DriftPage} />
          <Route path="/timeattack" Component={TimeAttackPage} />
          <Route path="/forza" Component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
