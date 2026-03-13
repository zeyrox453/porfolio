import { Award, ExternalLink, ShieldCheck, Network, Cpu, Database, Zap, Settings } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  badgeId?: string;
}

const certifications: Certification[] = [
  {
    title: "Network and Security",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Protection des réseaux, principes de sécurité et support technique avancé.",
    icon: <ShieldCheck size={32} color="var(--primary)" />
  },
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Configuration initiale des équipements réseaux (Switches/Routers) et protocoles de base.",
    icon: <Settings size={32} color="var(--primary)" />,
    badgeId: "6d8ee6bf-c668-4d9b-9d14-2f96be56b993"
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Concepts fondamentaux des réseaux informatiques et architectures.",
    icon: <Network size={32} color="var(--primary)" />,
    badgeId: "5f957b05-306b-4ffd-9f34-5b5cc3af2b82"
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Adressage IPv4/IPv6 et méthodologies de résolution de problèmes réseaux.",
    icon: <Zap size={32} color="var(--primary)" />,
    badgeId: "8063fca1-18ad-4727-86a9-c40129c2dfe3"
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Fondamentaux de l'Internet des Objets et de la transformation numérique.",
    icon: <Cpu size={32} color="var(--primary)" />,
    badgeId: "bfaf1944-eaab-4323-b25c-05ed972e09f9"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Sensibilisation aux menaces cyber et protection des actifs numériques.",
    icon: <Database size={32} color="var(--primary)" />,
    badgeId: "ee610587-8ad3-4390-8215-f85eddf15ec8"
  }
];

function Certifications() {
  return (
    <div className="fade-in container" style={{ paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h2 className="gradient-text">Mes Badges & Certifications</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Retrouvez mes certifications officielles Cisco authentifiées via la plateforme Credly.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="https://www.credly.com/users/lucas-gugliardi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Voir mon profil Credly complet <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {certifications.map((cert, index) => (
          <div key={index} className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
            {cert.badgeId ? (
              <div 
                key={cert.badgeId}
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id={cert.badgeId} 
                data-share-badge-host="https://www.credly.com"
              ></div>
            ) : (
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '2rem', borderRadius: '1rem', width: 'fit-content' }}>
                {cert.icon}
              </div>
            )}
            
            <div style={{ width: '100%' }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{cert.title}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '1rem' }}>{cert.issuer}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{cert.description}</p>
            </div>

            {!cert.badgeId && (
              <div style={{ marginTop: 'auto', padding: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem', width: '100%' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Badge disponible sur mon profil Credly</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="glass" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center' }}>
        <Award size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
        <h3>Authenticité et Sécurité</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '1rem auto' }}>
          L'utilisation des badges Credly permet une vérification instantanée et sécurisée de mes compétences par les recruteurs, garantissant l'intégrité de mes certifications.
        </p>
      </div>
    </div>
  );
}

export default Certifications;
