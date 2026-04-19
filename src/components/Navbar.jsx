import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`glass ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      transition: 'var(--transition-normal)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>
          Siddhi<span className="text-gradient">Agarwal</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ 
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  transition: 'var(--transition-fast)'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-nav-toggle"
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-glass)',
          padding: '1rem 0'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', alignItems: 'center', gap: '1.5rem', padding: '1rem 0' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.2rem' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Injecting Desktop Nav Media Query */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
