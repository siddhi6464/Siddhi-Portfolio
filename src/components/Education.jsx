import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'MIT World Peace University, Pune',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: '2023 – 2026',
      details: 'CGPA: 7.48/10'
    },
    {
      institution: 'MIT World Peace University, Pune',
      degree: 'Diploma in Information Technology',
      duration: '2020 – 2023',
      details: 'Percentage: 78.88%'
    }
  ];

  return (
    <section id="education" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="animate-fade-in-up">
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">Academic foundations and certifications.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {education.map((edu, index) => (
            <div key={index} className="glass-card animate-fade-in-up" style={{ padding: '2rem', display: 'flex', gap: '1.5rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(6, 182, 212, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-secondary)',
                flexShrink: 0
              }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{edu.institution}</h3>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{edu.degree}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600 }}>{edu.duration}</p>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
