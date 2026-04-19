import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'FireBird VR',
      role: 'Software Engineer Intern',
      duration: 'Jul 2025 – Jan 2026',
      location: 'Pune, India',
      desc: [
        'Built and deployed full PC game builds using Unity and C#.',
        'Designed MongoDB schemas for game state persistence and player tracking.',
        'Developed backend REST APIs using Flask for player data management.',
        'Optimized database queries, improving data retrieval efficiency.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="animate-fade-in-up">
          <h2 className="section-heading">Work <span className="text-gradient">Experience</span></h2>
          <p className="section-subheading">My professional journey and internship contributions.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card animate-fade-in-up" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '2rem',
                transform: 'translateY(-50%)',
                background: 'var(--accent-color)',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 12px var(--accent-glow)'
              }}>
                <Briefcase size={20} />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem' }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{exp.company}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 600 }}>{exp.duration}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</p>
                </div>
              </div>

              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {exp.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
