import React from 'react';
import { ArrowRight, Code2, Briefcase, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'var(--accent-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '30vw',
        height: '30vw',
        background: 'rgba(6, 182, 212, 0.3)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1
      }}></div>

      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Inject Grid Mobile/Desktop Layout */}
        <style>{`
          .hero-grid { grid-template-columns: 1fr; }
          .hero-img-container { margin-top: 3rem; }
          @media (min-width: 900px) {
            .hero-grid { grid-template-columns: 1fr 1fr !important; }
            .hero-img-container { margin-top: 0 !important; }
          }
        `}</style>

        <div className="hero-grid" style={{ display: 'grid', alignItems: 'center' }}>
          
          <div className="animate-fade-in-up" style={{ zIndex: 1 }}>
            <div style={{ 
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '99px',
              border: '1px solid var(--border-glass)',
              background: 'rgba(255, 255, 255, 0.03)',
              marginBottom: '1.5rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              👋 Welcome to my portfolio
            </div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>
              I create <span className="text-gradient">intelligent</span> AI experiences.
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2.5rem',
              maxWidth: '80%'
            }}>
              Hi, I'm Siddhi Agarwal. A final-year B.Tech CS student specializing in AI/ML, building end-to-end computer vision systems and LLM-integrated applications.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Follow Me
              </span>
              <div style={{ height: '1px', width: '40px', background: 'var(--border-glass)' }}></div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[Code2, Briefcase, MessageSquare].map((Icon, i) => (
                  <a key={i} href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                    e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-img-container animate-fade-in-up delay-200" style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <div style={{
                position: 'absolute',
                inset: '0',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(45deg, var(--accent-color), var(--accent-secondary))',
                zIndex: 0,
                opacity: 0.8,
                animation: 'pulse-glow 4s infinite'
              }}></div>
              
              <div className="glass-card" style={{
                position: 'absolute',
                inset: '10px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Placeholder Image for Portfolio */}
                <div style={{ fontSize: '5rem' }}>👩‍💻</div>
              </div>

              {/* Floating badges */}
              <div className="glass-card" style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                padding: '12px 20px',
                borderRadius: '12px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '600'
              }}>
                <span style={{ fontSize: '1.5rem' }}>✨</span>
                React Dev
              </div>

              <div className="glass-card" style={{
                position: 'absolute',
                bottom: '15%',
                left: '-5%',
                padding: '12px 20px',
                borderRadius: '12px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '600'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                UI/UX Enthusiast
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
