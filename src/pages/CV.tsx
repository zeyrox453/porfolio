import { Download, GraduationCap, Briefcase, Cpu } from 'lucide-react';

function CV() {
  return (
    <div className="fade-in container" style={{ paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h2 className="gradient-text">Mon CV</h2>
        <a href="/CV_LG.pdf" download className="btn btn-primary" style={{ marginTop: '1rem' }}>
          <Download size={20} /> Télécharger mon CV (PDF)
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* Left Column: Formations & Experiences */}
        <div style={{ flex: '2' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <GraduationCap color="var(--primary)" /> Formations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass" style={{ padding: '2rem', position: 'relative', borderLeft: '4px solid var(--primary)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '700' }}>2024 - Présent</span>
                <h4 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>BTS SIO option SISR</h4>
                <p style={{ color: 'var(--text-muted)' }}>Services Informatiques aux Organisations - Spécialité Réseaux</p>
                <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Lycée/École à Perpignan</p>
              </div>
              <div className="glass" style={{ padding: '2rem', position: 'relative', borderLeft: '4px solid var(--text-muted)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700' }}>2021 - 2024</span>
                <h4 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Bac Pro Systèmes Numériques</h4>
                <p style={{ color: 'var(--text-muted)' }}>Option Réseaux et Télécommunications</p>
                <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Obtenu avec mention</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <Briefcase color="var(--primary)" /> Expériences Professionnelles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--secondary)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: '700' }}>2025 (Stage)</span>
                <h4 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Technicien Réseaux</h4>
                <p style={{ color: 'var(--text-muted)' }}>Entreprise de Services Numériques (ESN)</p>
                <ul style={{ marginTop: '1rem', listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                  <li>Maintenance préventive du parc informatique</li>
                  <li>Configuration de switches et routeurs</li>
                  <li>Support utilisateur de niveau 1 et 2</li>
                </ul>
              </div>
              <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--text-muted)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700' }}>2023 (Stage Bac Pro)</span>
                <h4 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>Technicien Maintenance</h4>
                <p style={{ color: 'var(--text-muted)' }}>Service Informatique Municipal</p>
                <ul style={{ marginTop: '1rem', listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                  <li>Déploiement de postes de travail (Mastering)</li>
                  <li>Brassage de baies de serveurs</li>
                  <li>Dépannage matériel et logiciel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Skills */}
        <div style={{ flex: '1' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <Cpu color="var(--primary)" /> Compétences Techniques
          </h3>
          <div className="glass" style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '1rem' }}>Systèmes d'exploitation</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Windows Server', 'Debian/Ubuntu', 'Active Directory', 'Proxmox'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(37, 99, 235, 0.1)', border: '1px solid var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.85rem' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '1rem' }}>Réseaux & Protocoles</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Cisco IOS', 'VLANS/STP', 'OSPF/Static Routing', 'Wireshark'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--secondary)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.85rem' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '1rem' }}>Sécurité & Services</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Firewalling', 'VPN IPsec', 'GLPI', 'Supervision'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(96, 165, 250, 0.1)', border: '1px solid var(--accent)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.85rem' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
