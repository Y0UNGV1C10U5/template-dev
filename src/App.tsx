import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import ConsultingPage from './pages/ConsultingPage';
import PressPage from './pages/PressPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="/press" element={<PressPage />} />
    </Routes>
  );
}

export default App;
