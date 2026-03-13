function Footer() {
  return (
    <footer style={{ 
      padding: '2rem 0', 
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lucas Gugliardi - Portfolio BTS SIO SISR</p>
      </div>
    </footer>
  );
}

export default Footer;
