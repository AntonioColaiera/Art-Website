import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            Vulitivibeni
            <span style={{ color: '#D81B60', fontStyle: 'italic' }}>ART</span>
          </div>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto align-items-center">
              <a href="/" className="nav-item nav-link active mx-2">
                Home
              </a>
              <a href="/about" className="nav-item nav-link mx-2">
                About
              </a>
              <a
                href="https://www.instagram.com/vulitivibeniart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="fa-lg mx-2"
                  style={{ fontSize: '1.5em' }}
                />
              </a>
              <a
                href="mailto:colaiera@email.com"
                className="nav-item nav-link mx-2"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
