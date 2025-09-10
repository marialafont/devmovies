import { Routes, Route, Navigate } from 'react-router-dom'
import { IntroPage, HomePage } from '@/pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
