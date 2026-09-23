import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            VR<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=venkateshwarr600@gmail.com"
            className="nav-button"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-background">
          <div className="gradient-circle circle-one"></div>
          <div className="gradient-circle circle-two"></div>
        </div>

        <div className="hero-container">

          <div className="hero-left">

            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <h1>
              Hi, I'm
              <br />
              <span>Talugula Venkateshwar</span>
              <br />
              <span className="hero-name-last">Reddy.</span>
            </h1>

            <p className="hero-description">
              Computer Science and Engineering graduate with hands-on
              experience in software development, AI/ML and application
              development. I enjoy building practical technology solutions
              using data, artificial intelligence and modern software tools.
            </p>

                       <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                Explore My Work
                <span>→</span>
              </a>

              <a
                href="/Venkateshwar_Reddy_Resume.pdf"
                download="Venkateshwar_Reddy_Resume.pdf"
                className="outline-button"
              >
                Download Resume
                <span>↓</span>
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=venkateshwarr600@gmail.com"
                className="outline-button"
              >
                Contact Me
              </a>

            </div>


                        <div className="social-links">

              <a
                href="https://github.com/venky140"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/talugula-venkateshwar-reddy-reddy-a95538348/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=venkateshwarr600@gmail.com"
              >
                Email ↗
              </a>

            </div>

          </div>  {/* CLOSES hero-left */}

          {/* ================= PROFILE CARD ================= */}

         <div className="hero-right">

  <div className="profile-card">

    <div className="profile-glow"></div>

    <img
      src="/Photo-ID.jpeg"
      alt="Venkateshwar Reddy"
      className="profile-photo"
    />

    <div className="profile-info">
      <h3>Talugula Venkateshwar Reddy</h3>
      <p>Software Developer</p>
    </div>

  </div>

</div>

</div>

</section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="container">

          <div className="section-heading">
            <span>01</span>
            <p>ABOUT ME</p>
          </div>

          <div className="about-grid">

            <div>
              <h2>
                Building technology
                <span> that solves real problems.</span>
              </h2>
            </div>

            <div className="about-content">

              <p>
                I am a Computer Science and Engineering graduate from
                ICFAI Foundation for Higher Education, Hyderabad,
                with a strong focus on software development, problem solving,
                and technology-driven innovation.
              </p>

              <p>
                My technical interests include software development,
                artificial intelligence, machine learning, natural language
                processing and application development. I enjoy learning
                new technologies and turning ideas into working solutions.
              </p>

              <p>
                Through internships and personal projects, I have gained
                practical experience in software development, AI/ML,
                web technologies and cross-platform application development.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="container">

          <div className="section-heading light-heading">
            <span>02</span>
            <p>SKILLS & TECHNOLOGIES</p>
          </div>

          <div className="skills-title">
            <h2>
              Technologies I use to
              <span> build solutions.</span>
            </h2>
          </div>


          <div className="skills-grid">

            {/* Programming */}

            <div className="skill-card">

              <div className="skill-icon">
                01
              </div>

              <h3>Programming</h3>

              <div className="skill-list">
                <span>Python</span>
                <span>C</span>
                <span>Java</span>
                <span>Dart</span>
              </div>

            </div>


            {/* Web Development */}

            <div className="skill-card">

              <div className="skill-icon">
                02
              </div>

              <h3>Web Development</h3>

              <div className="skill-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
              </div>

            </div>


            {/* AI / ML */}

            <div className="skill-card">

              <div className="skill-icon">
                03
              </div>

              <h3>AI & Machine Learning</h3>

              <div className="skill-list">
                <span>NLP</span>
                <span>GPT Fine-Tuning</span>
                <span>Hugging Face Transformers</span>
                <span>Machine Learning</span>
              </div>

            </div>


            {/* Database & Tools */}

            <div className="skill-card">

              <div className="skill-icon">
                04
              </div>

              <h3>Database & Tools</h3>

              <div className="skill-list">
                <span>MySQL</span>
                <span>SQL</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Linux</span>
                <span>Flutter</span>
              </div>

            </div>

          </div>

        </div>

      </section>


{/* ================= EXPERIENCE ================= */}

