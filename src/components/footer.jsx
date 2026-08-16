import React from 'react';
import '../css/footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      {/* Motivational Banner */}
      <div className="motivational-banner">
        <div className="motivational-content">
          <div className="badge-capsule">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
            </svg>
            START YOUR JOURNEY TODAY
          </div>
          <h2>READY TO SHAPE THE <span className="gradient-text-orange">FUTURE OF TECH?</span></h2>
          <p>
            Take action today. Connect with top developers, build impactful projects, and elevate your tech career with Geek Room JIMS.
          </p>
          <a href="#why-join" className="footer-join-btn">
            <span>Join Geek Room</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="brand-geek">GEEKROOM</span>
            <span className="brand-badge">JIMS</span>
          </div>
          <p>
            Building the next generation of software engineers, open-source contributors, and tech innovators.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#why-join">Why Join</a>
            <a href="#achievements">Achievements</a>
          </div>

          <div className="link-group">
            <h4>Community</h4>
            <a href="#partners">Partners</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Geek Room JIMS. All rights reserved.</p>
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
