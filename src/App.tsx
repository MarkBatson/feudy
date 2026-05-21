import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import HostPage from './pages/HostPage'
import TeamPage from './pages/TeamPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/host" element={<HostPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
