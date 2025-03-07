import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Home from "./Pages/HomePage.jsx";
import Contact1 from "./Pages/Contact1.jsx";
import About from "./Pages/About.jsx";
import Notfound from "./Pages/Notfound.jsx";
import CoreTeam from "./Components/CoreTeam.jsx";
import Career from "./Pages/Career.jsx";
import CareerPage from "./Components/CareerPage.jsx";
import Termcondition from "./Components/Termcondition.jsx";
import Business from "./Components/Businescomponent/Business.jsx";
const App = () => {
  return (
    <Router>
   
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Home />} />
          <Route path="/contact1" element={<Contact1/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Notfound" element={<Notfound/>} />
          <Route path="/CoreTeam" element={<CoreTeam/>} />
          <Route path="/Career" element={<Career/>} />
          <Route path="/Careerpage" element={<CareerPage/>} />
          <Route path="/Termcondition" element={<Termcondition/>} />
          <Route path="/business" element={<Business />} />
        </Routes>
      
    </Router>
  );
};
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
