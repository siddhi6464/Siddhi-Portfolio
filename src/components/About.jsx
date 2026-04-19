import React from 'react';
import { Code, Palette, Zap, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React.js', level: '90%' },
    { name: 'JavaScript (ES6+)', level: '85%' },
    { name: 'HTML5 & CSS3', level: '95%' },
    { name: 'UI/UX Design', level: '80%' }
  ];

  const features = [
    {
      icon: <Layout size={24} />,
      title: 'Responsive Design',
      desc: 'Layouts that perfectly adapt to any device and screen size.'
    },
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      desc: 'Writing maintainable, scalable, and beautifully structured code.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Performance',
      desc: 'Optimized applications with lightning-fast load times.'
    },
    {
      icon: <Palette size={24} />,
      title: 'Modern UI',
      desc: 'Creating aesthetically pleasing and intuitive user interfaces.'
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="animate-fade-in-up">
          <h2 className="section-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading">
            Get slightly personal and know more about my journey, skills and what I do.
          </p>
        </div>

        {/* Inject Grid Styles */}
        <style>{`
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .features-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          @media (min-width: 900px) {
            .about-grid { grid-template-columns: 1fr 1fr !important; }
            .features-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>

        <div className="about-grid" style={{ display: 'grid' }}>
          
          {/* Bio & Skills */}
          <div className="animate-fade-in-up delay-100">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              Specializing in AI/ML & LLMs
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              I am a final-year B.Tech CS student at MIT WPU, Pune. My focus is on building intelligent systems using Python, OpenAI, and Computer Vision. 
              I enjoy bridging the gap between raw data and actionable AI products, with a strong foundation in both ML pipelines and backend deployment.
            </p>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technical Skills</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'AI & LLM (OpenAI, RAG)', level: '95%' },
                { name: 'ML & Data Science (scikit-learn)', level: '90%' },
                { name: 'Computer Vision (OpenCV, YOLO)', level: '85%' },
                { name: 'Python & Backend (Flask, SQL)', level: '92%' }
              ].map((skill, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{skill.level}</span>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    background: 'var(--bg-secondary)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: skill.level,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--accent-color), var(--accent-secondary))',
                      borderRadius: '4px',
                      transition: 'width 1s ease-in-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Cards */}
          <div className="features-grid" style={{ display: 'grid' }}>
            {features.map((feature, index) => (
              <div key={index} className="glass-card animate-fade-in-up delay-200" style={{
                padding: '2rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-color)',
                  marginBottom: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{feature.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
