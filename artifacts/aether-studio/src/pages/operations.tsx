import { BookOpen, Utensils, ArrowDownRight, Users, ClipboardCheck, DollarSign, Package, Lightbulb, Coffee, CupSoda, Percent, Link as LinkIcon } from 'lucide-react';
import { Shell, Reveal, usePageMeta, AnimatedIcon } from '@/App';
import { Link } from 'wouter';

export default function Operations() {
  usePageMeta('Hospitality Operations SOPs & Hotel Staff Training', 'CLNZYN™ provides standard operating procedures, motel housekeeping checklists, front desk hospitality scripts, restaurant menu concept consulting, and supply chain logistics management.');
  
  const trainingPoints = [
    { icon: Users, title: 'Staff Training', desc: 'Comprehensive onboarding and ongoing training for front desk and operations staff.' },
    { icon: ClipboardCheck, title: 'Housekeeping SOPs', desc: 'Standard operating procedures to ensure consistent room quality.' },
    { icon: BookOpen, title: 'Guest Experience Training', desc: 'Teaching your team how to deliver 5-star service that drives repeat bookings.' },
    { icon: DollarSign, title: 'Cash & Revenue Controls', desc: 'Systems to secure transactions and prevent revenue leakage.' },
    { icon: Package, title: 'Inventory Management', desc: 'Track supplies, prevent shortages, and optimize your ordering cycle.' }
  ];

  const restaurantSupport = [
    { name: 'Restaurant Concept', icon: Lightbulb },
    { name: 'Menu Development', icon: ClipboardCheck },
    { name: 'Food Program', icon: Utensils },
    { name: 'Coffee Program', icon: Coffee },
    { name: 'Beverage Program', icon: CupSoda },
    { name: 'Kitchen Planning', icon: BookOpen },
    { name: 'Pricing & Margin Strategy', icon: Percent },
    { name: 'Food-Supply Connections', icon: LinkIcon }
  ];

  return (
    <Shell>
      <section className="page-wrap page-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <Reveal>
          <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>06 / Operations & Staff</p>
          <h1 className="display-lg">
            TRAIN THE <span className="coral">TEAM.</span>
          </h1>
          <p className="body-lg">
            A great property needs more than great rooms. We support operators with the systems, training, and standard operating procedures (SOPs) required to run a tight ship.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
            <img src="/images/img5.jpeg" alt="Motel Operations SOPs" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </Reveal>
      </section>

      {/* Staff Training Section */}
      <section className="page-wrap section" style={{ paddingTop: '5vh' }}>
        <Reveal className="section-header" type="slide-up">
          <>
            <p className="eyebrow"><AnimatedIcon icon={BookOpen} /> Staff Training & Operations</p>
            <p>Build the system. Train the team. Improve daily guest-service hospitality metrics.</p>
          </>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {trainingPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05} type="scale">
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
                  <point.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'hsl(var(--foreground))' }}>{point.title}</h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>{point.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Restaurant Support Section */}
      <section className="page-wrap section" style={{ paddingTop: '10vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <Reveal className="section-header" style={{ marginBottom: '2rem' }} type="slide-up">
              <>
                <p className="eyebrow"><AnimatedIcon icon={Utensils} /> Restaurant & Food Support</p>
                <p>If your motel has a restaurant, kitchen or unused food space, we can help develop coffee, kitchen, and menu opportunities.</p>
              </>
            </Reveal>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
              {restaurantSupport.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.03} type="scale">
                  <div className="feature-card">
                    <AnimatedIcon icon={item.icon} delay={index * 0.03} />
                    <strong>{item.name}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2} type="slide-right">
            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)' }}>
              <img src="/images/img6.jpeg" alt="Motel Restaurant Menu Planning" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </Reveal>
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
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
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
          <div className="paper-panel" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
            <div>
              <p className="eyebrow" style={{ color: 'hsl(var(--accent))' }}>Food & Beverage</p>
              <h2 className="display-md" style={{ marginTop: '1rem', color: 'hsl(var(--foreground))' }}>Empty kitchen?<br/>Let's turn space into revenue.</h2>
            </div>
            <div>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Don't let valuable kitchen space go to waste. We help you conceptualize, supply, and launch food operations that complement your property and drive profit.
              </p>
              <Link href="/contact" className="button-primary">
                Discuss Food Opportunities <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
