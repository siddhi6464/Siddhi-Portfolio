import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: 'AI eHealthCare Platform',
      category: 'MERN / Google Gemini AI',
      description: 'A comprehensive healthcare platform powered by Google Gemini 2.5 Flash. Features intelligent symptom analysis, automated health reminders via node-cron, and a full MERN-stack appointment management system.',
      image: '/projects/healthcare.png',
      tags: ['MongoDB', 'Express', 'React', 'Gemini AI'],
      github: 'https://github.com/siddhi6464/Ai_ehealthcare-fullstack',
      live: '#'
    },
    {
      id: 2,
      title: 'AI Vehicle Speed Detection',
      category: 'Computer Vision',
      description: 'Real-time traffic monitoring system using YOLO for multi-vehicle tracking and speed estimation via spatial displacement, with an integrated license plate recognition layer.',
      image: '/projects/vehicle.png',
      tags: ['OpenCV', 'YOLO', 'Python'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Smart Food Donation System',
      category: 'Web Application',
      description: 'An intelligent platform bridging the gap between food donors and NGOs. Features real-time surplus tracking, automated volunteer matching, and logistical optimization to reduce food waste.',
      image: '/projects/food.png',
      tags: ['React', 'Node.js', 'Maps API'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Airline Ticket Price Prediction',
      category: 'ML / Full Stack',
      description: 'A complete ML pipeline achieving 88% accuracy with Random Forest. Features a Flask REST API and a React.js frontend for real-time ticket price forecasting.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['scikit-learn', 'Flask', 'React'],
      github: 'https://github.com/siddhi6464/Airline-Ticket-Price-Prediction',
      live: '#'
    }
  ];

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      {/* Decorative Blob */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '40vw',
        height: '40vw',
        background: 'rgba(139, 92, 246, 0.1)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        zIndex: -1
      }}></div>

      <div className="container">
        <div className="animate-fade-in-up">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading">
            Some of my recent work that showcases my technical abilities and design principles.
          </p>
        </div>

        <style>{`
          .projects-grid { grid-template-columns: 1fr; gap: 2rem; }
          .project-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
          .project-image-container { overflow: hidden; position: relative; }
          .project-image { transition: transform 0.5s ease; width: 100%; height: 250px; object-fit: cover; }
          .project-card:hover .project-image { transform: scale(1.05); }
          
          @media (min-width: 768px) {
            .projects-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (min-width: 1024px) {
            .projects-grid { grid-template-columns: 1fr 1fr 1fr; }
          }
        `}</style>

        <div className="projects-grid" style={{ display: 'grid' }}>
          {portfolioProjects.map((project, index) => (
            <div key={project.id} className="glass-card project-card animate-fade-in-up" style={{
              animationDelay: `${(index % 3 + 1) * 100}ms`,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              
              <div className="project-image-container">
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)',
                  zIndex: 1
                }}></div>
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, zIndex: 2, marginTop: '-40px' }}>
                <span style={{ 
                  color: 'var(--accent-color)', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem'
                }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '99px',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-glass)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={project.live} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)'
                  }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)'
                  }}>
                    <Code2 size={16} /> Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
