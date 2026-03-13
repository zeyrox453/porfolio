import { Network, Server, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="container" style={{ textAlign: 'center', paddingTop: '8rem', paddingBottom: '10rem' }}>
        <h1 style={{ marginBottom: '1.5rem' }}>
          Bonjour, je suis <span className="gradient-text">Lucas Gugliardi</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', marginInline: 'auto' }}>
          Étudiant en <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>2ème année de BTS SIO</span> (Services Informatiques aux Organisations) option <span style={{ color: 'var(--primary)', fontWeight: '600' }}>SISR</span>.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link to="/projets" className="btn btn-primary">
            Voir mes projets <ArrowRight size={20} />
          </Link>
          <Link to="/cv" className="btn btn-outline">
            Mon CV
          </Link>
        </div>
      </section>

      {/* Parcours Section */}
      <section style={{ background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="gradient-text">Mon Parcours</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Passionné par l'informatique depuis mon plus jeune âge, j'ai commencé mon cursus par un <strong>Bac Pro Systèmes Numériques</strong>. 
                Ce premier pas m'a permis d'acquérir les bases solides en maintenance et réseaux.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                Aujourd'hui, en deuxième année de <strong>BTS SIO SISR</strong> à Perpignan, j'approfondis mes connaissances en administration système et réseau, 
                tout en me spécialisant dans la sécurisation des infrastructures.
              </p>
            </div>
            <div className="glass" style={{ padding: '3rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--primary)', padding: '1rem', borderRadius: '0.5rem' }}>
                <Server size={32} color="white" />
              </div>
              <h3 style={{ color: 'var(--primary)' }}>SISR</h3>
              <p style={{ color: 'var(--text-muted)' }}>Solutions d'infrastructure, systèmes et réseaux</p>
              <hr style={{ margin: '1.5rem 0', borderColor: 'var(--glass-border)' }} />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Administration Windows/Linux</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Routage et Commutation</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Virtualisation (VMWare/Hyper-V)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competences Overview */}
      <section className="container">
        <h2 style={{ textAlign: 'center' }}>Domaines d'Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Network size={32} color="var(--primary)" />
            </div>
            <h3>Réseaux</h3>
            <p style={{ color: 'var(--text-muted)' }}>Configuration Cisco, Protocoles (TCP/IP, VLAN, DHCP, DNS), Monitoring.</p>
          </div>
          <div className="glass" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Server size={32} color="var(--primary)" />
            </div>
            <h3>Systèmes</h3>
            <p style={{ color: 'var(--text-muted)' }}>Windows Server, Active Directory, Debian/Ubuntu.</p>
          </div>
          <div className="glass" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <ShieldCheck size={32} color="var(--primary)" />
            </div>
            <h3>Sécurité</h3>
            <p style={{ color: 'var(--text-muted)' }}>Firewalling (PFSense, Fortinet), VPN, Gestion des droits et audits.</p>
          </div>
        </div>
      </section>

      {/* Veille Technologique Section */}
      <section className="container">
        <div className="glass" style={{ padding: '3rem', borderLeft: '4px solid var(--primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '0.5rem' }}>
              <Network size={28} color="var(--primary)" />
            </div>
            <h2 style={{ margin: 0 }}>Veille Technologique (E5)</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Dans le cadre de mon épreuve E5, je réalise une veille constante sur l'<strong>Hyperconvergence (HCI)</strong> et les infrastructures <strong>Cloud-Native</strong>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>SUSE Harvester</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Suivi des évolutions de l'écosystème open-source HCI basé sur Kubernetes et KubeVirt.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Rancher & K8s</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Analyse de la convergence entre la gestion des conteneurs et la virtualisation traditionnelle.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Observabilité</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mise en place de dashboards Grafana pour le monitoring en temps réel des infrastructures critiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projet Avenir */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="glass" style={{ padding: '4rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(15, 23, 42, 0.7))', textAlign: 'center' }}>
            <h2 className="gradient-text">Mon Projet d'Avenir</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--text-main)' }}>
              Après l'obtention de mon BTS SIO SISR, je souhaite poursuivre mes études en <strong>Licence Professionnelle</strong> puis en <strong>Master</strong> spécialisé dans la 
              <strong> Cybersécurité</strong> ou l'<strong>Ingénierie Réseaux</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Mon objectif final est de continuer mes études en Master 2 Expert en Systèmes, Réseaux & Cloud Computing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
