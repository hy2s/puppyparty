import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sale from "./components/Sale";

const App = () => {
  return (
    <BrowserRouter>
    <div id="App">
      <Routes>
        <Route
          path="/"
          element={
            <Sale />
          }
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
