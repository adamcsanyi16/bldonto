import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Teammilan from "./pages/Teammilan/Teammilan";
import City from "./pages/City/City";
import Internazionale from "./pages/Internazionale/Internazionale";
import Ujcity from "./pages/Ujcity/Ujcity";
import Ujinter from "./pages/Ujinter/Ujinter";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Teamcity from "./pages/csapatcity/csapatcity";
import Citymodosit from "./pages/Citymodosit/Citymodosit";
import Intermodosit from "./pages/Intermodosit/Intermodosit";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/manchestercity" element={<Teamcity />} />
          <Route path="/intermilan" element={<Teammilan />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/inter/:id" element={<Internazionale />} />
          <Route path="/citymodosit/:id" element={<Citymodosit />} />
          <Route path="/intermodosit/:id" element={<Intermodosit />} />
          <Route path="/cityfelvetel" element={<Ujcity />} />
          <Route path="/interfelvetel" element={<Ujinter />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
