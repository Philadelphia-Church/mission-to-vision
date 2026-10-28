import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-xl font-bold text-primary-700">
          Mission to Vision
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary-700' : 'text-secondary-600 hover:text-primary-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-secondary-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-primary-700' : 'text-secondary-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
