import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  FileText,
  Users,
  Workflow,
  Languages,
  MapPin,
  RefreshCw,
  Download,
  FolderTree,
  History,
  MessageSquare,
  TrendingUp,
  Mail,
  Calendar,
  Webhook,
  Zap,
  Heart,
  ScalingIcon,
  BarChart3,
  ShieldCheck,
  Linkedin,
  ArrowRight,
  Check,
  Plane,
  Globe2,
  Map,
} from 'lucide-react';

// Figma assets — exported from node 40:4191 of the Zarah-AI-LLP file
import zarahLogo from '../../assets/zarah-logo.png';
import heroStar from '../../assets/hero-star.png';
import zarahTextStar from '../../assets/zarah-text-star.png';
import featuresPillStar from '../../assets/features-pill-star.png';
import worldMap from '../../assets/world-map.png';

/* ─────────────────────────────────────────────────────────────────────────────
   Strict 6-color palette from Figma — DO NOT introduce other colors
   ───────────────────────────────────────────────────────────────────────────── */
const C = {
  yellow: '#FFDE39',     // primary
  yellowSoft: '#FBEC5D', // secondary highlight
  yellowGlow: '#FFF690', // glow / soft outline
  gray: '#444342',       // secondary text on white, headings on white
  bgDarkSoft: '#2A2929', // borders, slightly lighter dark
  bgDark: '#1F1F1F',     // primary dark background
};

type FeatureGroup = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: { icon: React.ComponentType<{ className?: string }>; label: string }[];
};

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    icon: Sparkles,
    title: 'AI Itinerary Generator',
    description:
      'Zarah understands your travel requirements through natural conversation and generates complete, detailed itineraries in minutes.',
    bullets: [
      { icon: Languages, label: 'Natural language processing' },
      { icon: MapPin, label: 'Multi-destination planning' },
      { icon: RefreshCw, label: 'Real-time availability sync' },
      { icon: Download, label: 'Instant PDF export' },
    ],
  },
  {
    icon: FileText,
    title: 'Document Management',
    description:
      'Centralize all your travel documents — visas, tickets, confirmations — in one secure, organized place.',
    bullets: [
      { icon: FolderTree, label: 'Auto-categorization' },
      { icon: History, label: 'Version control' },
      { icon: ShieldCheck, label: 'Encrypted storage' },
    ],
  },
  {
    icon: Users,
    title: 'Client Management',
    description:
      'Manage all client relationships, communication history, and trip records in a unified dashboard.',
    bullets: [
      { icon: MessageSquare, label: 'Communication logs' },
      { icon: TrendingUp, label: 'Revenue tracking' },
      { icon: Heart, label: 'Loyalty insights' },
    ],
  },
  {
    icon: Workflow,
    title: 'Seamless Integration',
    description: 'Connect your favorite tools and automate your entire workflow.',
    bullets: [
      { icon: Mail, label: 'Email sync' },
      { icon: Calendar, label: 'Calendar sync' },
      { icon: Webhook, label: 'Custom webhooks' },
    ],
  },
];

