import React, { useState, useEffect, useRef } from 'react';

// --- Icon SVGs ---
// Using a consistent style for all icons
const SunIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m4.93 19.07 1.41-1.41" /><path d="m17.66 6.34 1.41-1.41" />
  </svg>
);

const MoonIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const DatabaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  </svg>
);

const CloudIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

const BrainCircuitIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.993.142M9 8a3 3 0 1 0 5.184 2.378M14.241 9.336A3 3 0 1 0 16 14.5M12 19a3 3 0 1 0 .142-5.993M5.5 16a3 3 0 1 0 2.873-4.333M16.5 16a3 3 0 1 0-4.333-2.873"/><path d="M12 5V2"/><path d="M9 8V5"/><path d="m14.241 9.336.93-2.493"/><path d="M12 19v3"/><path d="M5.5 16H3"/><path d="M16.5 16H21"/>
  </svg>
);

const GraduationCapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22.2c-2.4 0-4.2-.8-5.6-2.2C8 18.6 7.2 16.8 7.2 14.4V12c0-1.2.4-2.4 1.2-3.2.8-.8 2-1.2 3.2-1.2h.4c1.2 0 2.4.4 3.2 1.2.8.8 1.2 2 1.2 3.2v2.4c0 1.2-.4 2.4-1.2 3.2-.8.8-2 1.2-3.2 1.2z" /><path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 6 9.1c.5.1.7-.2.7-.5v-1.9c-2.5.5-3-.9-3.1-1.3-.1-.3-.7-.6-1.1-.8-.4-.2-.9-.4-1.1-.6-.2-.2-.2-.4 0-.6.2-.2.6-.4.9-.5.3-.1.6-.2.8-.2.2-.2.4-.4.6-.6s.4-.4.6-.6c.2-.2.2-.4.2-.6 0-.2-.2-.4-.4-.6-.2-.2-.4-.4-.6-.6-.2-.2-.4-.4-.6-.6c-.2-.2-.2-.4 0-.6.2-.2.6-.4.9-.5.3-.1.6-.2.8-.2.2-.2.4-.4.6-.6s.4-.4.6-.6c.2-.2.2-.4.2-.6 0-.2-.2-.4-.4-.6-.2-.2-.4-.4-.6-.6-.2-.2-.4-.4-.6-.6-.2-.2-.2-.4 0-.6.2-.2.6-.4.9-.5.3-.1.6-.2.8-.2.2-.2.4-.4.6-.6s.4-.4.6-.6c.2-.2.2-.4.2-.6 0-.2-.2-.4-.4-.6-.2-.2-.4-.4-.6-.6-.2-.2-.4-.4-.6-.6c-.2-.2-.2-.4 0-.6.2-.2.6-.4.9-.5.3-.1.6-.2.8-.2.2-.2.4-.4.6-.6s.4-.4.6-.6c.2-.2.2-.4.2-.6 0-.2-.2-.4-.4-.6-.2-.2-.4-.4-.6-.6-.2-.2-.4-.4-.6-.6c-.2-.2-.2-.4 0-.6.2-.2.6-.4.9-.5.3-.1.6-.2.8-.2.2-.2.4-.4.6-.6s.4-.4.6-.6c.2-.2.2-.4.2-.6s-.2-.4-.4-.6c-.2-.2-.4-.4-.6-.6-.2.2-.4.4-.6.6-.2.2-.2.4 0 .6.2.2.6.4.9.5.3.1.6.2.8.2.2.2.4.4.6.6s.4.4.6.6c.2.2.2.4.2.6s-.2.4-.4.6c-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.2.4 0 .6z" />
  </svg>
);


