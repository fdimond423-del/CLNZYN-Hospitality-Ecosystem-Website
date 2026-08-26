import { Building2, ArrowDownRight, TrendingUp, Handshake, Search, Activity, Shuffle, PackageCheck, LogOut, BedDouble, Fuel, ShoppingCart, WashingMachine, Utensils, Wine, Building } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon } from '@/App';
import { Link } from 'wouter';

export default function Business() {
  usePageMeta('Motel Business Acquisitions, Sales & Strategic Ecosystem Growth', 'CLNZYN™ Global Business Service™ acts as your commercial business acquisition and broker partner, helping motel owners buy, operate, and transition properties.');
  
  const properties = [
    { name: 'Motels', icon: BedDouble },
    { name: 'Hotels', icon: Building2 },
    { name: 'Gas Stations', icon: Fuel },
    { name: 'C-Stores', icon: ShoppingCart },
    { name: 'Laundromats', icon: WashingMachine },
    { name: 'Restaurants', icon: Utensils },
    { name: 'Beer & Liquor Stores', icon: Wine },
    { name: 'Multi-business properties', icon: Building }
  ];

  const journeySteps = [
    { icon: Search, title: 'FIND', desc: 'Identify opportunities across Motels, Hotels, Gas Stations, C-Stores, Laundromats, and Restaurants.' },
    { icon: Activity, title: 'EVALUATE', desc: 'Analyze revenue, expenses, location viability, operations, and growth potential.' },
    { icon: Handshake, title: 'ACQUIRE', desc: 'Deal structuring, negotiation, due diligence, and closing coordination.' },
    { icon: Shuffle, title: 'TRANSFORM', desc: 'Remodeling, architecture, furniture, lighting, and security upgrades.' },
    { icon: Building2, title: 'OPERATE', desc: 'Implement SOPs, staff training, inventory control, housekeeping, and maintenance.' },
    { icon: TrendingUp, title: 'GROW', desc: 'Add food, vending, retail, amenities, and additional revenue streams.' },
    { icon: PackageCheck, title: 'SUPPLY', desc: 'CLNZYN™ Amenities, linens, cleaning products, and guest supplies.' },
    { icon: LogOut, title: 'EXIT', desc: 'Position, market, sell, and successfully transition out of your investment.' }
  ];

  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>07 / Buy • Sell • Grow</p>
          <h1 className="display-lg" style={{ marginBottom: '1.5rem' }}>
            GLOBAL BUSINESS <span className="coral">SERVICE™</span>
          </h1>
          <p className="body-lg" style={{ fontSize: '1.25rem', lineHeight: 1.7, color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>
            Your business acquisition & growth partner. We support motel and hospitality operators from the initial property search and cash-flow evaluations to ongoing operational upgrades and eventual exits.
          </p>
          
          {/* Key Capabilities Bullet Points */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'hsl(var(--foreground))' }}>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'hsl(var(--accent))', borderRadius: '50%' }}></span>
              Motels & Hotels Valuation Analysis
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'hsl(var(--accent))', borderRadius: '50%' }}></span>
              India-to-USA Wholesale Supply Chains
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'hsl(var(--accent))', borderRadius: '50%' }}></span>
              Capital Upgrades & Revenue Placement
            </li>
          </ul>

          {/* Statistics counter bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '2.5rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(var(--accent))', fontFamily: 'var(--app-font-display)' }}>150+</div>
              <div style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px' }}>Valued Properties</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(var(--accent))', fontFamily: 'var(--app-font-display)' }}>India</div>
              <div style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px' }}>Direct Sourcing</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(var(--accent))', fontFamily: 'var(--app-font-display)' }}>35%</div>
              <div style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px' }}>Supply Savings</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2} type="slide-left">
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/img7.jpeg`} alt="Global Business Service Brokerage" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Identify & Evaluate */}
      <section className="page-wrap section" style={{ paddingTop: '5vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Search} /> Identify & Evaluate</p>
            <p>Looking to buy commercial property? We help identify and evaluate acquisition opportunities across the USA.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {properties.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.03} type="scale">
              <div className="feature-card">
                <AnimatedIcon icon={item.icon} delay={index * 0.03} />
                <strong>{item.name}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Journey */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          <div>
            <Reveal className="section-header" type="slide-up">
              <>
                <p className="eyebrow"><AnimatedIcon icon={TrendingUp} /> The Full Journey</p>
                <p>From finding the commercial asset to scaling it to managing the business exit.</p>
              </>
            </Reveal>
            
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {journeySteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '80px 140px 1fr', 
                    gap: '2rem', 
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <AnimatedIcon icon={step.icon} delay={index * 0.05} />
                    </div>
                    <strong style={{ fontSize: '1.2rem', letterSpacing: '0.05em', color: 'hsl(var(--foreground))' }}>{step.title}</strong>
                    <span style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>{step.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={0.2} type="slide-up">
              <div style={{ marginTop: '2rem', padding: '2.5rem', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Transaction & Capital Improvement Standards</h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Acquiring a commercial hospitality property requires a rigorous capital allocation strategy. Under our Global Business Service™, we coordinate complete site audits covering HVAC efficiencies, roof lifespans, structural integrity, and local zoning compliance before contract signing.
                </p>
                <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Post-closing, we execute a fast-track 90-day transition timeline. This includes moving supply vendors to the factory-direct India catalog, installing telemetry vending machines, upgrading parking illumination, and retraining housekeeping teams under our proprietary operational SOPs.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} type="slide-right">
            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
              <img src={`${import.meta.env.BASE_URL}images/img8.jpeg`} alt="Motel Acquisitions valuation" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
              <img src={`${import.meta.env.BASE_URL}images/img9.jpeg`} alt="Multi-business Ecosystem Growth" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition Section (SEO Content Boost) */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Building2} /> Valuation Multiplication</p>
            <p>How combining multiple independent hospitality services yields higher asset multiples.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <Reveal type="scale" delay={0.1}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Diversified Revenue Buffers</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Motels with adjacent assets (gas stations, Laundromats, or vending lobbies) stand resilient against seasonal occupancy fluctuations. Non-room revenues buffer your operations during low-occupancy months, ensuring cash flow consistency.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.2}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Customer Lifetime Value (LTV)</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                A guest staying at your motel fills their car at your gas station, buys beverages from your vending machines, and dines at your restaurant. Instead of single-visit room transactions, capture multiple high-margin micro-sales.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.3}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Premium Portfolio Packaging</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Institutional commercial buyers seek diversified cash flow portfolios rather than standalone motels. By packaging your property as a comprehensive hospitality ecosystem, you command significantly higher exit multiples on sale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom Panel */}
      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <div>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>The Multi-Business Owner Ecosystem</p>
              <h2 className="display-md" style={{ marginTop: '1rem', color: 'hsl(var(--foreground))' }}>Connecting Business.<br/>Creating Wealth.</h2>
            </div>
            <div>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Imagine an owner operating a Motel, C-Store, Gas Station, Restaurant, Liquor Store, Laundromat, and Vending. Instead of managing each business as an isolated operation, build an integrated business ecosystem.<br/><br/>
                <strong style={{ color: 'hsl(var(--foreground))' }}>ONE CUSTOMER CAN CREATE MULTIPLE REVENUE STREAMS.</strong>
              </p>
              <Link href="/contact" className="button-primary">
                Let's Build Your Ecosystem <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
