import './App.css';
import Home from './components/home';
import { Routes, Route} from 'react-router-dom';
import Sort from './components/sort';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nogi_sort" element={<Sort group="nogi"/>} />
        <Route path="/sakura_sort" element={<Sort group="sakura"/>} />
        <Route path="/hinata_sort" element={<Sort group="hinata"/>} />
      </Routes>
    </div>
  );
}

export default App;
