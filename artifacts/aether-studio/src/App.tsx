import { type ReactNode, useEffect, useState, type CSSProperties } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import Amenities from '@/pages/amenities';
import Security from '@/pages/security';
import Vending from '@/pages/vending';
import Property from '@/pages/property';
import Operations from '@/pages/operations';
import Business from '@/pages/business';
import Contact from '@/pages/contact';

const queryClient = new QueryClient();

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/security', label: 'Security' },
  { href: '/vending', label: 'Vending' },
  { href: '/property', label: 'Property' },
  { href: '/operations', label: 'Operations' },
  { href: '/business', label: 'Business' },
  { href: '/contact', label: 'Contact' },
];

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — CLNZYN™`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);
}

export function Reveal({ 
  children, 
  delay = 0, 
  className = '', 
  style, 
  type = 'slide-up', 
  duration = 0.8 
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
  style?: CSSProperties; 
  type?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade' | 'scale'; 
  duration?: number; 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '0px 0px' });
  
  const variants = {
    'slide-up': { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } },
    'slide-down': { initial: { opacity: 0, y: -32 }, animate: { opacity: 1, y: 0 } },
    'slide-left': { initial: { opacity: 0, x: 32 }, animate: { opacity: 1, x: 0 } },
    'slide-right': { initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 } },
    'fade': { initial: { opacity: 0 }, animate: { opacity: 1 } },
    'scale': { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } }
  };

  const selected = variants[type] || variants['slide-up'];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={selected.initial}
      animate={inView ? selected.animate : selected.initial}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', style, delay = 0 }: { children: ReactNode, className?: string, style?: CSSProperties, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '0px 0px' });
  const variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: delay } }
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "show" : "hidden"} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', style }: { children: ReactNode, className?: string, style?: CSSProperties }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };
  return (
    <motion.div variants={variants} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function AnimatedIcon({ icon: Icon, delay = 0 }: { icon: any; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '0px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay + 0.1, type: 'spring', stiffness: 200, damping: 10 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      style={{ display: 'inline-flex', padding: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--primary))' }}
    >
      <Icon size={20} />
    </motion.div>
  );
}

function Brand() {
  return (
    <span className="brand-mark" data-testid="brand-clnzyn">
      <span className="brand-name" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="CLNZYN Logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
        CLNZYN™
      </span>
    </span>
  );
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" data-testid="link-home">
        <Brand />
      </Link>
      
      <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`nav-link ${location === item.href ? 'active' : ''}`}
            onClick={() => setOpen(false)}
            data-testid={`link-nav-${item.label.toLowerCase()}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        data-testid="button-menu"
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>
    </header>
  );
}

function Footer() {
  return (
    <>
      <div className="marquee-word" aria-hidden="true" style={{ marginTop: '5vh', borderTop: '1px solid hsl(var(--border))' }}>
        <div>CLNZYN / GLOBAL BUSINESS SERVICE /</div>
      </div>
      <footer className="page-wrap" style={{ padding: '8vh 0 4vh', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2.5rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <Brand />
            <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '280px' }}>
              More than motel amenities. Your complete motel business partner. From buying a motel to running it.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Ecosystem</h4>
            <Link href="/amenities" className="footer-link">Amenities & Supply</Link>
            <Link href="/security" className="footer-link">Security & Tech</Link>
            <Link href="/vending" className="footer-link">Vending Revenue</Link>
            <Link href="/property" className="footer-link">Property Upgrades</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Business Services</h4>
            <Link href="/operations" className="footer-link">Staff Operations</Link>
            <Link href="/business" className="footer-link">Buy, Sell, Grow</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
          </div>

        </div>

        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid hsl(var(--border))', paddingTop: '2rem', fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>
          <span>© {new Date().getFullYear()} CLNZYN™ Hospitality Ecosystem</span>
          <a href="mailto:Oneworldtrade360@gmail.com" data-testid="link-footer-email" className="footer-link">Oneworldtrade360@gmail.com</a>
        </div>
      </footer>
    </>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <div className="glow-blob-1" />
      <div className="glow-blob-2" />
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      <Footer />
      <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" data-testid="button-back-to-top">
        <ArrowUpRight size={17} />
      </button>
    </div>
  );
}

function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3500);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="loader" 
      style={{ 
        backgroundImage: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.06) 0%, transparent 70%)'
      }}
      initial={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Rotating Conic Gradient Outer Box */}
      <div className="loader-box-glow">
        {/* Inner Box with Frosted Card styling */}
        <div className="loader-box-inner">
          {/* Logo with scaling breathing pulse and deep drop shadow */}
          <motion.div
            animate={{ 
              scale: [0.96, 1.04, 0.96],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut", 
              repeat: Infinity
            }}
          >
            <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="CLNZYN Logo" style={{ width: '135px', height: '135px', borderRadius: '16px', display: 'block' }} />
          </motion.div>
          
          {/* Sleek bottom loader bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '6px', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
            <motion.div 
              style={{ height: '100%', backgroundColor: 'hsl(var(--accent))', transformOrigin: 'left' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ textAlign: 'center', marginTop: '28px' }}
      >
        <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.12em', color: 'hsl(var(--foreground))', marginBottom: '6px', fontFamily: 'var(--app-font-display)' }}>CLNZYN™</div>
        <div style={{ fontSize: '11px', color: 'hsl(var(--muted-foreground))', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Hospitality Ecosystem</div>
      </motion.div>
    </motion.div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [location]);
  return <ErrorBoundary resetKey={location}><motion.div key={location} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>{children}</motion.div></ErrorBoundary>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/amenities" component={Amenities} />
        <Route path="/security" component={Security} />
        <Route path="/vending" component={Vending} />
        <Route path="/property" component={Property} />
        <Route path="/operations" component={Operations} />
        <Route path="/business" component={Business} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const finishLoading = () => {
    setLoading(false);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
          {loading ? <Loader onComplete={finishLoading} /> : null}
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;