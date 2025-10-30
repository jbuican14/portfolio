import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full lg:w-72 lg:h-screen bg-primary z-50">
      <div className="flex flex-col h-full">
        {/* Brand */}
        <a
          href="#page-top"
          className="flex flex-col items-center py-4 px-3 lg:py-8"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="block lg:hidden text-white text-xl font-bold">Jutiporn Buican</span>
          <span className="hidden lg:block">
            <img
              className="w-40 h-40 rounded-full mx-auto mb-2 border-8 border-white/20"
              src="/img/juti-profile.jpeg"
              alt="Jutiporn Buican"
            />
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden absolute right-4 top-4 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:block flex-1 overflow-y-auto`}>
          <ul className="flex flex-col space-y-2 px-4 py-4 lg:py-0">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link text-white/80 hover:text-white w-full text-left py-2 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className="nav-link text-white/80 hover:text-white w-full text-left py-2 transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('pastWork')}
                className="nav-link text-white/80 hover:text-white w-full text-left py-2 transition-colors"
              >
                Past Work
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
