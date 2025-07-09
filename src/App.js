import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainBanner from "./components/MainBanner";
import Navigation from "./components/Navigation";
import Categori from "./components/Categori";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <div id="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <Sale />
            </>
          }
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
