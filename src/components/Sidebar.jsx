import { NavLink } from 'react-router-dom'
import { Home, FolderGit2, Wrench, Award, GraduationCap, FileText } from 'lucide-react'

const navItems = [
  { to: '/', icon: Home, label: 'About Me' },
  { to: '/projects', icon: FolderGit2, label: 'Projects' },
  { to: '/skills', icon: Wrench, label: 'Skills' },
  { to: '/certifications', icon: Award, label: 'Certifications' },
  { to: '/education', icon: GraduationCap, label: 'Education' },
  { to: '/cv', icon: FileText, label: 'CV / Resume' },
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.65)',
            zIndex: 99,
            backdropFilter: 'blur(6px)',
          }}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Identity */}
        <div className="sidebar-logo">
          <div className="name">Kishan<br />Soni</div>
          <div className="role">B.Tech CSE Student · Developer</div>
          <div className="sidebar-status">
            <span className="sidebar-status-dot" />
            Open to work
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={onClose}
            >
              <Icon size={15} className="nav-icon" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Social links */}
        <div className="sidebar-socials">
          <div className="sidebar-socials-label">Connect</div>
          <div className="sidebar-socials-links">
            <a href="https://www.linkedin.com/in/kishan-soni" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.github.com/KishanSoni" target="_blank" rel="noreferrer" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="mailto:kishanseth9276@gmail.com" title="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
