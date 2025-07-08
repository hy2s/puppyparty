import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sale from "./components/Sale";
import InstaReview from "./components/InstaReview";

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
      <InstaReview/> 
      </div>
    </BrowserRouter>
  );
};

export default App;
