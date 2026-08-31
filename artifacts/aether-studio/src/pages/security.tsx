import { ArrowDownRight, Camera, Lock, Key, Monitor, Lightbulb, ShieldAlert, Wifi } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon, StaggerContainer, StaggerItem } from '@/App';
import { Link } from 'wouter';

export default function Security() {
  usePageMeta('Motel Security Systems & Property Access Control Technology', 'CLNZYN™ coordinates commercial grade security camera installation, electronic keyless door locks, exterior LED lighting, and safety technology for USA motel properties.');
  
  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center', minHeight: '60vh' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>03 / Security & Technology</p>
          <h1 className="display-lg">
            PROTECT YOUR <span className="coral">PROPERTY.</span>
          </h1>
          <p className="body-lg">
            Better security. Better guest confidence. Better property management. Upgrade to modern systems that keep everyone safe and operations smooth.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="button-primary">
              Contact our tech team <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/smart-security.jpg`} alt="Motel Security Systems" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Security Split Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div className="swap-order-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/smart-security.jpg`} alt="Complete Security Protection" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Smart Security. Complete Protection.</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Comprehensive security integration.</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Surveillance cameras and lock hardware for your entire ecosystem. Smart, reliable, and seamlessly integrated security solutions to protect what matters most.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Security Camera Systems", desc: "High-definition surveillance cameras for 24/7 monitoring and real-time peace of mind." },
                { title: "Smart Door Locks", desc: "Advanced smart locks for secure, keyless access and complete control." },
                { title: "Electronic Room Access", desc: "Seamless and secure access solutions for hotels, offices, and properties." },
                { title: "Security Monitoring", desc: "Centralized monitoring systems to watch over your property anytime, anywhere." },
                { title: "Exterior & Parking Lighting", desc: "Bright, energy-efficient lighting solutions for safer exteriors and parking areas." },
                { title: "Safety & Security Solutions", desc: "End-to-end safety and security products to protect people, property, and operations." }
              ].map((item, i) => (
                <StaggerItem key={i} style={{ padding: '2rem', backgroundColor: 'hsl(var(--card))', borderRadius: '16px', border: '1px solid hsl(var(--border))', marginBottom: '1.5rem' }} className="bento-card-interactive">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Value Proposition Section (SEO Content Boost) */}
      <section className="page-wrap section" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Wifi} /> Smart Property Tech Benefits</p>
            <p>Modern security systems designed to lower operating costs, secure assets, and increase guest trust.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
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

    </Shell>
  );
}
