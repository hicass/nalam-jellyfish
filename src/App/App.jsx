import { Routes, Route } from "react-router-dom";
import DemoLandingPage from "../pages/DemoLandingPage";
import DonorLandingPage from "../pages/DonorLandingPage";
import ProjectDetailPage from "../pages/ProjectDetaiPage";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<DemoLandingPage />} />
        <Route path="/donor" element={<DonorLandingPage />} />
        <Route path="/project" element={<ProjectDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
