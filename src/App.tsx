import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Component/Navbar";
import Destination from "./Pages/Destination";
import Crewpage from "./Pages/Crewpage";
import Techlogy from "./Pages/Techlogy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crewpage />} />
          <Route path="/Techlogy" element={<Techlogy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
