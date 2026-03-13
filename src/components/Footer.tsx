import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ 
      padding: '3rem 0', 
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <a 
          href="https://github.com/zeyrox453/porfolio" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-main)',
            fontSize: '0.9rem',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            border: '1px solid var(--glass-border)'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
        >
          <Github size={18} /> Code Source du Portfolio (Git Mastery)
        </a>
        <p>&copy; {new Date().getFullYear()} Lucas Gugliardi - Portfolio BTS SIO SISR</p>
      </div>
    </footer>
  );
}

export default Footer;
