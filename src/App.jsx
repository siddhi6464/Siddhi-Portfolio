import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Simple Footer */}
      <footer style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--border-glass)',
        textAlign: 'center',
        background: 'var(--bg-secondary)',
        color: 'var(--text-secondary)'
      }}>
        <div className="container">
          <p style={{ fontWeight: 500 }}>
            Made with <span style={{ color: 'var(--accent-color)' }}>♥</span> by Siddhi
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
