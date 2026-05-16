import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Component/Navbar";
import Destination from "./Pages/Destination";
import Crewpage from "./Pages/Crewpage";
import Technology from "./Pages/Technology";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crewpage />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