<section id="experience" className="section experience-section">

  <div className="container">

    <div className="section-heading">
      <span>05</span>
      <p>EXPERIENCE</p>
    </div>

    <h2 className="section-title">
      Where I've
      <span> worked.</span>
    </h2>


    <div className="experience-container">


      {/* EXPERIENCE 1 - BITSILICA */}

      <div className="experience-card">

        <div className="experience-left">

          <span className="experience-number">
            01
          </span>

          <div className="experience-line"></div>

        </div>


        <div className="experience-content">

          <div className="experience-header">

            <div>
              <h3>
                Software Developer Intern
              </h3>

              <h4>
                BITSILICA
              </h4>
            </div>

            <span className="experience-date">
              Jun 2024 – Jul 2024
            </span>

          </div>          <p>
            Worked extensively with Linux commands including file handling,
            process management, permissions, shell utilities, and system
            administration tasks. Developed GUI-based desktop applications
            using PySimpleGUI and Tkinter for user interaction and data
            collection. Implemented Python-based file automation solutions
            for reading, writing, and processing structured data.
          </p>


          <div className="experience-tags">
            <span>Python</span>
            <span>Linux</span>
            <span>PySimpleGUI</span>
            <span>Tkinter</span>
            <span>Automation</span>
          </div>

        </div>

      </div>


      {/* EXPERIENCE 2 - SKILLBANC */}

      <div className="experience-card">

        <div className="experience-left">

          <span className="experience-number">
            02
          </span>

          <div className="experience-line"></div>

        </div>


        <div className="experience-content">

          <div className="experience-header">

            <div>
              <h3>
                Software Developer Intern
              </h3>

              <h4>
                SkillBanc
              </h4>
            </div>

            <span className="experience-date">
              Jan 2026 – Jun 2026
            </span>

          </div>          <p>
            Developed responsive cross-platform mobile applications using
            Flutter and Dart. Designed interactive user interfaces and
            implemented seamless navigation workflows. Integrated application
            features while following modern software development practices.
            Collaborated within Agile teams using Git-based version control
            and project management workflows, with testing, debugging, and
            optimization for improved application performance.
          </p>


          <div className="experience-tags">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Git</span>
            <span>Agile</span>
            <span>Mobile Development</span>
          </div>

        </div>

      </div>


    </div>

  </div>

</section>

      {/* ================= PROJECTS ================= */}

<section id="projects" className="section projects-section">

  <div className="container">

    <div className="section-heading light-heading">
      <span>04</span>
      <p>FEATURED PROJECTS</p>
    </div>

    <h2 className="section-title white-title">
      Things I've
      <span> built.</span>
    </h2>


    <div className="projects-grid">


      {/* PROJECT 1 - LAWGPT */}

      <div className="project-card featured-project">

        <div className="project-top">

          <span className="project-number">
            01
          </span>

          <span className="project-type">
            AI / NLP
          </span>

        </div>

        <h3>
          LawGPT
        </h3>

        <p>
          An AI-powered Indian legal chatbot developed to provide
          information from Indian legal documents. The project
          explores language models, NLP, fine-tuning, embeddings
          and vector-based retrieval.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>GPT-2</span>
          <span>NLP</span>
          <span>Hugging Face</span>
          <span>FAISS</span>
        </div>

        <a
          href="https://github.com/venky140/LawGPT-AI-Powered-Legal-Assistant"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>

      </div>


      {/* PROJECT 2 - STUDENT MANAGEMENT SYSTEM */}

      <div className="project-card">

        <div className="project-top">

          <span className="project-number">
            02
          </span>

          <span className="project-type">
            SOFTWARE
          </span>

        </div>

        <h3>
          Student Management System
        </h3>

        <p>
          A software application designed to manage student-related
          information and simplify common student management
          operations through a structured application interface.
        </p>

        <div className="project-tech">
          <span>Java</span>
          <span>MySQL</span>
          <span>SQL</span>
          <span>Database</span>
        </div>

        <a
          href="https://github.com/venky140/Student-Management-System"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>

      </div>


      {/* PROJECT 3 - USER DATA MANAGEMENT */}

      <div className="project-card">

        <div className="project-top">

          <span className="project-number">
            03
          </span>

          <span className="project-type">
            DATA MANAGEMENT
          </span>

        </div>

        <h3>
          User Data Management
        </h3>

        <p>
          A data management application focused on entering,
          managing and exporting user information through a
          structured application interface.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>Tkinter</span>
          <span>Data Management</span>
          <span>Data Export</span>
        </div>

        <a
          href="https://github.com/venky140/User-Data-Management-Application"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>

      </div>


    </div>

  </div>

</section>


{/* ================= EDUCATION ================= */}

