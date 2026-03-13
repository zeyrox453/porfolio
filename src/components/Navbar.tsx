import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Layout, FolderKanban, FileText, Mail, Award } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: <Layout size={20} /> },
    { name: 'Certifications', path: '/certifications', icon: <Award size={20} /> },
    { name: 'Projets', path: '/projets', icon: <FolderKanban size={20} /> },
    { name: 'CV', path: '/cv', icon: <FileText size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
         style={{
           position: 'fixed',
           top: 0,
           width: '100%',
           zIndex: 50,
           height: '80px',
           display: 'flex',
           alignItems: 'center',
           transition: 'var(--transition)',
           ...(scrolled && { borderBottom: '1px solid var(--glass-border)', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)' })
         }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>
          LG<span className="gradient-text">.Portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontWeight: '500',
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                  opacity: location.pathname === link.path ? 1 : 0.8
                }}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div style={{ display: 'none', cursor: 'pointer' }} className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
