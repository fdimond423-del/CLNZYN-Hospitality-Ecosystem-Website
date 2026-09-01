import { Building2, ArrowDownRight, PaintBucket, Hammer, Wrench, BedDouble, Lightbulb, ShowerHead, Ruler, Brush, Home, Grid, ClipboardCheck, HardHat, Sofa, Archive, Frame } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon, StaggerContainer, StaggerItem } from '@/App';
import { Link } from 'wouter';

export default function Property() {
  usePageMeta('Commercial Motel Remodeling & Property Upgrade Services', 'CLNZYN™ coordinates motel room renovations, guest room furniture installation, LED corridor upgrades, commercial kitchen remodels, and handyman services across the USA.');
  
  const furnitureOptions = [
    { icon: BedDouble, title: 'Guest-Room Furniture', desc: 'Durable, stylish beds, mattresses, and seating designed for hospitality use.' },
    { icon: Lightbulb, title: 'LED & Lighting Upgrades', desc: 'Energy-efficient lighting solutions that instantly modernize rooms and corridors.' },
    { icon: ShowerHead, title: 'Bathroom Fixtures', desc: 'Modern shower heads, vanities, and mirrors that elevate the guest experience.' },
    { icon: Sofa, title: 'Lobby Furniture', desc: 'Comfortable, welcoming seating areas that impress guests upon arrival.' },
    { icon: Archive, title: 'Cabinets & Storage', desc: 'Functional storage solutions built to withstand heavy hotel usage.' },
    { icon: Frame, title: 'Décor & Accessories', desc: 'The finishing touches that turn a basic room into a premium experience.' }
  ];

  const handymanServices = [
    { name: 'General Repairs', icon: Wrench },
    { name: 'Door & Lock Repairs', icon: Hammer },
    { name: 'Electrical Fixture Replacement', icon: Lightbulb },
    { name: 'Plumbing Repairs', icon: ShowerHead },
    { name: 'Maintenance', icon: ClipboardCheck },
    { name: 'Minor Construction', icon: HardHat },
    { name: 'Room Repairs', icon: Home },
    { name: 'Preventive Maintenance', icon: Grid }
  ];

  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center', minHeight: '60vh' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>05 / Property Upgrades & Remodeling</p>
          <h1 className="display-lg">
            TRANSFORM YOUR <span className="coral">ASSET.</span>
          </h1>
          <p className="body-lg">
            From outdated to modern to marketable. We provide everything from new furniture to full architectural remodeling and everyday handyman services.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="button-primary">
              Discuss Your Property <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/remodeling.png`} alt="Motel Remodeling Projects" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Design & Remodeling Split Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div className="swap-order-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/remodeling.png`} alt="Design and Remodeling" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Design & Remodeling. Property Services.</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Complete property transformation.</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                We handle everything from architecture and interior design to exterior upgrades and ongoing maintenance.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Architecture & Design", desc: "Custom architectural and interior design to elevate your property's appeal." },
                { title: "Room Renovation", desc: "Complete guest room remodels including flooring, painting, and fixture upgrades." },
                { title: "Bathroom Remodeling", desc: "Modern bathroom renovations with upgraded showers, vanities, and lighting." },
                { title: "Exterior Upgrades", desc: "Facade improvements, landscaping, and exterior lighting to boost curb appeal." },
                { title: "Construction Coordination", desc: "Seamless project management from demolition to final inspection." },
                { title: "Preventive Maintenance", desc: "Scheduled property maintenance to prevent costly emergency repairs." },
                { title: "Handyman & Repairs", desc: "On-call repair services for plumbing, electrical, and general fixes." }
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

      {/* Furniture Section */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Building2} /> Furniture & Property Upgrades</p>
            <p>Give your property a fresh, modern look with commercial hospitality grade furniture packages.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {furnitureOptions.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.05} type="scale">
              <div 
                className="bento-card-interactive"
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '10px', backgroundColor: 'rgba(16,185,129,0.05)', borderRadius: '10px', color: 'hsl(var(--accent))', width: 'fit-content' }}>
                  <option.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'hsl(var(--foreground))' }}>{option.title}</h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{option.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Handyman Services Section */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Wrench} /> Handyman & Property Services</p>
            <p>Because small maintenance repairs can prevent expensive commercial liability issues later.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {handymanServices.map((item, index) => (
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
            <p className="eyebrow"><AnimatedIcon icon={Hammer} /> The Renovation Return on Investment</p>
            <p>How room and lobby upgrades directly increase property value and booking revenue.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <Reveal type="scale" delay={0.1}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Increase Average Daily Rate (ADR)</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Modern bathrooms and contemporary guest room furniture are the leading factors in command higher room rates. Properties that undergo standard visual updates see an average increase of 15% to 25% in daily booking rates.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.2}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Enhanced Asset Valuation</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Whether you plan to operate for the next decade or seek an exit, keeping structural components, electrical circuits, plumbing systems, and fixtures up to code directly increases the market valuation of your commercial property.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.3}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Phased Remodeling Schedules</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Renovations shouldn't halt your cash flow. We coordinate projects in phases, updating blocks of rooms during low-occupancy periods to minimize revenue loss and maintain ongoing operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom Panel */}
      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '30px', alignItems: 'center', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <div>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>One Point of Coordination</p>
              <h2 className="display-md" style={{ marginTop: '1rem', color: 'hsl(var(--foreground))' }}>One property.<br/>One service network.</h2>
            </div>
            <div>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Stop managing dozens of contractors. Let CLNZYN handle the upgrades, the remodeling, and the daily maintenance so you can focus on the business.
              </p>
              <Link href="/contact" className="button-primary">
                Discuss Your Property <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
