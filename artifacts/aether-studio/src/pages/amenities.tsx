import { ArrowDownRight, Droplets, ShowerHead, Smile, CheckSquare, Sparkles, CupSoda, Coffee, Box, Gift, BedDouble, Paperclip } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon, StaggerContainer, StaggerItem } from '@/App';
import { Link } from 'wouter';

export default function Amenities() {
  usePageMeta('Wholesale Motel Amenities & Housekeeping Cleaning Supplies', 'CLNZYN™ provides complete guest-room supply programs, factory-direct hotel soap, linens, towels, and bulk cleaning products for hospitality operators.');
  
  return (
    <Shell>
      {/* Intro Section */}
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center', minHeight: '60vh' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>02 / Room & Guest Amenities</p>
          <h1 className="display-lg">
            STOCK <span className="coral">WELL.</span>
          </h1>
          <p className="body-lg">
            Complete guest-room supply programs built for the reality of high turnover. We provide everything from everyday consumables to premium welcome kits, ensuring your rooms are always guest-ready.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="button-primary">
              Request Supply Catalog <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/supply-edge.jpg`} alt="Wholesale Motel Amenities" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Guest Amenities Split-Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>The CLNZYN™ Supply Edge</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Perfect Guest Experience.</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Every detail matters. Premium guest supplies, quality linens, and cleaning solutions—delivered with care.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Soap", desc: "Gentle, refreshing soaps in individual wraps and bulk sizes." },
                { title: "Shampoo & Conditioner", desc: "Nourishing formulas in travel sizes or bulk refill options." },
                { title: "Body Wash & Lotion", desc: "Invigorating body washes and moisturizing lotions to keep guests feeling pampered." },
                { title: "Dental & Shaving Kits", desc: "Complete dental care kits and essential shaving kits for a comfortable stay." },
                { title: "Shower Caps & Combs", desc: "Hygienic, individually packed shower caps and high-quality combs." },
                { title: "More Guest Supplies", desc: "Toilet tissue, facial tissue, coffee & tea kits, beverage accessories, guest slippers, and bathroom essentials." }
              ].map((item, i) => (
                <StaggerItem key={i} style={{ padding: '2rem', backgroundColor: 'hsl(var(--card))', borderRadius: '16px', border: '1px solid hsl(var(--border))', marginBottom: '1.5rem' }} className="bento-card-interactive">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/supply-edge.jpg`} alt="Guest Room Amenities" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          
        </div>
      </section>

      {/* Linen Partner Split-Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/hotel-linen.jpg`} alt="Hotel Linen Partner" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>CLNZYN Hotel Linen</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Your Linen Partner</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Established with a vision to deliver premium quality linens to the hospitality industry with unmatched reliability and at affordable costs. Rooted in a legacy of trust spanning more than 25 years.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Bed Linen", desc: "Bed Sheets (Plain & Stripe), Pillow Covers (Plain & Stripe), Duvet Covers." },
                { title: "Bath Linen", desc: "Bath Towels, Hand Towels, Face Towels, Pool Towels, Bath Sheets, Bath Mats, Bath Robes, Spa Towels." },
                { title: "Accessories", desc: "Duvets, Blankets, Mattress Toppers, Pillow Protectors (Terry), Pillows (HSD & Micro Fiber), Mattress Protectors." }
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

      {/* Bulk Supply Trust Section */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>The CLNZYN Supply Edge</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Why operators trust us for bulk supplies.</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                We are your trusted partner for bulk supplies and cost-saving solutions, delivering premium quality on time.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Factory-Direct Wholesale Pricing", desc: "We bypass distributors by working directly with ISO-certified manufacturers. This allows owners to save up to 35% on room consumables without sacrificing quality." },
                { title: "Custom Branding & Design", desc: "Build guest loyalty by personalizing soap wrappers, shampoo bottles, and keycard sleeves with your property's logo. Our dedicated design team coordinates packaging artwork." },
                { title: "Reliable Inventory Replenishment", desc: "Never run out of essential items. With efficient supply chain management, real-time tracking, and localized warehousing, we deliver right before you run low." }
              ].map((item, i) => (
                <StaggerItem key={i} style={{ padding: '2rem', backgroundColor: 'hsl(var(--card))', borderRadius: '16px', border: '1px solid hsl(var(--border))', marginBottom: '1.5rem' }} className="bento-card-interactive">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/bulk-supply.jpg`} alt="Bulk Supply Solutions" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem', alignItems: 'center', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h2 className="display-md" style={{ marginBottom: '1.5rem', color: 'hsl(var(--foreground))' }}>Ready to upgrade your supplies?</h2>
              <p style={{ maxWidth: '600px', marginBottom: '2rem', color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem' }}>
                Let's build a customized supply program that fits your property's specific needs and budget.
              </p>
              <Link href="/contact" className="button-primary">
                Contact our supply team <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
