import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation";
import Categori from "./components/Categori";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>      
      <Navigation />
      <Categori />
    </div>
  );
};

export default App;