<section id="education" className="section education-section">

  <div className="container">

    <div className="section-heading">
      <span>06</span>
      <p>EDUCATION</p>
    </div>

    <h2 className="section-title">
      My academic
      <span> journey.</span>
    </h2>


    <div className="education-container">

      {/* B.TECH */}

      <div className="education-card">

        <div className="education-number">
          01
        </div>

        <div className="education-content">

          <div className="education-header">

            <div>
              <h3>
                Bachelor of Technology
              </h3>

              <h4>
                Computer Science and Engineering
              </h4>
            </div>

            <span className="education-date">
              2022 – 2026
            </span>

          </div>

          <p className="education-institution">
            ICFAI Foundation for Higher Education, Hyderabad
          </p>

          <p>
            Focused on Computer Science and Engineering with an emphasis on
            software development, computing fundamentals, and practical problem solving.
          </p>

          <div className="education-details">
            <span>CGPA: 7.68</span>
            <span>CSE</span>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ================= CERTIFICATIONS ================= */}

<section id="certifications" className="section certifications-section">

  <div className="container">

    <div className="section-heading">
      <span>07</span>
      <p>CERTIFICATIONS</p>
    </div>

    <h2 className="section-title">
      Learning and
      <span> certifications.</span>
    </h2>


    <div className="certifications-grid">


      {/* CERTIFICATION 1 - JAVASCRIPT */}

      <a
        href="https://drive.google.com/file/d/1Lh8meYQa5qIFih05MSm6O4FI-q_WUhT_/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="certification-card"
      >

        <div className="certification-number">
          01
        </div>

        <div className="certification-content">

          <h3>
            JavaScript Algorithms and Data Structures
          </h3>

          <p>
            freeCodeCamp
          </p>

        </div>

        <span className="certification-arrow">
          ↗
        </span>

      </a>


      {/* CERTIFICATION 2 - RESPONSIVE WEB DESIGN */}

      <a
        href="https://drive.google.com/file/d/1qmzm1cCglus1y--0Gn8YAMs0ZkUYzGl4/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="certification-card"
      >

        <div className="certification-number">
          02
        </div>

        <div className="certification-content">

          <h3>
            Responsive Web Design
          </h3>

          <p>
            freeCodeCamp
          </p>

        </div>

        <span className="certification-arrow">
          ↗
        </span>

      </a>


      {/* CERTIFICATION 3 - BACKEND DEVELOPMENT */}

      <a
        href="https://drive.google.com/file/d/1H40lnIvcfks94g4P9rQ-7tkvNNWLnQ9i/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="certification-card"
      >

        <div className="certification-number">
          03
        </div>

        <div className="certification-content">

          <h3>
            Backend Development and APIs
          </h3>

          <p>
            freeCodeCamp
          </p>

        </div>

        <span className="certification-arrow">
          ↗
        </span>

      </a>


      {/* CERTIFICATION 4 - AWS */}

      <a
        href="https://drive.google.com/file/d/1fZvF0D3r6SKbgeFcwh-GYdWPHglgQ5MV/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="certification-card"
      >

        <div className="certification-number">
          04
        </div>

        <div className="certification-content">

          <h3>
            AWS Academy Cloud Foundations
          </h3>

          <p>
            AWS Academy
          </p>

        </div>

        <span className="certification-arrow">
          ↗
        </span>

      </a>


    </div>

  </div>

</section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-background"></div>

        <div className="container contact-container">

          <p className="contact-small">
            HAVE A PROJECT OR OPPORTUNITY?
          </p>

          <h2>
            Let's create
            <br />
            something <span>impactful.</span>
          </h2>

          <p className="contact-description">
            I'm interested in software development, AI/ML and
            technology-driven projects. Feel free to reach out
            for opportunities, collaborations or interesting ideas.
          </p>

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=venkateshwarr600@gmail.com"
            className="contact-email"
          >
            venkateshwarr600@gmail.com
            <span>↗</span>
          </a>


          <div className="contact-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


          {/* ================= FOOTER ================= */}

<footer className="footer">

  <div className="container">

    <div className="footer-content">

      {/* FOOTER BRAND */}

      <div className="footer-brand">

        <h3>
          Talugula Venkateshwar Reddy
        </h3>

        <p>
          Computer Science & Engineering
          <br />
          Software Development
        </p>

      </div>


      {/* FOOTER NAVIGATION */}

      <div className="footer-nav">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#experience">Experience</a>

        <a href="#education">Education</a>

        <a href="#certifications">Certifications</a>

        <a href="#contact">Contact</a>

      </div>


      {/* FOOTER SOCIAL LINKS */}

      <div className="footer-social">

        <a
          href="https://github.com/venky140"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/talugula-venkateshwar-reddy-reddy-a95538348/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=venkateshwarr600@gmail.com">
          Email ↗
        </a>

      </div>

    </div>


    {/* FOOTER BOTTOM */}

    <div className="footer-bottom">

      <p>
        © {new Date().getFullYear()} Venkateshwar Reddy. All rights reserved.
      </p>

      <p>
        Built with React & Vite
      </p>

    </div>

  </div>

</footer>


</div>

)

}

export default App;