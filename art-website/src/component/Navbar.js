import React from 'react';
import { FaInstagram } from 'react-icons/fa';



function Navbar(){
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand">Vulitivibeni<a style={{ fontStyle: 'italic', color: '#D81B60' }}>ART</a></a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto align-items-center">
            <a href="/" class="nav-item nav-link active mx-2">Home</a>
            <a href="/about" class="nav-item nav-link mx-2">About</a> 
            <a href="https://www.instagram.com/vulitivibenimore/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="fa-lg mx-2" style={{ fontSize: '1.5em' }} />
            </a>
            <a href="mailto:colaiera@email.com"  class="nav-item nav-link mx-2">Get in touch</a>
            </div>
        </div>
    </div>
</nav>
      </div>
    );
  }
  
  export default Navbar

