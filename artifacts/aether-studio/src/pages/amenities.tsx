import { BedDouble, Boxes, ArrowDownRight, Droplets, ShowerHead, Smile, CheckSquare, Sparkles, CupSoda, Coffee, Box, Gift, Search, Paperclip } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon } from '@/App';
import { Link } from 'wouter';

export default function Amenities() {
  usePageMeta('Wholesale Motel Amenities & Housekeeping Cleaning Supplies', 'CLNZYN™ provides complete guest-room supply programs, factory-direct hotel soap, linens, towels, and bulk cleaning products for hospitality operators.');
  
  const guestAmenities = [
    { name: 'Soap', icon: Droplets },
    { name: 'Shampoo & Conditioner', icon: ShowerHead },
    { name: 'Body Wash', icon: Droplets },
    { name: 'Lotion', icon: Sparkles },
    { name: 'Dental Kits', icon: Smile },
    { name: 'Shaving Kits', icon: CheckSquare },
    { name: 'Shower Caps', icon: ShowerHead },
    { name: 'Combs', icon: Sparkles },
    { name: 'Toilet Tissue', icon: Paperclip },
    { name: 'Facial Tissue', icon: Box },
    { name: 'Coffee & Tea Kits', icon: Coffee },
    { name: 'Beverage Accessories', icon: CupSoda },
    { name: 'Bed Sheets & Linens', icon: BedDouble },
    { name: 'Pillows', icon: BedDouble },
    { name: 'Mattress & Bedding Solutions', icon: BedDouble },
    { name: 'Guest Slippers', icon: Box },
    { name: 'Bathroom Essentials', icon: ShowerHead },
    { name: 'Guest Welcome Kits', icon: Gift }
  ];

  const cleaningSupplies = [
    { name: 'Cleaning Supplies', icon: Sparkles },
    { name: 'Disinfectants', icon: Droplets },
    { name: 'Housekeeping Equipment', icon: Boxes },
    { name: 'Trash Bags', icon: Box },
    { name: 'Laundry Supplies', icon: Sparkles },
    { name: 'Paper Products', icon: Paperclip },
    { name: 'Bathroom Cleaning Products', icon: ShowerHead },
    { name: 'Janitorial Supplies', icon: CheckSquare },
    { name: 'Housekeeping Consumables', icon: Box }
  ];

  return (
    <Shell>
      {/* Intro Section */}
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>02 / Room & Guest Amenities</p>
          <h1 className="display-lg">
            STOCK <span className="coral">WELL.</span>
          </h1>
          <p className="body-lg">
            Complete guest-room supply programs built for the reality of high turnover. We provide everything from everyday consumables to premium welcome kits, ensuring your rooms are always guest-ready.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/img1.jpeg`} alt="Wholesale Motel Amenities" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Guest Amenities Grid */}
      <section className="page-wrap section" style={{ paddingTop: '5vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow">
              <AnimatedIcon icon={BedDouble} /> Room & Guest Amenities
            </p>
            <p>Every detail matters when creating the perfect guest experience.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {guestAmenities.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.03} type="scale">
              <div className="feature-card">
                <AnimatedIcon icon={item.icon} delay={index * 0.03} />
                <strong>{item.name}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cleaning Supplies Grid */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow">
              <AnimatedIcon icon={Boxes} /> Cleaning & Housekeeping
            </p>
            <p>Keep your property guest-ready and operating efficiently with industrial cleaning products.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {cleaningSupplies.map((item, index) => (
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
            <p className="eyebrow"><AnimatedIcon icon={Sparkles} /> The CLNZYN™ Supply Edge</p>
            <p>Why hospitality operators trust us for bulk guest supplies, soap, linens, and cleaning solutions.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <Reveal type="scale" delay={0.1}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Factory-Direct Wholesale Pricing</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                We bypass distributors by working directly with ISO-certified manufacturers in India. This allows motel owners to save up to 35% on essential room consumables, linens, and cleaning solutions without sacrificing quality.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.2}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Custom Branding & Design</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Build guest loyalty by personalizing soap wrappers, shampoo bottles, and keycard sleeves with your property's logo. Our dedicated design team coordinates packaging artwork to align with your brand standards.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.3}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Reliable Inventory Replenishment</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Never run short of essential items. We offer scheduled replenishment cycles, auto-shipping, and localized warehousing options to ensure that guest supplies are delivered right before you run low.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="page-wrap section" style={{ paddingBottom: '10vh', paddingTop: '10vh' }}>
        <Reveal>
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h2 className="display-md" style={{ marginBottom: '1.5rem', color: 'hsl(var(--foreground))' }}>Ready to upgrade your supplies?</h2>
              <p style={{ maxWidth: '600px', marginBottom: '2rem', color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem' }}>
                Let's build a customized supply program that fits your property's specific needs and budget.
              </p>
              <Link href="/contact" className="button-primary">
                Contact our supply team <ArrowDownRight size={16} />
              </Link>
            </div>
            <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
              <img src={`${import.meta.env.BASE_URL}images/img2.jpeg`} alt="Motel Cleaning Supplies" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
