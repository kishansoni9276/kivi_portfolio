import { Menu, X } from 'lucide-react'

export default function MobileNav({ onToggle, isOpen }) {
  return (
    <button className="mobile-nav-toggle" onClick={onToggle} aria-label="Toggle menu">
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  )
}
