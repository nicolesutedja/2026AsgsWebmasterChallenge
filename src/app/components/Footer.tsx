export default function Footer() {
  return (
    <footer className="bg-[#00588c] text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-['Poppins'] text-base uppercase tracking-tight text-center md:text-left">
          Made with ♡ by A.S. Graphic Studio
        </p>
        
        <nav className="flex flex-wrap justify-center gap-4 md:gap-11 font-['Poppins'] text-base uppercase tracking-tight">
          <a href="mailto:asgraphicstudio@ucsd.edu" className="hover:opacity-80 transition-opacity">
            Email
          </a>
          <a href="https://drive.google.com/file/d/1OziEMDd7xvoDVOUGmCJ4nJzKcFqn8KjN/view?usp=drive_link" className="hover:opacity-80 transition-opacity">
            Resume
          </a>
          <a
            href="https://www.instagram.com/asgraphicstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/asgraphicstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
