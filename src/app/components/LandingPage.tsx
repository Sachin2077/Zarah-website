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
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Play,
  Check,
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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8">
        <a href="#home" className="flex items-center" aria-label="Zarah AI home">
          <img src={zarahLogo} alt="Zarah AI" className="h-9 w-auto sm:h-10 lg:h-11" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: C.yellow }}
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border px-5 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-white hover:text-[var(--dark)]"
            style={
              {
                borderColor: C.bgDarkSoft,
                ['--dark' as never]: C.bgDark,
              } as React.CSSProperties
            }
          >
            Login
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border text-white transition-colors hover:bg-white/5 md:hidden"
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
            className="mt-2 rounded-full border-2 px-3 py-2 text-center text-sm font-medium text-white transition-colors"
            style={{ borderColor: C.bgDarkSoft }}
          >
            Login
          </a>
        </nav>
      </div>
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

      {/* Faded world map — anchors "global travel" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <img
          src={worldMap}
          alt=""
          draggable={false}
          className="hero-world-map h-auto w-[140%] max-w-none translate-y-[10%] select-none lg:w-[110%]"
          style={{
            opacity: 0.07,
            filter: 'invert(1) brightness(2) contrast(1.1)',
          }}
        />
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
      className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
      style={{ background: C.bgDark }}
    >
      <HeroBackground />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* LEFT: copy */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[56px]">
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
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/5 sm:w-auto sm:py-3"
                style={{ borderColor: C.bgDarkSoft }}
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* RIGHT: AI travel mission control composition */}
          <HeroVisual />
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

      {/* Center hero star — the AI brain */}
      <div
        className="absolute inset-[26%] flex items-center justify-center"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        <img
          src={heroStar}
          alt=""
          aria-hidden
          className="h-full w-full select-none"
          draggable={false}
        />
      </div>

      {/* 2 floating automation cards */}
      <FloatingCards />
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
   Features — WHITE bg, dark cards (matches Figma)
   ───────────────────────────────────────────────────────────────────────────── */
