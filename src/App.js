import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation";
import Categori from "./components/Categori";

const App = () => {
  return (
    <div>      
      <Navigation />
      <Categori />
    </div>
  );
};

export default App;