const BENEFITS = [
  {
    icon: Zap,
    title: 'Faster Proposal Creation',
    description:
      'Create detailed itineraries in hours, not days. Win more business with faster turnarounds.',
  },
  {
    icon: Heart,
    title: 'Better Client Experience',
    description:
      'Provide personalized service with comprehensive travel management solutions.',
  },
  {
    icon: ScalingIcon,
    title: 'Scale Without Hiring',
    description:
      'Handle 10x more clients without proportionally increasing your team size.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Make smarter business decisions with real-time analytics and insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description:
      'Bank-level security ensures your client data and business information stay safe.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Header
   ───────────────────────────────────────────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#why', label: 'Why Zarah' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      style={
        scrolled
          ? { background: `${C.bgDark}d9`, borderColor: `${C.bgDarkSoft}` }
          : undefined
      }
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
        <a
          href="#home"
          className="flex items-center transition-transform hover:scale-[1.03]"
          aria-label="Zarah AI home"
        >
          <img src={zarahLogo} alt="Zarah AI" className="h-9 w-auto sm:h-10 lg:h-11" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium text-white/85 transition-colors hover:text-white"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: C.yellow }}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="text-[13px] font-medium text-white/75 transition-colors hover:text-white"
          >
            Login
          </a>
          <a
            href="#contact"
            className="nav-cta group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
            style={{
              background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellow} 100%)`,
              color: C.bgDark,
              boxShadow: `0 4px 16px ${C.yellow}55, inset 0 1px 0 #ffffff80`,
            }}
          >
            <Sparkles className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            <span
              aria-hidden
              className="nav-cta-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)',
              }}
            />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border text-white transition-colors hover:bg-white/5 md:hidden"
          style={{ borderColor: C.bgDarkSoft }}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: `${C.bgDark}f2`, borderColor: C.bgDarkSoft }}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-1 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
          >
            Login
          </a>
          <a
            href="#contact"
            onClick={close}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform active:scale-[0.97]"
            style={{
              background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellow} 100%)`,
              color: C.bgDark,
              boxShadow: `0 4px 14px ${C.yellow}40`,
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Get Started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>

      <style>{`
        .nav-cta-shine {
          animation: navShine 3.2s ease-in-out infinite;
        }
        @keyframes navShine {
          0%   { transform: translateX(0) skewX(-12deg); }
          60%  { transform: translateX(420%) skewX(-12deg); }
          100% { transform: translateX(420%) skewX(-12deg); }
        }
      `}</style>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────────────────────────────────────── */
function HeroBackground() {
  /* ───────────────────────────────────────────────────────────────────────────
     Travel-automation theme.
     - One faded world map silhouette (subtle, suggests global reach)
     - Curved meridian arcs instead of a square grid (navigation feel)
     - One flight route, with a plane that picks up automated destinations
     - Radar sweep originating from the route's origin (the "automation")
     - Quiet, breathable, focused on the hero copy
     ─────────────────────────────────────────────────────────────────────── */
  return (
    <>
      {/* Base mesh — soft, calm */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 80% 30%, ${C.yellowSoft}12 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 15% 85%, ${C.yellowGlow}0e 0%, transparent 65%),
            linear-gradient(180deg, ${C.bgDark} 0%, ${C.bgDark} 60%, #252525 100%)
          `,
        }}
      />

      {/* World map covers the whole Hero — fills top-to-bottom behind the content + star */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={worldMap}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
          style={{
            opacity: 0.1,
            filter: 'invert(1) brightness(2) contrast(1.1)',
          }}
        />
      </div>

      {/* Travel theme — dashed flight paths + pulsing destination pins */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M 8 22 Q 50 8 92 26"
            fill="none"
            stroke={C.yellowGlow}
            strokeOpacity="0.3"
            strokeDasharray="0.5 1.2"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 4 58 Q 50 46 96 62"
            fill="none"
            stroke={C.yellowGlow}
            strokeOpacity="0.25"
            strokeDasharray="0.5 1.2"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 10 82 Q 50 94 90 78"
            fill="none"
            stroke={C.yellowGlow}
            strokeOpacity="0.2"
            strokeDasharray="0.5 1.2"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {[
          { left: '8%', top: '22%' },
          { left: '92%', top: '26%' },
          { left: '4%', top: '58%' },
          { left: '96%', top: '62%' },
          { left: '10%', top: '82%' },
          { left: '90%', top: '78%' },
        ].map((pos, i) => (
          <span
            key={i}
            className="hero-route-pin absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
              background: `${C.yellowGlow}66`,
              boxShadow: `0 0 24px ${C.yellowGlow}55, 0 0 48px ${C.yellowGlow}33`,
              filter: 'blur(22px)',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* A handful of quiet twinkling stars */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {[
          { x: 12, y: 18, d: 3.2 },
          { x: 86, y: 12, d: 4   },
          { x: 22, y: 78, d: 3.6 },
          { x: 8,  y: 50, d: 3   },
          { x: 60, y: 8,  d: 4.4 },
          { x: 48, y: 92, d: 3.4 },
        ].map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="0.1" fill="#ffffff" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.08;0.4" dur={`${s.d}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {/* Strong vignette → keeps focus on hero copy and main star */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 50% 55%, transparent 30%, ${C.bgDark}b3 75%, ${C.bgDark} 100%)`,
        }}
      />
    </>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden lg:flex lg:h-screen lg:items-center lg:pt-24"
      style={{ background: C.bgDark }}
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:items-center lg:gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* LEFT: copy — full viewport on mobile so the star sits below the fold */}
          <div className="relative flex min-h-screen flex-col items-center justify-center pt-24 text-center lg:block lg:min-h-0 lg:pt-0 lg:text-left">
            <div className="relative z-10 mx-auto w-full max-w-[340px] lg:max-w-none">
              <h1 className="text-[34px] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[56px]">
                <span className="inline-flex items-center gap-2 sm:gap-3">
                  Meet
                  <span
                    className="relative inline-flex items-center"
                    style={{
                      background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellowSoft} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Zarah
                    <img
                      src={zarahTextStar}
                      alt=""
                      aria-hidden
                      className="ml-1 inline-block h-5 w-5 sm:h-7 sm:w-7"
                    />
                  </span>
                </span>
                <br />
                Your AI Travel Partner
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base lg:mx-0">
                Transform the way you manage travel operations. Zarah combines AI-powered
                itinerary creation, intelligent cost prediction, and seamless document
                management — all in one platform.
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:py-3"
                  style={{
                    background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellowSoft} 100%)`,
                    color: C.bgDark,
                    boxShadow: `0 4px 18px ${C.yellowSoft}40`,
                  }}
                >
                  Start A Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: AI travel mission control composition — sits below the fold on mobile, side panel on lg+ */}
          <div className="pb-16 lg:pb-0">
            <HeroVisual />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes cardEntry {
          0%   { opacity: 0; transform: translateY(20px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes barFill {
          0%   { stroke-dasharray: 0 100; }
          50%  { stroke-dasharray: 100 100; }
          100% { stroke-dasharray: 0 100; }
        }
        @keyframes arcDraw {
          0%   { stroke-dashoffset: 200; opacity: 0; }
          15%  { opacity: 0.9; }
          70%  { stroke-dashoffset: 0; opacity: 0.9; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }
        .hero-route-pin {
          animation: heroPinPulse 3s ease-in-out infinite;
        }
        @keyframes heroPinPulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 0.6; transform: translate(-50%, -50%) scale(1.35); }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero Visual — AI Travel Mission Control
   - Center: hero star (the AI brain)
   - 3 rotating orbital rings with destination pins
   - Pulse waves emanating from center
   - Flickering arcs connecting destinations (drawn dynamically)
   - 3 floating "automation" cards (glassmorphic) showing AI activity
   ───────────────────────────────────────────────────────────────────────────── */
function HeroVisual() {
  // 3 destination pins on a single ring — minimal, intentional
  const pins = [
    { a: 30,  label: 'PAR' },
    { a: 150, label: 'NYC' },
    { a: 270, label: 'TYO' },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px] lg:max-w-[520px] xl:max-w-[560px]">
      {/* Soft aurora behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-15%] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.yellowGlow}1f 0%, ${C.yellowSoft}0d 35%, transparent 65%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Two slow pulse waves — minimal, breathing */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {[0, 3].map((d, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r="0"
            fill="none"
            stroke={C.yellowGlow}
            strokeWidth="1"
            strokeOpacity="0"
          >
            <animate attributeName="r" values="80;195" dur="6s" begin={`${d}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.5;0" dur="6s" begin={`${d}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {/* SINGLE orbital ring — slowly rotating, 3 destination pins */}
      <div
        className="absolute inset-0"
        style={{ animation: 'spinSlow 60s linear infinite' }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <circle
            cx="200" cy="200" r="185"
            fill="none"
            stroke={C.yellowGlow}
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
          {pins.map((p) => {
            const rad = (p.a * Math.PI) / 180;
            const x = 200 + Math.cos(rad) * 185;
            const y = 200 + Math.sin(rad) * 185;
            return (
              <g key={p.label}>
                <circle cx={x} cy={y} r="3" fill="none" stroke={C.yellowGlow} strokeOpacity="0.55">
                  <animate attributeName="r" values="3;10;3" dur="3s" begin={`${(p.a / 360) * 3}s`} repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.55;0;0.55" dur="3s" begin={`${(p.a / 360) * 3}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={x} cy={y} r="2.5" fill={C.yellowGlow} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Center hero star — dimmed so the glow behind reads as the focal point */}
      <div
        className="absolute inset-[26%] flex items-center justify-center"
        style={{ animation: 'float 6s ease-in-out infinite', opacity: 0.25 }}
      >
        <img
          src={heroStar}
          alt=""
          aria-hidden
          className="h-full w-full select-none"
          draggable={false}
        />
      </div>

      {/* 2 floating automation cards (desktop / tablet) */}
      <FloatingCards />

      {/* Mobile-only: industry containers around the motion graphic */}
      <MobileIndustryOrbit />
    </div>
  );
}

/* Helper: SVG arc path for animateMotion along a circle.
   Returns "M ... A ..." commands tracing an arc from startAngle to endAngle. */
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const polar = (a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  const start = polar(endAngle);
  const end = polar(startAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Floating glassmorphic cards — convey "automation in action"
   ───────────────────────────────────────────────────────────────────────────── */
function FloatingCards() {
  const cards = [
    {
      pos: 'top-[18%] -right-[8%] sm:-right-[4%] lg:-right-[12%] xl:-right-[14%]',
      delay: '0.2s',
      floatDelay: '0s',
      icon: '$',
      title: 'Cost optimized',
      sub: '12 hotels analyzed',
      meta: '−$340',
    },
    {
      pos: 'bottom-[12%] left-[2%] lg:-left-[6%] xl:-left-[10%]',
      delay: '0.7s',
      floatDelay: '1.2s',
      icon: '✓',
      title: 'Booking confirmed',
      sub: 'Marriott · 3 nights',
      meta: 'Live',
    },
  ];

  return (
    <>
      {cards.map((c) => (
        <div
          key={c.title}
          className={`pointer-events-none absolute z-10 ${c.pos} hidden sm:block`}
          style={{
            animation: `cardEntry 0.7s ${c.delay} cubic-bezier(0.2, 0.9, 0.3, 1.2) backwards, cardFloat 6s ${c.floatDelay} ease-in-out infinite`,
          }}
        >
          <div
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 backdrop-blur-md"
            style={{
              background: 'rgba(31,31,31,0.55)',
              border: `1px solid ${C.bgDarkSoft}`,
              boxShadow: `0 10px 30px -10px rgba(0,0,0,0.6), 0 0 20px ${C.yellowGlow}1a`,
              minWidth: 170,
            }}
          >
            {/* Icon */}
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
              style={{
                background: `${C.yellowGlow}1a`,
                color: C.yellowGlow,
                border: `1px solid ${C.yellowGlow}33`,
              }}
            >
              {c.icon}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold leading-tight text-white">
                  {c.title}
                </p>
                <span
                  className="text-[10px] font-medium leading-none"
                  style={{ color: C.yellowGlow }}
                >
                  {c.meta}
                </span>
              </div>
              <p className="mt-0.5 truncate text-[10px]" style={{ color: '#9a9a9a' }}>
                {c.sub}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Mobile-only industry orbit — small glassmorphic containers placed at the
   four corners of the hero motion graphic. Each container names a travel
   vertical Zarah serves and the one value it delivers there.
   ───────────────────────────────────────────────────────────────────────────── */
function MobileIndustryOrbit() {
  const items: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    pos: string;            // tailwind absolute position classes
    delay: string;
    floatDelay: string;
  }[] = [
    {
      icon: Plane,
      label: 'Agencies',
      value: 'AI itineraries',
      pos: 'top-2 left-2 origin-top-left',
      delay: '0.30s',
      floatDelay: '0s',
    },
    {
      icon: Globe2,
      label: 'DMCs',
      value: 'Vendor sync',
      pos: 'top-2 right-2 origin-top-right',
      delay: '0.50s',
      floatDelay: '0.6s',
    },
    {
      icon: Users,
      label: 'MICE',
      value: 'Group ops',
      pos: 'bottom-2 left-2 origin-bottom-left',
      delay: '0.70s',
      floatDelay: '1.2s',
    },
    {
      icon: Map,
      label: 'Tour Ops',
      value: 'Live inventory',
      pos: 'bottom-2 right-2 origin-bottom-right',
      delay: '0.90s',
      floatDelay: '1.8s',
    },
  ];

  return (
    <div className="sm:hidden">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div
            key={it.label}
            className={`pointer-events-none absolute z-10 ${it.pos}`}
            style={{
              animation: `cardEntry 0.8s ${it.delay} cubic-bezier(0.2,0.9,0.3,1.2) backwards, cardFloat 7s ${it.floatDelay} ease-in-out infinite`,
            }}
          >
            <div
              className="relative flex w-[108px] flex-col items-center gap-2 overflow-hidden rounded-xl px-2.5 py-2.5 backdrop-blur-md"
              style={{
                background:
                  'linear-gradient(160deg, rgba(31,31,31,0.88) 0%, rgba(42,41,41,0.72) 100%)',
                border: `1px solid ${C.bgDarkSoft}`,
                boxShadow: `0 8px 22px -10px rgba(0,0,0,0.7), 0 0 18px ${C.yellowGlow}1f, inset 0 1px 0 ${C.yellowGlow}1a`,
              }}
            >
              {/* Inner soft yellow glow that breathes */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${C.yellowGlow}1f 0%, transparent 70%)`,
                  animation: 'industryGlow 3.6s ease-in-out infinite',
                }}
              />

              <div
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${C.yellowGlow}40 0%, ${C.yellow}26 100%)`,
                  border: `1px solid ${C.yellowGlow}66`,
                  boxShadow: `0 0 12px ${C.yellowGlow}33, inset 0 0 6px ${C.yellowGlow}22`,
                }}
              >
                <Icon className="h-4.5 w-4.5" style={{ color: C.yellowGlow }} />
              </div>

              <div className="relative text-center">
                <p className="text-xs font-semibold leading-tight text-white">
                  {it.label}
                </p>
                <p
                  className="mt-0.5 text-[10.5px] leading-tight"
                  style={{ color: '#bdbdbd' }}
                >
                  {it.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes industryGlow {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Features — WHITE bg, dark cards (matches Figma)
   ───────────────────────────────────────────────────────────────────────────── */
function FeatureCard({ group }: { group: FeatureGroup }) {
  const Icon = group.icon;
  return (
    <div
      className="feature-card group relative flex h-full flex-col overflow-hidden rounded-xl p-5 text-white"
      style={{
        background: C.bgDark,
        border: `1px solid ${C.bgDarkSoft}`,
        boxShadow: `inset 0 1px 0 ${C.yellowGlow}14, 0 2px 8px rgba(0,0,0,0.06)`,
        transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 400ms ease, border-color 400ms ease',
      }}
    >
      {/* Animated gradient border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: '1px',
          background: `linear-gradient(135deg, ${C.yellowGlow}80 0%, ${C.yellowSoft}40 50%, transparent 100%)`,
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Cursor-following spotlight */}
      <span
        aria-hidden
        className="feature-card-spotlight pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), ${C.yellowGlow}12, transparent 45%)`,
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col">
        {/* Icon + Title in one row */}
        <div className="flex items-center gap-3">
          <div
            className="feature-card-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-500"
            style={{
              background: `${C.yellow}14`,
              border: `1px solid ${C.yellow}33`,
              boxShadow: `inset 0 1px 0 ${C.yellow}22`,
            }}
          >
            <Icon className="h-4 w-4 transition-transform duration-500" style={{ color: C.yellow }} />
          </div>
          <h3 className="text-[15px] font-semibold leading-tight tracking-tight text-white">
            {group.title}
          </h3>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-white/55">{group.description}</p>

        {/* Hairline divider */}
        <span
          aria-hidden
          className="my-4 block h-px w-full"
          style={{ background: C.bgDarkSoft }}
        />

        <ul className="space-y-2">
          {group.bullets.map((b) => {
            const BIcon = b.icon;
            return (
              <li
                key={b.label}
                className="flex items-center gap-2 text-xs leading-snug text-white/70"
              >
                <BIcon className="h-3 w-3 shrink-0" style={{ color: `${C.yellow}cc` }} />
                {b.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Features() {
  // Cursor-tracking spotlight: write mouse pos as CSS vars on the hovered card.
  useEffect(() => {
    const root = document.getElementById('features');
    if (!root) return;
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('.feature-card') as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      target.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    root.addEventListener('mousemove', handler);
    return () => root.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section
      id="features"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-20"
      style={{ background: '#ffffff' }}
    >
      <style>{`
        .feature-card { will-change: transform; }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: ${C.yellowGlow}40 !important;
          box-shadow: inset 0 1px 0 ${C.yellowGlow}26, 0 18px 40px -14px rgba(0,0,0,0.7), 0 0 0 1px ${C.yellowGlow}1a inset;
        }
        .feature-card:hover .feature-card-icon {
          background: ${C.yellow}26 !important;
          border-color: ${C.yellow}66 !important;
        }
      `}</style>
      {/* World map background — Figma asset */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <img
          src={worldMap}
          alt=""
          className="h-auto w-full max-w-[1700px] select-none"
          style={{
            opacity: 0.35,
            filter: 'grayscale(1) brightness(0)',
          }}
          draggable={false}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white sm:text-sm"
            style={{
              background: `linear-gradient(${C.bgDark}, ${C.bgDark}) padding-box, linear-gradient(135deg, ${C.yellow} 0%, #ffffff 100%) border-box`,
              border: '2px solid transparent',
            }}
          >
            <img src={featuresPillStar} alt="" aria-hidden className="h-4 w-4" />
            Features
          </span>
          <h2
            className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[34px]"
            style={{ color: C.bgDark }}
          >
            Powerful Features, Simply Designed
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: C.gray }}>
            Everything a modern travel team needs — without the complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:auto-rows-fr sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_GROUPS.map((g, i) => (
            <div
              key={g.title}
              className="reveal h-full"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <FeatureCard group={g} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Why Zarah — dark gradient + 5 benefits + CTA card
   ───────────────────────────────────────────────────────────────────────────── */
function WhyZarah() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-20 sm:py-20"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, ${C.yellowGlow}0a 0%, transparent 60%),
          linear-gradient(180deg, ${C.bgDark} 0%, ${C.bgDarkSoft} 50%, ${C.bgDark} 100%)
        `,
      }}
    >
      {/* Decorative ambient graphics — soft yellow orbs + a faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[18%] h-72 w-72 rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.yellowGlow}14 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-[20%] h-80 w-80 rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.yellowSoft}10 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.yellow}08 0%, transparent 65%)`,
          filter: 'blur(50px)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-xs font-medium text-white sm:text-sm"
            style={{ borderColor: C.bgDarkSoft }}
          >
            <img src={featuresPillStar} alt="" aria-hidden className="h-4 w-4" />
            Why Zarah
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
            Built for Travel Professionals
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: '#bdbdbd' }}>
            Designed specifically for travel agencies, DMCs, and MICE organizers who demand
            excellence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:mt-12 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`reveal group flex items-start gap-4 px-2 py-6 sm:flex-col sm:gap-0 sm:px-0 sm:py-0 ${
                  i !== 0 ? 'border-t sm:border-t-0' : ''
                }`}
                style={{ borderColor: C.bgDarkSoft, transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                  style={{
                    background: `${C.yellow}14`,
                    border: `1px solid ${C.yellow}40`,
                  }}
                >
                  <Icon className="h-5 w-5 sm:h-4.5 sm:w-4.5" style={{ color: C.yellow }} />
                </div>
                <div className="min-w-0 flex-1 sm:mt-4">
                  <h3 className="text-base font-semibold leading-snug text-white">{b.title}</h3>
                  <p
                    className="mt-1.5 text-[13px] leading-relaxed sm:mt-2"
                    style={{ color: '#bdbdbd' }}
                  >
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <CTACard />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CTA — yellow outline + glow shadow (matches Figma exactly)
   ───────────────────────────────────────────────────────────────────────────── */
function CTACard() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  };

  return (
    <div id="contact" className="mt-16 sm:mt-20">
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14"
        style={{
          background: `
            linear-gradient(135deg, rgba(31,31,31,0.95) 0%, rgba(42,41,41,0.85) 100%),
            radial-gradient(circle at 20% 30%, ${C.yellowSoft}15 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${C.yellowGlow}12 0%, transparent 50%)
          `,
          border: `1px solid ${C.bgDarkSoft}`,
          boxShadow: `
            inset 0 1px 0 ${C.yellowGlow}20,
            0 20px 50px -20px ${C.bgDark}
          `,
        }}
      >
        {/* Decorative gradient ring + sparkles */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full"
          style={{
            background: `radial-gradient(circle, ${C.yellowSoft}25 0%, transparent 60%)`,
            filter: 'blur(30px)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full"
          style={{
            background: `radial-gradient(circle, ${C.yellowGlow}20 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }}
        />
        {/* Tiny floating sparkles */}
        <img
          src={zarahTextStar}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-8 top-6 h-5 w-5 opacity-60 sm:right-14 sm:top-10 sm:h-6 sm:w-6"
          style={{ animation: 'twinkle 3s ease-in-out infinite' }}
        />
        <img
          src={zarahTextStar}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-12 left-6 h-3 w-3 opacity-50 sm:left-14 sm:h-4 sm:w-4"
          style={{ animation: 'twinkle 4s ease-in-out infinite 1s' }}
        />
        <img
          src={zarahTextStar}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-4 hidden h-3 w-3 opacity-40 sm:block"
          style={{ animation: 'twinkle 3.5s ease-in-out infinite 0.5s' }}
        />

        <div className="relative">
          {/* Badge */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
              style={{
                borderColor: `${C.yellowGlow}40`,
                color: C.yellowGlow,
                background: `${C.yellowGlow}08`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: C.yellowGlow,
                  boxShadow: `0 0 8px ${C.yellowGlow}`,
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              Limited Early Access
            </span>
          </div>

          <h2 className="mt-5 text-center text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[32px]">
            Ready to Transform Your{' '}
            <span
              style={{
                background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellowSoft} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Travel Business?
            </span>
          </h2>

          <p
            className="mx-auto mt-3 max-w-xl text-center text-sm sm:text-[15px]"
            style={{ color: '#bdbdbd' }}
          >
            Join thousands of travel professionals using Zarah every day. Get started in
            under 60 seconds.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              disabled={status === 'submitting' || status === 'success'}
              className="flex-1 rounded-full border bg-black/30 px-5 py-2.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition focus:border-[var(--soft)] focus:outline-none focus:ring-2 disabled:opacity-60"
              style={
                {
                  borderColor: C.bgDarkSoft,
                  ['--soft' as never]: C.yellowSoft,
                  ['--tw-ring-color' as never]: `${C.yellowSoft}33`,
                } as React.CSSProperties
              }
            />
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition active:scale-[0.98] disabled:opacity-60"
              style={{
                background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellowSoft} 100%)`,
                color: C.bgDark,
                boxShadow: `0 4px 14px ${C.yellowSoft}40`,
              }}
            >
              {status === 'submitting' ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2"
                    style={{
                      borderColor: `${C.bgDark}55`,
                      borderTopColor: C.bgDark,
                    }}
                  />
                  Submitting…
                </>
              ) : status === 'success' ? (
                <>
                  <Check className="h-4 w-4" />
                  You're on the list
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-center text-xs animate-fadeIn" style={{ color: C.yellowGlow }}>
              Thanks! We'll be in touch within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-center text-xs animate-fadeIn" style={{ color: C.yellowSoft }}>
              Please enter a valid email address.
            </p>
          )}

          {/* Trust signals */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px]" style={{ color: '#9a9a9a' }}>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3 w-3" style={{ color: C.yellowSoft }} /> No credit card
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3 w-3" style={{ color: C.yellowSoft }} /> 14-day trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3 w-3" style={{ color: C.yellowSoft }} /> Cancel anytime
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.1) rotate(15deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Footer
   ───────────────────────────────────────────────────────────────────────────── */
function Footer() {
  const LINKEDIN_URL = 'https://www.linkedin.com/company/zarahai/';

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Why Zarah', href: '#why' },
    { label: 'Get Started', href: '#contact' },
  ];

  return (
    <footer
      className="relative overflow-hidden pt-14 pb-8"
      style={{ background: C.bgDark }}
    >
      {/* Subtle top accent line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${C.yellowGlow}40 50%, transparent 100%)`,
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 md:text-left">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center transition-transform hover:scale-[1.02]"
              aria-label="Zarah AI home"
            >
              <img src={zarahLogo} alt="Zarah AI" className="h-11 w-auto" />
            </a>
            <p
              className="mx-auto mt-4 max-w-sm text-sm leading-relaxed md:mx-0"
              style={{ color: '#a8a8a8' }}
            >
              The AI travel partner for travel agencies, DMCs, and MICE organizers —
              built to streamline your operations.
            </p>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Zarah AI on LinkedIn"
              className="group mt-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-medium text-white/85 transition-all hover:scale-[1.02] hover:text-white"
              style={{
                borderColor: C.bgDarkSoft,
                background: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.yellowGlow;
                e.currentTarget.style.boxShadow = `0 0 18px ${C.yellowGlow}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.bgDarkSoft;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors"
                style={{
                  background: `${C.yellowGlow}1a`,
                  color: C.yellowGlow,
                }}
              >
                <Linkedin className="h-3.5 w-3.5" />
              </span>
              Follow us on LinkedIn
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] transition-colors"
                    style={{ color: '#a8a8a8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a8a8')}
                  >
                    <span
                      className="h-px w-3 transition-all duration-300 group-hover:w-5"
                      style={{ background: C.yellow }}
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-sm font-semibold text-white">Get in touch</h4>
            <p
              className="mt-4 text-[13px] leading-relaxed"
              style={{ color: '#a8a8a8' }}
            >
              Want to see Zarah in action? Reach out and we'll get back to you within 24
              hours.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
              style={{ color: C.yellowGlow }}
            >
              Start a free trial
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: C.bgDarkSoft }}
        >
          <p className="text-[11px]" style={{ color: '#7c7c7c' }}>
            © {new Date().getFullYear()} Zarah AI · Travel Mate Tech LLP. All rights
            reserved.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zarah AI on LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:scale-110"
            style={{ borderColor: C.bgDarkSoft, color: '#cfcfcf' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.yellowGlow;
              e.currentTarget.style.color = C.yellowGlow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.bgDarkSoft;
              e.currentTarget.style.color = '#cfcfcf';
            }}
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  // Scroll-triggered fade-up for elements with .reveal
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Hero pin parallax — only on lg+ where the Hero is fixed-pinned
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const heroPin = document.getElementById('hero-pin');
    if (!heroPin) return;
    let raf = 0;
    const apply = () => {
      const vh = window.innerHeight || 1;
      const isLg = window.matchMedia('(min-width: 1024px)').matches;
      if (isLg) {
        const y = window.scrollY;
        const t = Math.min(Math.max(y / vh, 0), 1);
        const eased = 1 - Math.pow(1 - t, 2);
        heroPin.style.transform = `scale(${1 - eased * 0.06}) translate3d(0, ${eased * -28}px, 0)`;
        heroPin.style.opacity = `${1 - eased * 0.45}`;
        heroPin.style.filter = '';
      } else {
        heroPin.style.transform = '';
        heroPin.style.opacity = '';
        heroPin.style.filter = '';
      }
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white antialiased" style={{ background: C.bgDark }}>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        #hero-pin {
          will-change: transform, opacity, filter;
          transform-origin: 50% 40%;
        }
        .scroll-stack-top {
          position: relative;
        }
        .scroll-stack-top::before {
          content: '';
          position: absolute;
          inset: -1px 0 auto 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,246,144,0.18) 50%, transparent 100%);
          z-index: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          #hero-pin { transform: none !important; opacity: 1 !important; filter: none !important; }
        }
      `}</style>
      <Header />

      {/* Pinned Hero — fixed-pinned on lg+; on mobile it sits in normal flow so the user can scroll past the text to reveal the star */}
      <div
        id="hero-pin"
        className="relative z-0 lg:fixed lg:inset-x-0 lg:top-0 lg:h-screen lg:overflow-hidden"
      >
        <Hero />
      </div>

      {/* Spacer — reserves the Hero's footprint in document flow only when it's pinned */}
      <div aria-hidden className="hidden h-screen lg:block" />

      {/* Scrolling stack — overlap shadow only renders ABOVE the wrapper so the white Features bg stays pure */}
      <div
        className="scroll-stack-top relative z-10"
        style={{
          boxShadow:
            '0 -56px 40px 0 rgba(0,0,0,0.55), 0 -28px 24px 0 rgba(0,0,0,0.4)',
        }}
      >
        <main>
          <Features />
          <WhyZarah />
        </main>
        <Footer />
      </div>
    </div>
  );
}
