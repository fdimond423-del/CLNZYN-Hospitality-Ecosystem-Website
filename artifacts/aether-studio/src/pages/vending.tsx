import { ArrowDownRight, Coffee, CupSoda, Info, Droplets, MapPin, Refrigerator } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon, StaggerContainer, StaggerItem } from '@/App';
import { Link } from 'wouter';

export default function Vending() {
  usePageMeta('Motel Vending Machines & Passive Revenue Solutions', 'CLNZYN™ coordinates commercial snack and drink vending machine placement, coffee vending service, lobby beverage stations, and profit sharing programs for motels.');
  
  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center', minHeight: '60vh' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>04 / Vending & Extra Revenue</p>
          <h1 className="display-lg">
            MAXIMIZE <span className="coral">YOUR SPACE.</span>
          </h1>
          <p className="body-lg">
            More convenience for guests. More revenue opportunities for owners. Turn empty hallways and lobbies into automated profit centers.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="button-primary">
              Contact our vending specialists <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/vending-solutions.jpg`} alt="Motel Vending Machines" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Vending Split Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div className="swap-order-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/vending-solutions.jpg`} alt="Vending Solutions" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Vending Solutions</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>High-Margin Automated Sales</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Every square foot is a high-margin automated sales opportunity on your commercial property. We offer flexible vending partnerships to maximize automated cash flow.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Full-Service Revenue Sharing", desc: "We deliver, install, restock, and maintain the vending machines at zero cost to you. In exchange, you receive a steady percentage of all sales generated on your property. This is a 100% hands-free passive revenue stream." },
                { title: "Owner-Operated Machine Purchase", desc: "Prefer to keep 100% of the profits? Purchase our state-of-the-art smart vending machines at wholesale rates. We configure credit card readers, inventory telemetry systems, and connect you with wholesale food/drink suppliers." },
                { title: "Smart Product Telemetry", desc: "All our machines use cloud-connected sensors to monitor stock levels and performance in real time. We receive automatic alerts when items run low, ensuring we restock quickly and your machines never miss a sale." }
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

      {/* Solutions Grid */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={CupSoda} /> Our Vending Categories</p>
            <p>We provide machines tailored to your specific guest and lobby needs.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {[
            { name: 'Snack & Beverage Vending Machines', icon: Refrigerator },
            { name: 'Coffee Vending', icon: Coffee },
            { name: 'Snack Machines', icon: Info },
            { name: 'Water & Beverage Stations', icon: Droplets },
            { name: 'Lobby & Guest-Area Solutions', icon: MapPin }
          ].map((item, index) => (
            <Reveal key={item.name} delay={index * 0.03} type="scale">
              <div className="feature-card">
                <AnimatedIcon icon={item.icon} delay={index * 0.03} />
                <strong>{item.name}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <h2 className="display-md" style={{ color: 'hsl(var(--foreground))' }}>Turn unused space into reliable income.</h2>
            <p style={{ maxWidth: '600px', marginBottom: '2rem', color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem' }}>
              We handle everything. You earn passively. No upfront cost, no daily management, consistent monthly income.
            </p>
            <Link href="/contact" className="button-primary">
              Contact our vending specialists <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
