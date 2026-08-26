import { Camera, Lock, Key, Monitor, Lightbulb, ShieldAlert, Wifi, ArrowDownRight } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon } from '@/App';
import { Link } from 'wouter';

export default function Security() {
  usePageMeta('Motel Security Systems & Property Access Control Technology', 'CLNZYN™ coordinates commercial grade security camera installation, electronic keyless door locks, exterior LED lighting, and safety technology for USA motel properties.');
  
  const securityFeatures = [
    { name: 'Security Camera Systems', icon: Camera },
    { name: 'Smart Door Locks', icon: Lock },
    { name: 'Electronic Room Access', icon: Key },
    { name: 'Security Monitoring', icon: Monitor },
    { name: 'Exterior & Parking Lighting', icon: Lightbulb },
    { name: 'Safety & Security Solutions', icon: ShieldAlert },
    { name: 'Property Technology Integration', icon: Wifi }
  ];

  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>03 / Security & Technology</p>
          <h1 className="display-lg">
            PROTECT YOUR <span className="coral">PROPERTY.</span>
          </h1>
          <p className="body-lg">
            Better security. Better guest confidence. Better property management. Upgrade to modern systems that keep everyone safe and operations smooth.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/img11.jpeg`} alt="Motel Security Systems" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      <section className="page-wrap section" style={{ paddingTop: '5vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={ShieldAlert} /> Hotel Security Solutions</p>
            <p>Comprehensive security integration, surveillance cameras, and lock hardware for your entire ecosystem.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {securityFeatures.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.03} type="scale">
              <div className="feature-card">
                <AnimatedIcon icon={item.icon} delay={index * 0.03} />
                <strong>{item.name}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Value Proposition Section (SEO Content Boost) */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Wifi} /> Smart Property Tech Benefits</p>
            <p>Modern security systems designed to lower operating costs, secure assets, and increase guest trust.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <Reveal type="scale" delay={0.1}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Reduced Labor with Keyless Entry</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Smart locks allow operators to issue temporary digital access codes to guests, eliminating check-in friction at the front desk. Staff can manage lock statuses, battery health, and door logs remotely from a central panel.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.2}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Lower Liability & Better Insurance</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                IP cameras with high-definition night vision cover key parking zones and corridors. Clear visual records discourage bad behavior, protect operators against fraudulent liability claims, and lower commercial property insurance rates.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.3}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Intelligent Energy Management</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Integrate occupancy sensors with room thermostats and lighting circuits. When guests check out or leave the room, the HVAC system automatically shifts to energy-saving eco-mode, slashing electricity bills by up to 22%.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <h2 className="display-md" style={{ color: 'hsl(var(--foreground))' }}>Ready to upgrade your tech?</h2>
            <p style={{ maxWidth: '600px', marginBottom: '2rem', color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem' }}>
              From smart locks that improve guest entry to camera systems that protect your parking lot, we can design the right technology package.
            </p>
            <Link href="/contact" className="button-primary">
              Contact our tech team <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
