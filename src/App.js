import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dinosaurs from './components/Dinosaurs'
import Herbivores from "./components/Herbivores";
import Carnivores from "./components/Carnivores";

const App = () => {
  return (
    <div className="App">
      <h1>Dinosaurs! They're cool! I GUESS.</h1>
      <header>
        <ul>
          <li>
            <Link to="/herbivores">Herbivores</Link>
          </li>
          <li>
            <Link to="/carnivores">Carnivores</Link>
          </li>
          <li>
            <Link to="/">All</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route exact path="/" element={<Dinosaurs />} />
        <Route path="/herbivores" element={<Herbivores />} />
        <Route path="/carnivores" element={<Carnivores />} />
      </Routes>
    </div>
  );
}

export default App;
