import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Certifications from './pages/Certifications'
import Education from './pages/Education'
import CV from './pages/CV'
import { useState } from 'react'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter basename="/kivi_portfolio/">
      <div className="page-layout">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <MobileNav onToggle={() => setSidebarOpen(o => !o)} isOpen={sidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
