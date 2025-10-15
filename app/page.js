'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Message sent successfully!')
    e.target.reset()
    setTimeout(() => setFormStatus(''), 3000)
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>Portfolio</a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Professional headshot of portfolio owner"
              className="hero-image"
            />
            <h1>Hello, I'm Alex Johnson</h1>
            <p>A passionate full-stack developer crafting elegant solutions to complex problems. Specializing in modern web technologies and user-centric design.</p>
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
          </div>
        </section>

        <section id="projects" className="section projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image">🚀</div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  A fully responsive e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.
                </p>
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">💬</div>
              <div className="project-content">
                <h3 className="project-title">Real-Time Chat Application</h3>
                <p className="project-description">
                  WebSocket-powered messaging platform with end-to-end encryption, file sharing, and seamless mobile responsiveness.
                </p>
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">📊</div>
              <div className="project-content">
                <h3 className="project-title">Data Visualization Dashboard</h3>
                <p className="project-description">
                  Interactive analytics platform featuring real-time data processing, custom chart components, and exportable reports.
                </p>
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">🎨</div>
              <div className="project-content">
                <h3 className="project-title">Design System Library</h3>
                <p className="project-description">
                  Comprehensive component library with accessibility-first approach, complete documentation, and Storybook integration.
                </p>
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">🌍</div>
              <div className="project-content">
                <h3 className="project-title">Travel Planning App</h3>
                <p className="project-description">
                  Mobile-first progressive web app with offline capabilities, interactive maps, and personalized itinerary recommendations.
                </p>
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a full-stack developer with over 5 years of experience building web applications that solve real-world problems. My journey in tech started with a fascination for creating interactive experiences, and it has evolved into a passion for crafting scalable, user-friendly solutions.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud architecture, and agile development practices. When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers, or exploring the latest tech trends.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding of user needs, ensuring every project delivers both functionality and exceptional user experience.
              </p>
              <a href="/resume.pdf" className="resume-btn" download>Download Resume</a>
            </div>

            <div className="skills-container">
              <h3 style={{ marginBottom: '1.5rem' }}>Technical Skills</h3>

              <div className="skill">
                <div className="skill-name">
                  <span>JavaScript / TypeScript</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name">
                  <span>React / Next.js</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name">
                  <span>Node.js / Express</span>
                  <span>88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name">
                  <span>UI/UX Design</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name">
                  <span>Cloud Services (AWS/GCP)</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skills-icons">
                <div className="skill-icon">
                  <div className="skill-icon-img">⚛️</div>
                  <div className="skill-icon-name">React</div>
                </div>
                <div className="skill-icon">
                  <div className="skill-icon-img">📱</div>
                  <div className="skill-icon-name">Next.js</div>
                </div>
                <div className="skill-icon">
                  <div className="skill-icon-img">🟢</div>
                  <div className="skill-icon-name">Node.js</div>
                </div>
                <div className="skill-icon">
                  <div className="skill-icon-img">🎨</div>
                  <div className="skill-icon-name">CSS3</div>
                </div>
                <div className="skill-icon">
                  <div className="skill-icon-img">🗄️</div>
                  <div className="skill-icon-name">MongoDB</div>
                </div>
                <div className="skill-icon">
                  <div className="skill-icon-img">☁️</div>
                  <div className="skill-icon-name">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="section-title">Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                required
                aria-required="true"
              ></textarea>
            </div>

            <button type="submit" className="form-submit">Send Message</button>
            {formStatus && <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--secondary-color)' }}>{formStatus}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com" className="social-link" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
            <span>GH</span>
          </a>
          <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
            <span>LI</span>
          </a>
          <a href="https://twitter.com" className="social-link" aria-label="Twitter Profile" target="_blank" rel="noopener noreferrer">
            <span>TW</span>
          </a>
          <a href="mailto:contact@example.com" className="social-link" aria-label="Email Contact">
            <span>EM</span>
          </a>
        </div>
        <p className="footer-text">© 2025 Alex Johnson. All rights reserved.</p>
      </footer>
    </>
  )
}
