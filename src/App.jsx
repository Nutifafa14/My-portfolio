
import './App.css'

const projects = [
  {
    number: '01',
    category: 'DATA ANALYTICS',
    title: 'Geographic Disparities Analysis',
    description:
      'Cleaned Excel datasets, explored geographic disparities between rural and urban areas, and presented insights by creating Power BI visualizations.',
    tools: ['Excel', 'Power BI', 'Data Cleaning'],
    type: 'Analytics',
  },
  {
    number: '02',
    category: 'DATA SCIENCE',
    title: 'PriceMate AI',
    description:
      'Sourced and cleaned the dataset for a food-price forecasting project. Collaborated on developing a machine-learning-based forecasting application to predict future prices of food items.',
    tools: ['Python', 'pandas', 'Machine Learning'],
    type: 'AI & Data',
  },
  {
    number: '03',
    category: 'EMBEDDED SYSTEMS',
    title: 'Smart Livestock Monitoring',
    description:
      'Academic team project exploring livestock monitoring using sensors, an Arduino Mega, Bluetooth communication, and a mobile application.',
    tools: ['Arduino', 'Sensors', 'Bluetooth'],
    type: 'IoT',
  },
  {
    number: '04',
    category: 'UI/UX DESIGN',
    title: 'Campus Helper',
    description:
      'Designed interface concepts in Figma for a tutoring platform intended to help students access learning support.',
    tools: ['Figma', 'UI Design', 'Prototyping'],
    type: 'Design',
  },
]

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          portfolio<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's connect <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO INTERNSHIP OPPORTUNITIES
            </div>

           <p className="eyebrow">BIG DATA STUDENT AT JUNIA</p>

            <h1>
              Dziedzoave Nutifafa Adzo
            </h1>

            <p className="hero-description">
              I am a Big Data student interested in data analytics and
              artificial intelligence. I enjoy preparing data, exploring
              patterns, and turning information into useful insights.
              I am building my skills through academic projects and
              hands-on practice.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my projects <span>↓</span>
              </a>
              <a className="button-secondary" href="#contact">
                Get in touch <span>↗</span>
              </a>
            </div>

            <div className="hero-note">
              <span>Based in France</span>
              <span className="note-divider">/</span>
              <span>Data Analytics & AI</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Data analytics illustration">
            <div className="visual-top">
              <span className="visual-label">DATA EXPLORATION</span>
              <span className="visual-symbol">↗</span>
            </div>

            <div className="chart-heading">
              <p>From raw data</p>
              <h2>To useful insights.</h2>
            </div>

            <div className="chart">
              {[38, 57, 45, 72, 55, 84, 66, 94].map((height, index) => (
                <div className="chart-column" key={index}>
                  <div style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>

            <div className="chart-footer">
              <span>Explore</span>
              <span>Analyse</span>
              <span>Understand</span>
            </div>

            <div className="visual-bottom">
              <span className="visual-icon">✳</span>
              <span>Curiosity meets data.</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Learning by building.</h2>
          </div>

          <div className="about-content">
            <p>
              I'm developing my skills in data analysis, data preparation, Python, SQL, and machine
              learning fundamentals. Through academic and team projects, I have worked on cleaning datasets, creating Power BI
              visualisations, preparing data for a forecasting project, and designing a tutoring platform interface in Figma.
            </p>
            <p>
              My goal is to turn what I learn into practical solutions,
              strengthen my technical foundation, and contribute to a team
              where I can keep growing.
            </p>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I'm learning from.</h2>
            <p className="section-description">
              A selection of academic and team projects, highlighting my
              contributions and the technologies I've explored.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>Skills I'm developing.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-group">
              <span className="skill-index">01</span>
              <h3>Data Analytics</h3>
              <p>Excel · Power BI · Data Cleaning · Data Visualization</p>
            </div>

            <div className="skill-group">
              <span className="skill-index">02</span>
              <h3>Programming & Data</h3>
              <p>Python · SQL · PostgreSQL · pandas</p>
            </div>

            <div className="skill-group">
              <span className="skill-index">03</span>
              <h3>AI & Machine Learning</h3>
              <p>Linear Regression · ML Fundamentals · Data Preparation</p>
            </div>

            <div className="skill-group">
              <span className="skill-index">04</span>
              <h3>Other Technologies</h3>
              <p>Git · React fundamentals · Figma · Arduino</p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Ready to learn, contribute, and grow.</h2>
          <p>
            I'm interested in internship opportunities in data analytics,
            business intelligence, data science, and AI.
          </p>
          <div className="contact-links">
  <a
    className="button-primary"
    href="mailto:nutifafadziedzoave@gmail.com"
  >
    Email me <span>↗</span>
  </a>

  <a
    className="button-secondary"
    href="https://github.com/Nutifafa14"
    target="_blank"
    rel="noreferrer"
  >
    GitHub <span>↗</span>
  </a>
</div>

<p className="contact-note">
  Available for a three-month internship from May to August 2027.
</p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          portfolio<span>.</span>
        </a>
        <p>
  © 2026 Dziedzoave Nutifafa Adzo · Built with React
</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