// --- The Main App Component ---
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use CSS variables for consistent theming
  useEffect(() => {
    const newAccentColor = theme === 'dark' ? '#4FD1C5' : '#14B8A6';
    const newAccentColorHover = theme === 'dark' ? '#38B2AC' : '#0F766E';
    document.documentElement.style.setProperty('--accent-color', newAccentColor);
    document.documentElement.style.setProperty('--accent-color-hover', newAccentColorHover);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  }

  // Canvas Animation
  const canvasRef = useRef(null);
  useEffect(() => {
    if (currentPage !== 'home' || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    let animationFrameId;
    let particles = [];
    let insightFlashes = [];
    const numParticles = 30;

    const pipelinePath = [
      { x: 0, y: 0 }, // Placeholder, will be updated in resize
      { x: 0, y: 0 }
    ];
    
    // --- Helper function for smoother color transitions ---
    const interpolateColor = (color1, color2, factor) => {
      let result = color1.slice();
      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
      }
      return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
    };

    const themeColors = {
      dark: { raw: [79, 209, 197], processed: [160, 174, 192], grid: 'rgba(74, 85, 104, 0.2)', line: '#4A5568' },
      light: { raw: [20, 184, 166], processed: [74, 85, 104], grid: 'rgba(203, 213, 224, 0.5)', line: '#CBD5E0' }
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.008,
          radius: 2 + Math.random() * 2.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = themeColors[theme];

      // Draw and animate particles
      particles.forEach(p => {
        p.progress += p.speed;
        
        if (p.progress > 1) {
            p.progress %= 1;
            // When a particle arrives, create an insight flash
            insightFlashes.push({
              x: pipelinePath[1].x + 20,
              y: pipelinePath[1].y,
              lifespan: 1.0,
              type: Math.random() > 0.5 ? 'bar' : 'line',
              bar1: 10 + Math.random() * 15,
              bar2: 10 + Math.random() * 15,
              lineY1: pipelinePath[1].y - 10 - Math.random() * 5,
              lineY2: pipelinePath[1].y - 5 + Math.random() * 5,
              offsetX: Math.random() * 40 - 20,
              offsetY: Math.random() * 40 - 20,
            });
        }
        
        const x = pipelinePath[0].x + (pipelinePath[1].x - pipelinePath[0].x) * p.progress;
        const y = pipelinePath[0].y + (pipelinePath[1].y - pipelinePath[0].y) * p.progress;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = interpolateColor(colors.raw, colors.processed, p.progress);
        ctx.fill();
      });
      
      // Draw and fade out insight flashes
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.line;

      for (let i = insightFlashes.length - 1; i >= 0; i--) {
          const flash = insightFlashes[i];
          flash.lifespan -= 0.02;

          if (flash.lifespan <= 0) {
            insightFlashes.splice(i, 1);
            continue;
          }

          ctx.globalAlpha = flash.lifespan;
          
          const drawX = flash.x + flash.offsetX;
          const drawY = flash.y + flash.offsetY;

          if (flash.type === 'bar') {
            ctx.strokeRect(drawX, drawY - flash.bar1, 5, flash.bar1);
            ctx.strokeRect(drawX + 8, drawY - flash.bar2, 5, flash.bar2);
          } else { // line
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(drawX + 7, flash.lineY1 + flash.offsetY);
            ctx.lineTo(drawX + 14, flash.lineY2 + flash.offsetY);
            ctx.stroke();
          }
      }
      ctx.globalAlpha = 1.0; // Reset global alpha

      animationFrameId = requestAnimationFrame(draw);
    };

    const resizeCanvas = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        pipelinePath[0] = { x: 0.1 * canvas.width, y: 0.5 * canvas.height };
        pipelinePath[1] = { x: 0.9 * canvas.width, y: 0.5 * canvas.height };
        if (particles.length === 0) createParticles();
        draw(); // Redraw immediately on resize
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    
    resizeCanvas();
    // Restart animation loop if it was cancelled
    if(animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [currentPage, theme]);
  
  // --- Reusable Components ---
  const NavItem = ({ name, page }) => (
    <button
      className={`px-3 py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${currentPage === page
        ? 'text-white bg-[var(--accent-color)] shadow-lg'
        : theme === 'dark'
          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
      }`}
      onClick={() => handleNavClick(page)}
    >
      {name}
    </button>
  );

  const pages = [
    { name: "Home", page: "home" },
    { name: "Blogs", page: "blogs" },
    { name: "Cheatsheets", page: "cheatsheets" },
    { name: "Poetry", page: "poetry" },
    { name: "Startup", page: "startup" },
    { name: "Vault", page: "vault" },
  ];

  return (
    <div className={`min-h-screen font-inter transition-colors duration-500 ease-in-out ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        .font-inter { font-family: 'Inter', sans-serif; }
        .page-fade-in { animation: fadeIn 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <header className={`sticky top-0 z-50 p-4 shadow-md backdrop-blur-lg ${theme === 'dark' ? 'bg-gray-800/70 border-b border-gray-700' : 'bg-white/70 border-b border-gray-200'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-[var(--accent-color)]">Data Analyst & Engineer</div>
          <nav className="hidden md:flex items-center space-x-2">
            {pages.map(p => <NavItem key={p.page} {...p} />)}
          </nav>
          <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`} aria-label="LinkedIn Profile">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`} aria-label="GitHub Profile">
                <GithubIcon className="w-5 h-5" />
              </a>
              <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-800" />}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" aria-label="Open menu">
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {pages.map(p => <NavItem key={p.page} {...p} />)}
            </nav>
          </div>
        )}
      </header>

      <main key={currentPage} className="container mx-auto p-4 md:p-8 lg:p-12 page-fade-in">
        <PageContent page={currentPage} theme={theme} canvasRef={canvasRef} />
      </main>

      <footer className={`p-4 text-center text-sm border-t ${theme === 'dark' ? 'bg-gray-900 text-gray-400 border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
        <p>&copy; {new Date().getFullYear()} Data Analyst & Engineer. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- Page Content Component ---
// This makes the main App component cleaner
const PageContent = ({ page, theme, canvasRef }) => {
  const [activeTag, setActiveTag] = useState(null);
  // State for the contact form inputs
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  // --- Data from your resume ---
  const projects = [
    {
      title: 'Athlete Prosperity Web App',
      description: 'Led a 5-member team in developing a secure, full-stack financial education web app for student-athletes, integrating a Node.js backend with a MySQL database.',
      tags: ['Node.js', 'Express', 'MySQL', 'Full-Stack', 'Team Lead'],
      link: 'https://github.com/athlete-prosperity/athleteprosperity'
    },
    {
      title: 'Omni Gym Social App',
      description: 'Built a cross-platform gym management mobile app using React Native and Python Django with Supabase for real-time database operations and secure storage.',
      tags: ['React Native', 'Python', 'Django', 'Supabase', 'Mobile App'],
      link: '#'
    },
    {
      title: 'Heart Disease Prediction Web App',
      description: 'Developed a Flask web app to predict heart disease by training and deploying various ML models like Logistic Regression, KNN, and Decision Trees.',
      tags: ['Flask', 'Machine Learning', 'Python', 'Scikit-learn', 'EDA'],
      link: 'https://github.com/athlete-prosperity/athleteprosperity'
    },
    {
      title: 'Power BI Financial Analysis',
      description: 'Built an interactive dashboard with ETL processes in Power BI and SQL Server, reducing financial report generation time by 30%.',
      tags: ['Power BI', 'SQL Server', 'ETL', 'DAX', 'Power Query'],
      link: 'https://app.powerbi.com/view?pageName=ReportSection&r=eyJrIjoiNzVlZWUwODgtYWZmYi00YjA0LWJmZDktMzVlNjExZmE2OTU2IiwidCI6ImRkMjQ2ZTRhLTU0MzQtNGUxNS04YWUzLTkxYWQ5Nzk3YjIwOSIsImMiOjN9'
    },
    {
      title: 'Advanced SQL Data Analysis',
      description: 'Developed complex SQL queries to aggregate sales data, delivering insights into employee contributions and key sales trends for management.',
      tags: ['SQL', 'Data Analysis', 'Reporting', 'BI'],
      link: 'https://github.com/Jawadxoxo38/Data-Analysis-with-SQL'
    },
    {
      title: 'Step_Analysis: Apple Health EDA',
      description: 'Conducted an Exploratory Data Analysis (EDA) of Apple Health data to derive insights into various health metrics, activities, and trends.',
      tags: ['Pandas', 'Python', 'Jupyter', 'EDA', 'Numpy', 'Data Cleaning'],
      link: 'https://github.com/Jawadxoxo38/Step_Analysis'
    }
  ];

  const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

  const filteredProjects = activeTag
    ? projects.filter(project => project.tags.includes(activeTag))
    : projects;

  const skills = [
    { icon: CodeIcon, title: "Programming", items: "Python, R, JavaScript, Java, C++, HTML5, CSS3, SQL, MATLAB" },
    { icon: DatabaseIcon, title: "BI & Reporting", items: "Power BI, Tableau, Advanced Excel, SharePoint, DAX, Power Query" },
    { icon: CloudIcon, title: "Data, Cloud & Tools", items: "ETL, Data Modeling, Azure, MS SQL Server, PostgreSQL, GCP (Familiar), Git, Docker, Grafana" },
    { icon: BrainCircuitIcon, title: "ML & Statistics", items: "Regression, Decision Trees, KNN, Predictive Modeling, EDA" }
  ];

  const certifications = [
    { name: 'DA0130: Analyzing Data with Excel', date: 'May 2023' },
    { name: 'Tableau', date: 'May 2023' }
  ];

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Use mailto: protocol to open the user's email client
    const recipient = 'databyjawad@gmail.com';
    const subject = `Portfolio Inquiry from ${formName}`;
    const body = `Hello Jawad, my name is ${formName} and I am writing from the contact form on your portfolio.\n\nHere is my message:\n${formMessage}\n\nMy email is ${formEmail}.`;
    
    // Construct the mailto link and encode the subject and body for URL safety
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Reset the form fields after submission
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };
    
  switch (page) {
    case 'home':
      return (
        <div className="space-y-16 md:space-y-24">
          <section className={`p-8 lg:p-12 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} shadow-lg text-center`}>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Hello, I'm a Data Analyst & Engineer</h1>
            <p className="text-lg lg:text-xl text-gray-400">I build data pipelines and create visualizations that turn raw data into actionable insights.</p>
          </section>

          <section className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} shadow-lg`}>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400">
                I am a passionate data professional dedicated to building robust data pipelines and transforming complex datasets into clear, actionable insights. I thrive on solving real-world problems with data-driven solutions and am always eager to learn new technologies. I believe the power of data lies in its ability to tell a story and inform strategic decisions.
              </p>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-8">The Data Pipeline</h2>
            <div className={`p-4 sm:p-6 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="relative h-32 md:h-40">
                <div className="absolute top-1/2 left-0 sm:left-4 transform -translate-y-1/2 text-center">
                  <DatabaseIcon className="w-8 h-8 md:w-12 md:h-12 mx-auto text-[var(--accent-color)]" />
                  <span className="text-xs font-semibold text-gray-500 mt-2 block">Raw Data</span>
                </div>
                <div className="absolute top-1/2 right-0 sm:right-4 transform -translate-y-1/2 text-center">
                  <CloudIcon className="w-8 h-8 md:w-12 md:h-12 mx-auto text-[var(--accent-color)]" />
                  <span className="text-xs font-semibold text-gray-500 mt-2 block">Cloud Insights</span>
                </div>
                <canvas ref={canvasRef} className="w-full h-full"></canvas>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${!activeTag ? (theme === 'dark' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--accent-color-hover)] text-white') : (theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')}`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTag === tag ? (theme === 'dark' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--accent-color-hover)] text-white') : (theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')}`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <div key={project.title} className={`p-6 rounded-xl border flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-md'}`}>
                    <h3 className="text-xl font-semibold mb-2 text-[var(--accent-color)]">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 text-xs rounded-full ${theme === 'dark' ? 'bg-gray-700 text-teal-300' : 'bg-teal-100 text-teal-800'}`}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex self-start items-center space-x-2 py-2 px-4 rounded-lg text-sm transition-all duration-300 font-semibold group ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                      <span>View Project</span>
                      <ExternalLinkIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                ))
              ) : (
                <div className="md:col-span-2 lg:col-span-3 text-center text-gray-500">
                  No projects found with the selected tags.
                </div>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
            <div className={`p-8 rounded-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'}`}>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {skills.map(skill => (
                  <li key={skill.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[var(--accent-color)] mt-1">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{skill.title}</h4>
                      <p className="text-gray-400 text-sm">{skill.items}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

            <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
            <div className={`max-w-3xl mx-auto p-8 rounded-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'}`}>
              <div className="flex items-start space-x-4">
                <GraduationCapIcon className="w-8 h-8 flex-shrink-0 text-[var(--accent-color)] mt-1"/>
                <div>
                  <h3 className="text-xl font-semibold">Wayne State University</h3>
                  <p className="text-gray-400">Bachelor of Computer Science, Cum Laude</p>
                  <p className="text-sm text-gray-500">Expected Aug 2025</p>
                </div>
              </div>
              <hr className={`my-6 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`} />
              <div>
                <h4 className="text-lg font-semibold mb-4">Certifications</h4>
                <ul className="space-y-2">
                  {certifications.map(cert => (
                    <li key={cert.name} className="flex justify-between items-center">
                      <span className="text-gray-400">{cert.name}</span>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className={`max-w-2xl mx-auto p-8 rounded-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'}`}>
              <form className="space-y-4" onSubmit={handleContactFormSubmit}>
                <input 
                  required 
                  type="text" 
                  placeholder="Name" 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ring-[var(--accent-color)] transition-all ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-50' : 'bg-gray-50 border-gray-300 text-gray-900'}`} 
                />
                <input 
                  required 
                  type="email" 
                  placeholder="Email" 
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ring-[var(--accent-color)] transition-all ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-50' : 'bg-gray-50 border-gray-300 text-gray-900'}`} 
                />
                <textarea 
                  required 
                  placeholder="Your message..." 
                  rows="4" 
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ring-[var(--accent-color)] transition-all ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-50' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                ></textarea>
                <button type="submit" className="w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md text-white bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      );
    // Add placeholder content for other pages
    default:
        return (
          <div className={`p-8 rounded-xl border min-h-[50vh] flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg text-center`}>
            <h2 className="text-4xl font-bold mb-4 text-[var(--accent-color)] capitalize">{page}</h2>
            <p className="text-gray-400">Content for this page is coming soon. Stay tuned!</p>
          </div>
        )
  }
};
