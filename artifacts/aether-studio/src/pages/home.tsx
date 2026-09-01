import { ArrowRight, ArrowDownRight, Shield, Package, TrendingUp, LayoutGrid, HandPlatter, Building2, HelpCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon, StaggerContainer, StaggerItem } from '@/App';
import { Link } from 'wouter';
import { useState } from 'react';

export default function Home() {
  usePageMeta('CLNZYN™ Hospitality Ecosystem - Motel Supplies, Remodeling & Growth Solutions', 'CLNZYN™ provides an integrated hospitality ecosystem for motel and hotel owners. From factory-direct room supplies and amenities to smart camera security, custom vending machine revenue, commercial remodeling, operations training, and business acquisition brokerage.');

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the CLNZYN™ Hospitality Ecosystem?",
      a: "The CLNZYN™ Ecosystem is a unified business network that supports motel and hotel operators across all operational layers. We manufacture and supply guest room amenities direct from India, coordinate commercial property remodeling and furniture upgrades, install smart security locks and cameras, place revenue-generating vending machines, train housekeeping teams, and broker business sales. Instead of dealing with twenty different vendors, you work with one integrated partner."
    },
    {
      q: "How does the factory-direct supply program save money?",
      a: "By owning our manufacturing connections in India, we cut out domestic wholesale brokers and distributors. We ship soaps, shampoo, custom-branded guest kits, towels, and linens directly to USA localized warehouses. This supply chain control allows us to offer bulk pricing that is 20% to 35% lower than traditional hospitality distributors."
    },
    {
      q: "Can you remodel my motel while it is still operating?",
      a: "Yes. We specialize in phased commercial renovations. We remodel guest rooms in small blocks (e.g., 5 to 10 rooms at a time) during your lowest occupancy periods. This ensures your property continues to generate daily booking revenue and front desk operations run smoothly without loud construction interruptions near checked-in guests."
    },
    {
      q: "How does the Vending & Extra Revenue program work?",
      a: "We offer two models. In our full-service revenue-sharing model, we deliver, install, stock, and maintain smart beverage and snack vending machines at your property for free, paying you a percentage of monthly sales. In our owner-operated model, you purchase the machines from us at wholesale, and we supply the products and software telemetry so you keep 100% of the profits."
    },
    {
      q: "What properties do you support under the Global Business Service™?",
      a: "We focus on mid-scale hospitality assets and adjacent commercial businesses. This includes independent motels, branded hotels, gas stations with convenience stores, standalone laundromats, highway restaurants, and beer/liquor retail stores. We help operators buy, optimize operations, and eventually package these properties as high-value ecosystems for exit."
    }
  ];

  return (
    <Shell>
      {/* Hero Section */}
      <section className="page-wrap page-intro" style={{ minHeight: '80vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Welcome to CLNZYN™</p>
          <h1 className="display-xl" style={{ lineHeight: 1.1 }}>
            THE MOTEL <span className="coral">ECOSYSTEM.</span>
          </h1>
          <p className="body-lg" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            We help hospitality operators buy motels, upgrade rooms, supply guest amenities, secure properties, automate vending revenue, and train operations staff. One partner, absolute growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="button-primary">
              Discuss Your Property <ArrowDownRight size={16} />
            </Link>
            <a href="#solutions" className="button-secondary">
              Explore Our Solutions
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2} type="slide-left">
            <img src={`${import.meta.env.BASE_URL}images/build-better.jpg`} alt="CLNZYN Hospitality Ecosystem" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </Reveal>
      </section>

      {/* Motel 360 Promo Video */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '4vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Motel 360 Overview</p>
              <h2 className="display-md" style={{ marginTop: '1rem', color: 'hsl(var(--foreground))' }}>The complete motel ownership ecosystem.</h2>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.15rem', lineHeight: 1.6, marginTop: '1.5rem', marginBottom: '2rem' }}>
                See how CLNZYN™ supports motel owners across the USA and Canada with premium amenities, bulk supplies, remodeling services, and business growth strategies in our Motel 360 program.
              </p>
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
              <video 
                src={`${import.meta.env.BASE_URL}images/motel-360-promo.mp4`} 
                controls 
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '70vh', objectFit: 'contain', backgroundColor: 'var(--card)' }} 
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Ecosystem Infographic Section */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div className="swap-order-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Sticky Left: Infographic */}
          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/ecosystem.jpg`} alt="Complete Motel Business Partner" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* Scrolling Right: Extracted Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>The Bigger Vision</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Your Complete Motel Business Partner.</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                CLNZYN™ provides a complete ecosystem of hospitality products, property solutions, operational support, and business growth services for motel and hotel owners across the USA.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "01. Guest Amenities & Linens", desc: "Soap, Shampoo, Body Wash, Lotion, Dental Kits, Bed Sheets, Pillows, Towels, Guest Supplies." },
                { title: "02. Cleaning & Housekeeping", desc: "Janitorial Supplies, Paper Products, Laundry Supplies, Disinfectants, Housekeeping Equipment." },
                { title: "03. Security & Technology", desc: "Security Cameras, Smart Door Locks, Access Systems, Property Security, LED Lighting." },
                { title: "04. Revenue Solutions", desc: "Snack & Beverage Vending, Coffee Stations, Guest Convenience Solutions." },
                { title: "05. Furniture & Property Upgrades", desc: "Room Furniture, Beds, Mattresses, Lobby Furniture, Fixtures, Decor, LED Lighting." },
                { title: "06. Design & Remodeling", desc: "Architecture, Interior Design, Room Renovation, Bathroom Remodeling, Exterior Upgrades, Construction Coordination." },
                { title: "07. Property Services", desc: "Handyman, Repairs, Maintenance, Plumbing, Electrical Fixtures, Preventive Maintenance." },
                { title: "08. Operations & Training", desc: "Staff Training, Housekeeping SOPs, Guest Service, Inventory, Cash Controls, Security Procedures." },
                { title: "09. Restaurant & Food Solutions", desc: "Restaurant Concepts, Menu Development, Kitchen Planning, Food Programs, Coffee & Beverage Programs." },
                { title: "10. Buy • Sell • Build • Grow", desc: "Motel, Hotel, C-Store, Gas Station, Laundromat, Restaurant, Beer & Liquor Store, Multi-business Properties." }
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
      <section id="solutions" className="page-wrap section" style={{ paddingTop: '12vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow">Services Catalog</p>
            <p>Six operational pillars designed to scale your hospitality business.</p>
          </>
        </Reveal>
        
        <div className="solution-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', 
          gap: '2rem', 
          marginTop: '3rem'
        }}>
          {[
            { icon: Package, title: 'Room & Guest Amenities', link: '/amenities', desc: 'Factory-direct hotel soap, shampoo, customized welcome kits, bed linens, towels, and industrial cleaning supplies.' },
            { icon: Shield, title: 'Motel Security & Technology', link: '/security', desc: 'Commercial IP camera installations, cloud security feeds, smart door locks, keyless cards, and energy controls.' },
            { icon: TrendingUp, title: 'Vending & Extra Revenue', link: '/vending', desc: 'Cloud-connected snack and drink vending machine placements, lobby coffee stations, and revenue sharing agreements.' },
            { icon: LayoutGrid, title: 'Property Upgrades', link: '/property', desc: 'Guest room furniture packages, LED corridor updates, bathroom remodeling, and scheduled property maintenance.' },
            { icon: HandPlatter, title: 'Staff Training & Food Business', link: '/operations', desc: 'Housekeeping standard operating procedures (SOPs), front desk scripts, kitchen layout, and menu consulting.' },
            { icon: Building2, title: 'Buy, Sell & Grow', link: '/business', desc: 'The Global Business Service™ to broker commercial properties, evaluate motel cash flows, and maximize exit multiples.' }
          ].map((feature, index) => (
            <Reveal key={feature.title} delay={0.03 * index} type="scale">
              <Link href={feature.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{ 
                  padding: '2.5rem', 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))', 
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-sm)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                className="bento-card-interactive"
                >
                  <div style={{ display: 'inline-flex', padding: '12px', backgroundColor: 'rgba(16,185,129,0.05)', borderRadius: '12px', color: 'hsl(var(--accent))', width: 'fit-content' }}>
                    <feature.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem', color: 'hsl(var(--foreground))' }}>{feature.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, flex: 1 }}>{feature.desc}</p>
                  <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--accent))', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Explore Solution <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Amenities Catalog Showcase */}
      <section className="page-wrap section" style={{ paddingTop: '12vh', paddingBottom: '4vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Wholesale Catalog</p>
              <h2 className="display-md" style={{ marginTop: '0.5rem' }}>Direct Factory Pricing on Motel Amenities & Linens.</h2>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.15rem', lineHeight: 1.7, marginTop: '1.5rem' }}>
                Our wholesale catalog includes premium bed & bath linens, luxury guest amenities (soaps, shampoos, lotions, dental kits), and essential paper disposables. We supply independent motels with high-quality, eco-friendly products at reliable factory-direct pricing to elevate the guest experience and improve your bottom line.
              </p>
              <div style={{ marginTop: '2rem' }}>
                 <Link href="/amenities" className="button-primary" style={{ display: 'inline-flex', width: 'auto' }}>View Full Amenities Program <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} type="scale">
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)', backgroundColor: 'var(--card)' }}>
              <img src={`${import.meta.env.BASE_URL}images/amenities-catalog.jpeg`} alt="Motel Amenities and Linen Catalog" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </Reveal>

        </div>
      </section>

      {/* Case Study Section (SEO Content Boost) */}
      <section className="page-wrap section" style={{ paddingTop: '12vh' }}>
        <div className="swap-order-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          <Reveal type="slide-right">
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
              <img src={`${import.meta.env.BASE_URL}images/remodeling.jpg`} alt="Motel Revenue Case Study" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Ecosystem In Action</p>
              <h2 className="display-md" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Case Study: The Multi-Business Multiplier</h2>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: '1.2rem', fontSize: '1.05rem' }}>
                We partnered with a 45-room independent motel in Texas operating a adjacent convenience store and empty diner space. Over 18 months, CLNZYN™ integrated three key ecosystem adjustments:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'hsl(var(--accent))', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'hsl(var(--foreground))' }}>35% Supply Cost Reduction:</strong> Moved toiletries, sheets, towels, and housekeeping consumables to our factory-direct India pipeline.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'hsl(var(--accent))', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'hsl(var(--foreground))' }}>$2,800/Month Passive Income:</strong> Placed smart vending machines in corridors and launched a premium coffee kiosk in the lobby.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'hsl(var(--accent))', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'hsl(var(--foreground))' }}>22% ADR Increase:</strong> Remodeled bathrooms with modern showers and updated standard room lighting.
                  </div>
                </li>
              </ul>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, fontSize: '1.05rem' }}>
                The combined adjustments increased the net operating income (NOI) by 41%, command higher booking rates, and increased the commercial asset valuation of the property by over $480,000.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive FAQ Section (SEO Long Content Boost) */}
      <section className="page-wrap section" style={{ paddingTop: '12vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><HelpCircle size={18} /> Frequently Asked Questions</p>
            <p>Answers to common questions about supplies, pricing, security, and acquisitions.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '3rem', width: '100%' }}>
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={0.05 * i}>
              <div 
                style={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))', 
                  borderRadius: '16px', 
                  padding: '1.5rem 2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'hsl(var(--foreground))', margin: 0 }}>{faq.q}</h3>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      color: 'hsl(var(--muted-foreground))', 
                      transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0)', 
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }} 
                  />
                </div>
                {activeFaq === i && (
                  <div style={{ marginTop: '1.2rem', paddingBottom: '0.8rem', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '1.2rem' }}>
                    <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.98rem', margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="page-wrap section" style={{ padding: '12vh 0', borderTop: '1px solid hsl(var(--border))' }}>
        <Reveal type="scale">
          <div className="paper-panel" style={{ 
            padding: 'clamp(30px, 5vw, 60px)', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
            gap: '3rem', 
            alignItems: 'center', 
            backgroundColor: 'hsl(var(--card))', 
            borderRadius: '24px', 
            border: '1px solid hsl(var(--border))',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))', fontWeight: 600 }}>THE CLNZYN™ VISION</p>
              <h2 className="display-md" style={{ marginTop: '1.5rem', color: 'hsl(var(--foreground))' }}>Don't just own the motel.<br/>Build the ecosystem around it.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: 'hsl(var(--muted-foreground))' }}>
                <strong style={{ color: 'hsl(var(--foreground))' }}>Manufacturing 🇮🇳 → CLNZYN™ Hospitality Products 📦 → USA Motel & Hotel Operators 🇺🇸</strong><br/><br/>
                Rooms + Amenities + Security + Furniture<br/>
                Food + Vending + C-Store + Gas + Laundromat<br/>
                Operations + Training + Remodeling<br/><br/>
                <strong style={{ color: 'hsl(var(--accent))' }}>RECURRING BUSINESS + MULTIPLE REVENUE STREAMS</strong>
              </p>
              <Link href="/contact" className="button-primary" style={{ width: 'fit-content' }}>
                Let's Build It <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
