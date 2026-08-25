import { Mail, Phone, MapPin, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Shell, Reveal, usePageMeta } from '@/App';

export default function Contact() {
  usePageMeta('Contact Us - Get in Touch with CLNZYN™', 'Get in touch with the CLNZYN™ Hospitality Ecosystem. Contact us for wholesale motel guest supplies, security tech installs, vending options, or property renovations.');
  
  return (
    <Shell>
      <section className="page-wrap page-intro">
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Get in Touch</p>
          <h1 className="display-lg">
            LET'S <span className="coral">BUILD</span><br/>YOUR ECOSYSTEM.
          </h1>
          <p className="body-lg" style={{ maxWidth: '600px', marginTop: '1.5rem' }}>
            Ready to upgrade your property, stream operations, or grow your portfolio? Contact us today to discuss how CLNZYN™ can partner with your business.
          </p>
        </Reveal>
      </section>

      <section className="page-wrap section" style={{ paddingTop: '5vh', paddingBottom: '10vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Contact Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Reveal delay={0.1} type="scale">
              <div 
                className="bento-card-interactive"
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ padding: '12px', backgroundColor: 'rgba(16,185,129,0.05)', borderRadius: '12px', color: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: '0.4rem', color: 'hsl(var(--accent))' }}>Email Us</p>
                  <a href="mailto:hello@clnzyn.com" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', textDecoration: 'none' }}>hello@clnzyn.com</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} type="scale">
              <div 
                className="bento-card-interactive"
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ padding: '12px', backgroundColor: 'rgba(16,185,129,0.05)', borderRadius: '12px', color: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: '0.4rem', color: 'hsl(var(--accent))' }}>Call Us</p>
                  <a href="tel:+18005550199" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', textDecoration: 'none' }}>1-800-555-0199</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} type="scale">
              <div 
                className="bento-card-interactive"
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ padding: '12px', backgroundColor: 'rgba(16,185,129,0.05)', borderRadius: '12px', color: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: '0.4rem', color: 'hsl(var(--accent))' }}>Headquarters</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', margin: 0, lineHeight: 1.4 }}>New York, NY<br/>United States</p>
                </div>
              </div>
            </Reveal>

            {/* Quick response note to fill space */}
            <Reveal delay={0.4}>
              <div style={{ padding: '2rem', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '20px', display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'hsl(var(--accent))', marginTop: '2px' }}>
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'hsl(var(--foreground))', margin: '0 0 0.5rem 0' }}>Quick Response Guarantee</h4>
                  <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5, margin: 0 }}>
                    Our sales and support teams review incoming inquiries constantly. You can expect a personalized follow-up with catalog pricing or service details within 24 business hours.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form Column */}
          <Reveal delay={0.4}>
            <form style={{ 
              padding: '2.5rem', 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              height: '100%',
              boxShadow: 'var(--shadow-md)'
            }} onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully!'); }}>
              
              <h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '0.5rem', color: 'hsl(var(--foreground))' }}>Send an Inquiry</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500 }} htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="John Doe" required style={{ padding: '1rem', backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))', fontSize: '1rem', outline: 'none' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500 }} htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="john@example.com" required style={{ padding: '1rem', backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))', fontSize: '1rem', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500 }} htmlFor="message">How can we help?</label>
                <textarea id="message" rows={4} placeholder="Tell us about your property..." required style={{ padding: '1rem', backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))', fontSize: '1rem', resize: 'vertical', outline: 'none' }}></textarea>
              </div>

              <button type="submit" className="button-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Submit Inquiry <ArrowUpRight size={16} />
              </button>
            </form>
          </Reveal>

        </div>
      </section>
    </Shell>
  );
}
