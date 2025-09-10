import { Routes, Route } from 'react-router-dom'
import { IntroPage } from '@/pages'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </div>
  )
}

export default App
