import { Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/home";
import HairAssesment from "./assets/Pages/hair-assesment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hair-assesment" element={<HairAssesment />} />
    </Routes>
  );
}

export default App;
