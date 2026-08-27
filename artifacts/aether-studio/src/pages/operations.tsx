import { ArrowDownRight, BookOpen, Utensils, Users, ClipboardCheck, DollarSign, Package, Lightbulb, Coffee, CupSoda, Percent, Link as LinkIcon } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon, StaggerContainer, StaggerItem } from '@/App';
import { Link } from 'wouter';

export default function Operations() {
  usePageMeta('Hospitality Operations SOPs & Hotel Staff Training', 'CLNZYN™ provides standard operating procedures, motel housekeeping checklists, front desk hospitality scripts, restaurant menu concept consulting, and supply chain logistics management.');
  
  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center', minHeight: '60vh' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>06 / Operations & Staff</p>
          <h1 className="display-lg">
            TRAIN THE <span className="coral">TEAM.</span>
          </h1>
          <p className="body-lg">
            A great property needs more than great rooms. We support operators with the systems, training, and standard operating procedures (SOPs) required to run a tight ship.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="button-primary">
              Discuss Operations Support <ArrowDownRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src={`${import.meta.env.BASE_URL}images/build-better.jpg`} alt="Motel Operations SOPs" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Operations Split Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/build-better.jpg`} alt="Build Better, Operate Smarter" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Build Better. Operate Smarter.</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Staff Training & Operations</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Build the system. Train the team. Improve daily guest-service hospitality metrics.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Staff Training", desc: "Comprehensive onboarding and ongoing training for front desk and operations staff." },
                { title: "Housekeeping SOPs", desc: "Standard operating procedures to ensure consistent room quality." },
                { title: "Guest Experience Training", desc: "Teaching your team how to deliver 5-star service that drives repeat bookings." },
                { title: "Cash & Revenue Controls", desc: "Systems to secure transactions and prevent revenue leakage." },
                { title: "Inventory Management", desc: "Track supplies, prevent shortages, and optimize your ordering cycle." }
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

      {/* F&B Split Screen */}
      <section className="page-wrap section" style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Food & Beverage Solutions</p>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>Profitable F&B experiences.</h2>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginTop: '1.5rem' }}>
                If your motel has a restaurant, kitchen or unused food space, we can help develop coffee, kitchen, and menu opportunities. From concept to execution.
              </p>
            </Reveal>

            <StaggerContainer>
              {[
                { title: "Restaurant Concept", desc: "Unique restaurant concepts designed to match your property positioning and guest preferences." },
                { title: "Menu Development", desc: "Creative, cost-effective menus crafted to delight guests and maximize profitability." },
                { title: "Food Program", desc: "Complete food programs with recipes, portion control, and operational guidelines." },
                { title: "Coffee Program", desc: "End-to-end coffee solutions including equipment, beans, training, and service standards." },
                { title: "Beverage Program", desc: "Curated beverage menus and supplier partnerships to drive higher margins." },
                { title: "Kitchen Planning", desc: "Smart kitchen layouts and workflow planning for efficiency and food safety." },
                { title: "Pricing & Margin Strategy", desc: "Data-driven pricing models to improve margins and control costs." },
                { title: "Food-Supply Connections", desc: "Reliable supplier network for quality ingredients at competitive prices." }
              ].map((item, i) => (
                <StaggerItem key={i} style={{ padding: '2rem', backgroundColor: 'hsl(var(--card))', borderRadius: '16px', border: '1px solid hsl(var(--border))', marginBottom: '1.5rem' }} className="bento-card-interactive">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div style={{ position: 'sticky', top: '10vh', borderRadius: '24px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
            <img src={`${import.meta.env.BASE_URL}images/fnb-solutions.jpg`} alt="Food and Beverage Solutions" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          
        </div>
      </section>

      {/* Value Proposition Section (SEO Content Boost) */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={Users} /> Training Outcomes</p>
            <p>Streamlining daily hotel operations to eliminate overhead waste and ensure positive reviews.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <Reveal type="scale" delay={0.1}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Standardized Cleaning Efficiency</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Housekeeping SOPs define clear checklists for room turnarounds. Standard training reduces room cleaning times by an average of 8 minutes while improving sanitation scores, allowing faster check-ins.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.2}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Guest Review & Rating Uplift</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Consistent check-in scripts and standardized customer service guidelines reduce negative guest encounters. Operators see an immediate uptick in positive TripAdvisor and Google reviews, boosting organic search visibility.
              </p>
            </div>
          </Reveal>
          <Reveal type="scale" delay={0.3}>
            <div className="paper-panel" style={{ padding: '2rem', height: '100%', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Pantry Supply Optimization</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Inventory systems prevent both product stockouts and expensive over-ordering. Housekeeping managers track monthly supply sheets to discover and stop waste or internal leakage, keeping budgets tight.
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
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Get Started</p>
              <h2 className="display-md" style={{ marginTop: '1rem', color: 'hsl(var(--foreground))' }}>Ready to operate smarter?</h2>
            </div>
            <div>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Let's develop standard operating procedures and a menu program that sets your property apart.
              </p>
              <Link href="/contact" className="button-primary">
                Contact Our Team <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
