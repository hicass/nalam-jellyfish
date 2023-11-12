import { Routes, Route } from 'react-router-dom';
import DonorLandingPage from '../pages/DonorLandingPage';
import ProjectDetailPage from '../pages/ProjectDetaiPage';
import './App.css';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/donor" element={<DonorLandingPage />} />
        <Route path="/project" element={<ProjectDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
