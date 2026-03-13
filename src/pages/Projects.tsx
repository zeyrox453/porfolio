import { Folder, FileDown } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Infrastructure Hyperconvergée & Cloud (Harvester HCI)",
    description: "Déploiement d'une infrastructure 'Darkside' (Virtualisation imbriquée sur ESXi) utilisant SUSE Harvester. Mise en œuvre d'un cluster haute disponibilité géré par Rancher. Déploiement de VM Debian 13 avec optimisation du stockage Longhorn. Solution ingénieuse de contournement via un registre d'images Docker sur GitHub pour le déploiement en environnement contraint. Monitoring complet via la stack Grafana intégrée nativement.",
    tags: ["Harvester HCI", "Rancher", "Debian 13", "Grafana", "Docker Registry", "Nested Virtualization"],
    category: "Infrastructure & Cloud",
    link: "/doc_harvester_portofolio.pdf"
  },
  {
    title: "Aspiration de Site Web (Cyotek WebCopy)",
    description: "Utilisation de l'outil Cyotek WebCopy pour l'aspiration complète de sites web. Configuration des règles d'inclusion/exclusion, gestion des liens relatifs et analyse de la structure locale pour une consultation hors-ligne ou un audit de contenu.",
    tags: ["Cyotek WebCopy", "Aspiration Web", "Analyse de Structure", "Archivage"],
    category: "Outils & Méthodologie"
  },
  {
    title: "Infrastructure Réseau Cisco",
    description: "Conception et simulation d'un réseau d'entreprise sur Cisco Packet Tracer incluant du routage inter-VLAN, VTP, STP et sécurité des ports (Port Security).",
    tags: ["Cisco", "Routage", "Switching", "VLAN"],
    category: "Réseau"
  },
  {
    title: "Création d'un site E-commerce (PrestaShop)",
    description: "Mise en place d'une solution de vente en ligne complète sous PrestaShop. Installation du CMS sur un serveur web, configuration du catalogue produits, gestion des commandes et personnalisation du thème pour répondre aux besoins d'une boutique numérique.",
    tags: ["PrestaShop", "E-commerce", "CMS", "MySQL", "Web"],
    category: "Développement & Web"
  },
  {
    title: "Mise en Place d’une DMZ (IPFire)",
    description: "Conception et déploiement d'une zone démilitarisée (DMZ) hautement disponible à l'aide du pare-feu IPFire. Configuration de la haute disponibilité (HA) et filtrage granulaire des flux pour sécuriser l'exposition de serveurs web et mail.",
    tags: ["IPFire", "DMZ", "Haute Disponibilité", "Sécurité Réseau", "Pare-feu"],
    category: "Sécurité & Infrastructure"
  },
  {
    title: "Supervision Zabbix",
    description: "Installation et configuration d'un serveur de supervision Zabbix pour monitorer les serveurs et équipements réseaux via SNMP et agents.",
    tags: ["Monitoring", "Zabbix", "SNMP", "Linux"],
    category: "Services"
  },
  {
    title: "Virtualisation sous VMWare ESXi",
    description: "Mise en place d'un cluster d'hyperviseurs avec gestion du stockage partagé et haute disponibilité des machines virtuelles.",
    tags: ["Virtualisation", "ESXi", "VSphere", "Storage"],
    category: "Système"
  }
];

function Projects() {
  return (
    <div className="fade-in container" style={{ paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h2 className="gradient-text">Mes Projets Réalisés</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Voici une sélection des projets techniques que j'ai menés au cours de ma formation BTS SIO et de mes expériences professionnelles.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass" style={{ 
            padding: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            transition: 'var(--transition)',
            cursor: 'default',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(37, 99, 235, 0.2)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <Folder size={24} color="var(--primary)" />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(37, 99, 235, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  {project.category}
                </span>
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.description}</p>
              
              {project.link && (
                <a href={project.link} download className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', marginBottom: '1.5rem', width: '100%', justifyContent: 'center' }}>
                  <FileDown size={18} /> Consulter le Dossier Technique
                </a>
              )}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '1rem', 
                  fontSize: '0.8rem',
                  border: '1px solid var(--glass-border)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