function FeatureCard({ group }: { group: FeatureGroup }) {
  const Icon = group.icon;
  return (
    <div
      className="feature-card group relative flex flex-col overflow-hidden rounded-2xl p-5 text-white"
      style={{
        background: C.bgDark,
        boxShadow: `0 4px 16px ${C.bgDark}1a`,
        transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 400ms ease',
      }}
    >
      {/* Animated gradient border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: '1.5px',
          background: `linear-gradient(135deg, ${C.yellowGlow} 0%, ${C.yellowSoft}80 50%, transparent 100%)`,
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Cursor-following spotlight */}
      <span
        aria-hidden
        className="feature-card-spotlight pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), ${C.yellowGlow}1a, transparent 40%)`,
        }}
      />

      {/* Subtle shine sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px overflow-hidden rounded-2xl"
      >
        <span
          className="feature-card-shine absolute -left-1/2 top-0 h-full w-1/2"
          style={{
            background: `linear-gradient(115deg, transparent 0%, ${C.yellowGlow}1a 45%, ${C.yellowGlow}33 50%, ${C.yellowGlow}1a 55%, transparent 100%)`,
            transform: 'translateX(-100%) skewX(-12deg)',
          }}
        />
      </span>

      {/* Content */}
      <div className="relative">
        <div
          className="feature-card-icon inline-flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-500"
          style={{
            background: `${C.yellow}1f`,
            border: `1px solid ${C.yellow}55`,
          }}
        >
          <Icon className="h-5 w-5 transition-transform duration-500" style={{ color: C.yellow }} />
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[var(--soft)]"
          style={{ ['--soft' as never]: C.yellowGlow } as React.CSSProperties}
        >
          {group.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-white/70">{group.description}</p>

        <ul className="mt-5 space-y-2">
          {group.bullets.map((b) => {
            const BIcon = b.icon;
            return (
              <li
                key={b.label}
                className="flex items-center gap-2 text-[13px] text-white/85 transition-transform duration-300"
              >
                <BIcon className="h-3.5 w-3.5 shrink-0" style={{ color: C.yellow }} />
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
      className="relative overflow-hidden py-16 sm:py-20"
      style={{
        background: `radial-gradient(ellipse at top, #fafafa 0%, #ffffff 50%, #f4f4f5 100%)`,
      }}
    >
      <style>{`
        .feature-card { will-change: transform; }
        .feature-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 24px 50px -12px ${C.bgDark}99, 0 0 32px ${C.yellowGlow}1f;
        }
        .feature-card:hover .feature-card-icon {
          background: ${C.yellow}33 !important;
          border-color: ${C.yellow} !important;
          transform: rotate(-6deg) scale(1.1);
          box-shadow: 0 0 22px ${C.yellowGlow}55;
        }
        .feature-card:hover .feature-card-icon svg { transform: scale(1.1); }
        .feature-card:hover .feature-card-shine {
          animation: cardShine 1.1s ease-out;
        }
        @keyframes cardShine {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(350%)  skewX(-12deg); }
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
            opacity: 0.85,
            filter: 'grayscale(1) contrast(0.95) brightness(0.95)',
            mixBlendMode: 'multiply',
          }}
          draggable={false}
        />
      </div>

      {/* Animated travel route dotted lines */}
      <svg
        aria-hidden
        viewBox="0 0 1600 800"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="route1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C.yellowSoft} stopOpacity="0" />
            <stop offset="50%" stopColor={C.yellowSoft} stopOpacity="0.7" />
            <stop offset="100%" stopColor={C.yellowSoft} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 200,300 Q 600,150 1000,250 T 1500,200"
          fill="none"
          stroke="url(#route1)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.6"
        />
        <path
          d="M 100,500 Q 500,400 900,480 T 1400,440"
          fill="none"
          stroke="url(#route1)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.4"
        />
        {/* destination markers */}
        {[
          [200, 300],
          [1000, 250],
          [1500, 200],
          [100, 500],
          [900, 480],
          [1400, 440],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill={C.yellowSoft} opacity="0.25" />
            <circle cx={x} cy={y} r="3" fill={C.yellow} opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="3s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Decorative blurred yellow orbs for visual interest */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-100px] top-1/3 h-[300px] w-[300px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.yellowGlow}30 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-[10%] h-[260px] w-[260px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.yellowSoft}25 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-xs font-medium sm:text-sm"
            style={{ borderColor: C.bgDarkSoft, color: C.bgDark }}
          >
            <img src={featuresPillStar} alt="" aria-hidden className="h-4 w-4" />
            Features
          </span>
          <h2
            className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[34px]"
            style={{ color: C.gray }}
          >
            Powerful Features, Simply Designed
          </h2>
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: C.gray, opacity: 0.8 }}
          >
            Everything a modern travel team needs — without the complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_GROUPS.map((g) => (
            <FeatureCard key={g.title} group={g} />
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
      className="relative overflow-hidden py-16 sm:py-20"
      style={{
        background: `linear-gradient(180deg, ${C.bgDark} 0%, #2c2c2c 100%)`,
      }}
    >
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
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

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="group flex flex-col items-start">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${C.yellow}1a`,
                    border: `1px solid ${C.yellow}55`,
                  }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ color: C.yellow }} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{b.title}</h3>
                <p
                  className="mt-2 text-[13px] leading-relaxed"
                  style={{ color: '#bdbdbd' }}
                >
                  {b.description}
                </p>
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
  const cols: { title: string; links: string[] }[] = [
    { title: 'Product', links: ['Featuring', 'Benefits', 'Pricing'] },
    { title: 'Company', links: ['About us', 'Blog', 'Careers', 'Contact'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security'] },
    { title: 'Connect', links: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'] },
  ];
  const socials = [
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="relative pt-12 pb-8" style={{ background: C.bgDark }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center sm:hidden">
          <img src={zarahLogo} alt="Zarah AI" className="h-10 w-auto" />
        </div>

        <div className="mt-8 grid gap-8 sm:mt-0 sm:grid-cols-[1fr_2fr]">
          <div className="hidden sm:block">
            <div className="flex items-center">
              <img src={zarahLogo} alt="Zarah AI" className="h-12 w-auto" />
            </div>
            <p className="mt-3 max-w-xs text-xs" style={{ color: '#9a9a9a' }}>
              The AI travel partner for travel agencies, DMCs, and MICE organizers.
            </p>
            <div className="mt-4 flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-white/5"
                    style={{ borderColor: C.bgDarkSoft, color: '#cfcfcf' }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-3 space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-xs transition-colors hover:text-white"
                        style={{ color: '#9a9a9a' }}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-5 sm:flex-row"
          style={{ borderColor: C.bgDarkSoft }}
        >
          <p className="text-[11px]" style={{ color: '#7c7c7c' }}>
            © {new Date().getFullYear()} Travel Mate Tech. All rights reserved. | Zarah —
            Your AI Travel Planning Partner
          </p>
          <div className="flex gap-2 sm:hidden">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-white/5"
                  style={{ borderColor: C.bgDarkSoft, color: '#cfcfcf' }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
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

  return (
    <div className="min-h-screen text-white antialiased" style={{ background: C.bgDark }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <WhyZarah />
      </main>
      <Footer />
    </div>
  );
}
