import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sale from "./components/Sale";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <div id="App">
      <Routes>
        {/* <Route path="/" element={<Sale />} /> */}
        <Route path="/" element={<Footer />} />
        {/* <Route path="/" element={<Cart />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
