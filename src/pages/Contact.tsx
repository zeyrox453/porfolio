import { useState } from 'react';
import { Mail, Phone, MapPin, GraduationCap, Send, CheckCircle2 } from 'lucide-react';

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Conversion FormData en objet simple pour JSON
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/lucasgugliardi6@gmail.com', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fade-in container" style={{ paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h2 className="gradient-text">Me Contacter</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Un projet, une alternance ou une simple question ? N'hésitez pas à me joindre.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* Contact Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <Mail color="var(--primary)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</p>
              <a href="mailto:lucasgugliardi6@gmail.com" style={{ fontWeight: '600' }}>lucasgugliardi6@gmail.com</a>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <Phone color="var(--primary)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Téléphone</p>
              <a href="tel:0771018710" style={{ fontWeight: '600' }}>07 71 01 87 10</a>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <MapPin color="var(--primary)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Localisation</p>
              <p style={{ fontWeight: '600' }}>Perpignan, France</p>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <GraduationCap color="var(--primary)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Formation Actuelle</p>
              <p style={{ fontWeight: '600' }}>BTS SIO SISR - 2ème année</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass" style={{ padding: '3rem' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '1.5rem' }} />
              <h3>Message envoyé !</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Merci Lucas, je reviendrai vers vous dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="btn btn-outline" 
                style={{ marginTop: '2rem' }}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <>
              <h3 style={{ marginBottom: '2rem' }}>Envoyez-moi un message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
                {/* Configuration FormSubmit */}
                <input type="hidden" name="_subject" value="Nouveau message depuis ton Portfolio !" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nom Complet</label>
                  <input type="text" id="name" name="name" required style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    color: 'white'
                  }} placeholder="Votre nom" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                  <input type="email" id="email" name="email" required style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    color: 'white'
                  }} placeholder="votre@email.com" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                  <textarea id="message" name="message" rows={5} required style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    color: 'white'
                  }} placeholder="Votre message..."></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ justifyContent: 'center' }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'} <Send size={18} />
                </button>
                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>
                    Une erreur est survenue. Veuillez réessayer ou m'envoyer un mail directement.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
