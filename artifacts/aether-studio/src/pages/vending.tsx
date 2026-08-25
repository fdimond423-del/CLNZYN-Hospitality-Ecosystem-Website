import { Coffee, CupSoda, Info, Droplets, MapPin, ArrowDownRight, Refrigerator } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon } from '@/App';
import { Link } from 'wouter';

export default function Vending() {
  usePageMeta('Motel Vending Machines & Passive Revenue Solutions', 'CLNZYN™ coordinates commercial snack and drink vending machine placement, coffee vending service, lobby beverage stations, and profit sharing programs for motels.');
  
  const vendingOptions = [
    { name: 'Snack & Beverage Vending Machines', icon: Refrigerator },
    { name: 'Coffee Vending', icon: Coffee },
    { name: 'Snack Machines', icon: Info },
    { name: 'Water & Beverage Stations', icon: Droplets },
    { name: 'Lobby & Guest-Area Solutions', icon: MapPin }
  ];

  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>04 / Vending & Extra Revenue</p>
          <h1 className="display-lg">
            MAXIMIZE <span className="coral">YOUR SPACE.</span>
          </h1>
          <p className="body-lg">
            More convenience for guests. More revenue opportunities for owners. Turn empty hallways and lobbies into automated profit centers.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src="/images/img12.jpeg" alt="Motel Vending Machines" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      <section className="page-wrap section" style={{ paddingTop: '5vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={CupSoda} /> Vending Solutions</p>
            <p>Every square foot is a high-margin automated sales opportunity on your commercial property.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {vendingOptions.map((item, index) => (
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
            <p className="eyebrow"><AnimatedIcon icon={Coffee} /> Revenue Sharing Models</p>
            <p>Flexible vending partnerships to maximize automated cash flow on your property.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <Reveal type="scale" delay={0.1}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Full-Service Revenue Sharing</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                We deliver, install, restock, and maintain the vending machines at zero cost to you. In exchange, you receive a steady percentage of all sales generated on your property. This is a 100% hands-free passive revenue stream.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.2}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Owner-Operated Machine Purchase</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Prefer to keep 100% of the profits? Purchase our state-of-the-art smart vending machines at wholesale rates. We configure credit card readers, inventory telemetry systems, and connect you with wholesale food/drink suppliers.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.3}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Smart Product Telemetry</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                All our machines use cloud-connected sensors to monitor stock levels in real-time. We receive automatic alerts when items run low, ensuring we restock popular beverages and snacks before they run out, keeping guest satisfaction high.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <h2 className="display-md" style={{ color: 'hsl(var(--foreground))' }}>Let's build a vending plan.</h2>
            <p style={{ maxWidth: '600px', marginBottom: '2rem', color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem' }}>
              We'll analyze your property layout and foot traffic to place the perfect mix of machines and products.
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
