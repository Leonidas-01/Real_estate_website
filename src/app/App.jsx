import { useState, useMemo } from "react";
import {
  Search, Heart, Menu, X, MapPin, BedDouble, Bath, Maximize2,
  Phone, Mail, ArrowRight, Star, LayoutGrid, List, ChevronLeft,
  ChevronRight, Building2, Trees, Home, TrendingUp, Award,
  Shield, Check, SlidersHorizontal, Instagram, Twitter, Linkedin,
  Globe, ChevronDown, Calendar, Share2, CheckCircle2,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const DATA = [
  {
    id: 1,
    title: "The Meridian Penthouse",
    address: "240 West 73rd Street, PHD",
    city: "Upper West Side, NY",
    type: "apartment",
    deals: ["buy", "rent"],
    price: 4200000,
    rentPrice: 18500,
    beds: 4,
    baths: 3,
    sqft: 3200,
    images: [
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600494448850-6013c64ba722?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1688646953306-5ec93eab8c06?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "An extraordinary penthouse residence occupying the entire top floor of The Meridian. Sweeping panoramic views of Central Park and the Manhattan skyline from every room. Chef's kitchen with Miele appliances, private rooftop terrace, and bespoke finishes throughout.",
    features: ["Panoramic Park Views", "Private Rooftop Terrace", "Chef's Kitchen", "24/7 Concierge", "Private Gym Access", "Wine Cellar", "2 Parking Spaces", "Smart Home System"],
    agentName: "Alexandra Morse",
    agentPhone: "+1 (212) 555-0147",
    agentEmail: "amorse@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
    badge: "Featured",
    stars: 4.9,
    reviews: 23,
    year: 2019,
  },
  {
    id: 2,
    title: "Riverview Suite 14B",
    address: "88 Pierrepont Street, Apt 14B",
    city: "Brooklyn Heights, NY",
    type: "apartment",
    deals: ["buy", "rent"],
    price: 1250000,
    rentPrice: 7200,
    beds: 2,
    baths: 2,
    sqft: 1480,
    images: [
      "https://images.unsplash.com/photo-1600494448850-6013c64ba722?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1630699144035-c0f6311ec482?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A refined pre-war co-op with original hardwood floors, soaring 10-foot ceilings, and coveted Brooklyn Bridge views. Fully renovated kitchen, spa-inspired bathrooms, and generous proportions throughout.",
    features: ["Brooklyn Bridge Views", "Pre-War Details", "Renovated Kitchen", "Hardwood Floors", "Doorman Building", "Common Roof Deck", "Bike Storage"],
    agentName: "Marcus Webb",
    agentPhone: "+1 (718) 555-0293",
    agentEmail: "mwebb@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format",
    badge: "New Listing",
    stars: 4.7,
    reviews: 11,
    year: 1928,
  },
  {
    id: 3,
    title: "The Crest — Unit 7A",
    address: "285 West 23rd Street, Unit 7A",
    city: "Chelsea, NY",
    type: "apartment",
    deals: ["buy", "book"],
    price: 875000,
    beds: 1,
    baths: 1,
    sqft: 920,
    images: [
      "https://images.unsplash.com/photo-1630699144035-c0f6311ec482?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600494448850-6013c64ba722?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A modern one-bedroom in the heart of Chelsea's gallery district. Floor-to-ceiling windows flood the space with natural light. Building amenities include rooftop terrace, fitness center, and 24-hour concierge.",
    features: ["Floor-to-Ceiling Windows", "Rooftop Terrace", "Fitness Center", "24hr Concierge", "In-Unit Laundry", "Private Storage Unit"],
    agentName: "Alexandra Morse",
    agentPhone: "+1 (212) 555-0147",
    agentEmail: "amorse@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
    stars: 4.6,
    reviews: 8,
    year: 2021,
  },
  {
    id: 4,
    title: "Harrington Commerce Tower",
    address: "1540 Broadway",
    city: "Midtown Manhattan, NY",
    type: "building",
    deals: ["buy"],
    price: 42000000,
    sqft: 185000,
    floors: 22,
    images: [
      "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A landmark Class A commercial tower at Times Square. Fully tenanted with Fortune 500 leases. Recent lobby renovation, upgraded HVAC, and LEED Gold certification. Cap rate 4.8% with long-term income stability.",
    features: ["22 Floors", "Class A Office", "LEED Gold Certified", "Full Occupancy", "Ground Floor Retail", "8 High-Speed Elevators", "Underground Parking", "Loading Dock"],
    agentName: "James Harrington",
    agentPhone: "+1 (212) 555-0381",
    agentEmail: "jharrington@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    badge: "Investment",
    stars: 4.8,
    reviews: 5,
    year: 2004,
  },
  {
    id: 5,
    title: "The Caldwell Building",
    address: "94 Grand Street",
    city: "SoHo, NY",
    type: "building",
    deals: ["buy"],
    price: 18500000,
    sqft: 48000,
    floors: 8,
    images: [
      "https://images.unsplash.com/photo-1692468459903-28803629b68e?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555238920-7a6bea18473b?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A distinguished cast-iron building in prime SoHo, zoned for mixed residential and commercial use. Iconic cobblestone frontage, soaring 14-foot ceilings on each floor, and exceptional potential for luxury conversion.",
    features: ["Cast-Iron Facade", "Mixed-Use Zoning", "14-Foot Ceilings", "Corner Position", "Cobblestone Frontage", "Historic Designation", "Development Rights"],
    agentName: "James Harrington",
    agentPhone: "+1 (212) 555-0381",
    agentEmail: "jharrington@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    badge: "Rare Find",
    stars: 4.9,
    reviews: 7,
    year: 1882,
  },
  {
    id: 6,
    title: "Hudson Yards Parcel A",
    address: "West 35th Street & 11th Avenue",
    city: "Hudson Yards, NY",
    type: "land",
    deals: ["buy"],
    price: 28000000,
    sqft: 104544,
    images: [
      "https://images.unsplash.com/photo-1515259387710-51e175f9ec6d?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1773215023063-e662ea91a69c?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A rare 2.4-acre development parcel in the transforming Hudson Yards district. Zoned for high-density mixed-use with approved plans for 800+ residential units and ground-floor retail. All infrastructure is in place.",
    features: ["2.4 Acres", "High-Density Zoning", "Approved Development Plans", "800+ Unit Capacity", "Waterfront Access", "Transit Adjacent", "All Utilities In Place"],
    agentName: "James Harrington",
    agentPhone: "+1 (212) 555-0381",
    agentEmail: "jharrington@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    badge: "Prime Location",
    stars: 4.7,
    reviews: 3,
  },
  {
    id: 7,
    title: "Greenwich Estate Lot",
    address: "14 Meadowbrook Lane",
    city: "Greenwich, CT",
    type: "land",
    deals: ["buy"],
    price: 3800000,
    sqft: 34848,
    images: [
      "https://images.unsplash.com/photo-1764222233275-87dc016c11dc?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1515259387710-51e175f9ec6d?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A premier 0.8-acre residential lot in Greenwich's coveted backcountry. Gently sloped with mature specimen trees, natural stone outcroppings, and all utilities at the street. Top-rated school district.",
    features: ["0.8 Acres", "Mature Trees", "Stone Outcroppings", "Utilities at Street", "Private Road Access", "Top School District", "No HOA"],
    agentName: "Alexandra Morse",
    agentPhone: "+1 (212) 555-0147",
    agentEmail: "amorse@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
    stars: 4.5,
    reviews: 4,
  },
  {
    id: 8,
    title: "Panorama Heights 3C",
    address: "520 Park Avenue, Apt 3C",
    city: "Upper East Side, NY",
    type: "apartment",
    deals: ["rent", "book"],
    price: 2800000,
    rentPrice: 12500,
    beds: 3,
    baths: 2,
    sqft: 2100,
    images: [
      "https://images.unsplash.com/photo-1688646953306-5ec93eab8c06?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format",
    ],
    desc: "A distinguished three-bedroom residence on prestigious Park Avenue. Gracious entertaining spaces, a bespoke library, formal dining room, and white-glove building services. Every conceivable amenity.",
    features: ["Park Avenue Address", "Library & Study", "Formal Dining Room", "White-Glove Service", "Wine Storage", "Valet Parking", "Full Doorman"],
    agentName: "Marcus Webb",
    agentPhone: "+1 (718) 555-0293",
    agentEmail: "mwebb@elevate.re",
    agentPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format",
    badge: "Premium",
    stars: 4.8,
    reviews: 16,
    year: 1965,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fp = (price, deal, p) => {
  if ((deal === "rent" || deal === "book") && p?.rentPrice) return `$${p.rentPrice.toLocaleString()}/mo`;
  if (price >= 1000000) {
    const m = price / 1000000;
    return `$${m % 1 === 0 ? m : m.toFixed(1)}M`;
  }
  return `$${price.toLocaleString()}`;
};

const fa = (sqft, type) => {
  if (type === "land") {
    const ac = sqft / 43560;
    return ac >= 0.5 ? `${ac.toFixed(1)} acres` : `${sqft.toLocaleString()} sq ft`;
  }
  return `${sqft.toLocaleString()} sq ft`;
};

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

// ─── PropCard Component ───────────────────────────────────────────────────────

function PropCard({ p, deal, favs, onToggleFav, onSelect, layout = "grid" }) {
  return (
    <div
      onClick={() => onSelect(p)}
      className={`group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${layout === "list" ? "flex" : ""}`}
    >
      <div className={`relative overflow-hidden bg-muted ${layout === "list" ? "w-64 flex-shrink-0" : "aspect-[4/3]"}`}>
        <img
          src={p.images[0]}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] px-2.5 py-1 tracking-[0.12em] uppercase">
            {p.badge}
          </span>
        )}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
          onClick={(e) => { e.stopPropagation(); onToggleFav(p.id); }}
          aria-label={favs.has(p.id) ? "Remove from saved" : "Save property"}
        >
          <Heart size={13} className={favs.has(p.id) ? "text-accent fill-accent" : "text-foreground/50"} />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {p.deals.map(d => (
            <span key={d} className="bg-foreground/75 text-white text-[9px] px-2 py-0.5 uppercase tracking-[0.1em]">{d}</span>
          ))}
        </div>
      </div>
      <div className={`p-5 ${layout === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {p.type === "apartment" && <Home size={10} />}
              {p.type === "building" && <Building2 size={10} />}
              {p.type === "land" && <Trees size={10} />}
              <span className="capitalize">{p.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={10} className="text-accent fill-accent" />
              <span className="text-[11px] text-foreground/60">{p.stars} ({p.reviews})</span>
            </div>
          </div>
          <h3 style={serif} className="text-foreground text-[15px] font-medium leading-snug mb-1">{p.title}</h3>
          <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1"><MapPin size={10} />{p.city}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/55 mb-4">
            {p.beds !== undefined && <span className="flex items-center gap-1"><BedDouble size={11} />{p.beds} bd</span>}
            {p.baths !== undefined && <span className="flex items-center gap-1"><Bath size={11} />{p.baths} ba</span>}
            <span className="flex items-center gap-1"><Maximize2 size={11} />{fa(p.sqft, p.type)}</span>
            {p.floors && <span className="flex items-center gap-1"><Building2 size={11} />{p.floors} fl</span>}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span style={serif} className="text-foreground text-lg font-semibold">{fp(p.price, deal, p)}</span>
          <ArrowRight size={15} className="text-accent group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [prop, setProp] = useState(null);
  const [favs, setFavs] = useState(new Set());
  const [deal, setDeal] = useState("buy");
  const [typeF, setTypeF] = useState("all");
  const [locSearch, setLocSearch] = useState("");
  const [minP, setMinP] = useState(0);
  const [maxP, setMaxP] = useState(100000000);
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [mobileNav, setMobileNav] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const [bookForm, setBookForm] = useState({ name: "", email: "", phone: "", date: "", msg: "" });
  const [booked, setBooked] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [authMessage, setAuthMessage] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", interest: "", msg: "" });
  const [contactSent, setContactSent] = useState(false);

  const toggleFav = (id) =>
    setFavs(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const goDetail = (p) => {
    setProp(p); setImgIdx(0); setBooked(false);
    setBookForm({ name: "", email: "", phone: "", date: "", msg: "" });
    setPage("detail"); window.scrollTo(0, 0);
  };

  const goListings = (d, t) => {
    if (d) setDeal(d);
    if (t) setTypeF(t);
    setPage("listings");
    window.scrollTo(0, 0);
  };

  const filtered = useMemo(() => {
    return DATA.filter(p => {
      if (!p.deals.includes(deal)) return false;
      if (typeF !== "all" && p.type !== typeF) return false;
      const price = (deal === "rent" || deal === "book") ? (p.rentPrice ?? p.price) : p.price;
      if (price < minP || price > maxP) return false;
      if (minBeds > 0 && (p.beds ?? 0) < minBeds) return false;
      if (locSearch && !p.city.toLowerCase().includes(locSearch.toLowerCase()) &&
        !p.address.toLowerCase().includes(locSearch.toLowerCase())) return false;
      return true;
    }).sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "newest") return (b.year ?? 0) - (a.year ?? 0);
      return b.stars - a.stars;
    });
  }, [deal, typeF, minP, maxP, minBeds, locSearch, sort]);

  const submitBook = () => {
    if (!bookForm.name || !bookForm.email) return;
    setBooked(true);
  };

  // ── Navbar ─────────────────────────────────────────────────────────────────

  const navbar = (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/96 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => { setPage("home"); window.scrollTo(0, 0); }}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div className="w-7 h-7 bg-foreground flex items-center justify-center">
              <Building2 size={13} className="text-background" />
            </div>
            <span style={serif} className="text-foreground text-lg font-semibold tracking-[0.06em]">ELEVATE</span>
          </button>
          <div className="hidden lg:flex items-center gap-7 text-[13px]">
            {["buy", "rent", "book"].map(d => (
              <button key={d} onClick={() => goListings(d)} className="text-foreground/55 hover:text-foreground transition-colors capitalize">{d}</button>
            ))}
            <button
              onClick={() => { setPage("home"); setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 80); }}
              className="text-foreground/55 hover:text-foreground transition-colors"
            >About</button>
            <button
              onClick={() => { setPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 80); }}
              className="text-foreground/55 hover:text-foreground transition-colors"
            >Contact</button>
            <button onClick={() => { setAuthMode("login"); setPage("auth"); setAuthMessage(""); }} className="text-foreground/55 hover:text-foreground transition-colors">Login</button>
            <button onClick={() => { setAuthMode("signup"); setPage("auth"); setAuthMessage(""); }} className="text-foreground/55 hover:text-foreground transition-colors">Sign up</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+234 9022227842" className="hidden md:flex items-center gap-1.5 text-[12px] text-foreground/50 hover:text-foreground transition-colors">
            <Phone size={13} /> +234 9022227842
          </a>
          <button
            onClick={() => goListings()}
            className="hidden md:block text-[12px] px-4 py-2 bg-foreground text-background hover:bg-foreground/85 transition-colors tracking-wide"
          >
            View Properties
          </button>
          {favs.size > 0 && (
            <div className="relative">
              <Heart size={18} className="text-accent fill-accent" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[9px] flex items-center justify-center font-medium">{favs.size}</span>
            </div>
          )}
          <button onClick={() => setMobileNav(!mobileNav)} className="lg:hidden p-1.5">
            {mobileNav ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileNav && (
        <div className="lg:hidden bg-background border-t border-border px-5 py-4 flex flex-col gap-4 text-sm">
          {["buy", "rent", "book"].map(d => (
            <button key={d} onClick={() => { goListings(d); setMobileNav(false); }} className="capitalize text-left text-foreground/60 hover:text-foreground py-1">{d}</button>
          ))}
          <button onClick={() => { setAuthMode("login"); setPage("auth"); setAuthMessage(""); setMobileNav(false); }} className="capitalize text-left text-foreground/60 hover:text-foreground py-1">Login</button>
          <button onClick={() => { setAuthMode("signup"); setPage("auth"); setAuthMessage(""); setMobileNav(false); }} className="capitalize text-left text-foreground/60 hover:text-foreground py-1">Sign up</button>
          <hr className="border-border" />
          <a href="tel:+2349022227842" className="flex items-center gap-2 text-foreground/60"><Phone size={14} /> +234 9022227842</a>
          <a href="mailto:hello@elevate.re" className="flex items-center gap-2 text-foreground/60"><Mail size={14} /> hello@elevate.re</a>
        </div>
      )}
    </nav>
  );

  // ── Footer ─────────────────────────────────────────────────────────────────

  const footer = (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-accent flex items-center justify-center"><Building2 size={13} className="text-white" /></div>
              <span style={serif} className="text-background text-lg font-semibold tracking-[0.06em]">ELEVATE</span>
            </div>
            <p className="text-background/35 text-sm leading-relaxed mb-6 max-w-xs">
              New York's most trusted name in luxury real estate. Apartments, commercial buildings, and premier land since 2009.
            </p>
            <div className="flex gap-2.5">
              {[Instagram, Twitter, Linkedin, Globe].map((Icon, i) => (
                <button key={i} className="w-8 h-8 bg-background/[0.06] flex items-center justify-center text-background/35 hover:text-accent hover:bg-background/[0.10] transition-colors">
                  <Icon size={13} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-background text-[11px] uppercase tracking-[0.18em] mb-5">Properties</p>
            <ul className="space-y-3">
              {[
                { label: "Apartments for Sale", d: "buy", t: "apartment" },
                { label: "Apartments to Rent", d: "rent", t: "apartment" },
                { label: "Book an Apartment", d: "book", t: "apartment" },
                { label: "Commercial Buildings", d: "buy", t: "building" },
                { label: "Land & Development Sites", d: "buy", t: "land" },
              ].map(l => (
                <li key={l.label}>
                  <button onClick={() => goListings(l.d, l.t)} className="text-background/35 text-sm hover:text-background/70 transition-colors text-left">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-background text-[11px] uppercase tracking-[0.18em] mb-5">Contact</p>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-background/35"><Phone size={13} className="mt-0.5 flex-shrink-0 text-accent" />+234 9022227842</li>
              <li className="flex items-start gap-2.5 text-sm text-background/35"><Mail size={13} className="mt-0.5 flex-shrink-0 text-accent" />hello@elevate.re</li>
              <li className="flex items-start gap-2.5 text-sm text-background/35"><MapPin size={13} className="mt-0.5 flex-shrink-0 text-accent" />410 Park Avenue<br />New York, NY 10022</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-background/25 text-xs">© 2026 Elevate Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(l => (
              <button key={l} className="text-background/25 text-xs hover:text-background/50 transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );

  // ── Home Page ───────────────────────────────────────────────────────────────

  const renderHome = () => (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554793000-245d3a3c2a51?w=1920&h=1080&fit=crop&auto=format')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12">
            <p className="text-white/50 text-[11px] tracking-[0.28em] uppercase mb-5">Luxury Real Estate · New York</p>
            <h1 style={serif} className="text-white text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.04] mb-8 max-w-3xl">
              Find Your<br />Perfect<br /><em>Space</em>
            </h1>
            <div className="flex gap-10 mb-12">
              {[{ n: "1,200+", l: "Properties" }, { n: "$4.2B", l: "Sales Volume" }, { n: "850+", l: "Happy Clients" }].map(s => (
                <div key={s.l}>
                  <div style={serif} className="text-white text-2xl font-semibold">{s.n}</div>
                  <div className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Search widget */}
          <div className="bg-background/97 backdrop-blur-sm max-w-3xl shadow-2xl">
            <div className="flex border-b border-border">
              {["buy", "rent", "book"].map(d => (
                <button
                  key={d}
                  onClick={() => setDeal(d)}
                  className={`flex-1 py-3.5 text-sm font-medium capitalize tracking-[0.06em] transition-colors ${deal === d ? "bg-foreground text-background" : "text-foreground/50 hover:text-foreground"}`}
                >{d}</button>
              ))}
            </div>
            <div className="p-5 flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 border border-border px-3 py-2.5 bg-white focus-within:border-accent transition-colors">
                <MapPin size={15} className="text-accent flex-shrink-0" />
                <input
                  value={locSearch}
                  onChange={e => setLocSearch(e.target.value)}
                  placeholder="City, neighborhood, or address"
                  className="flex-1 text-sm text-foreground bg-transparent outline-none placeholder:text-foreground/35"
                />
              </div>
              <select
                value={typeF}
                onChange={e => setTypeF(e.target.value)}
                className="border border-border px-3 py-2.5 text-sm text-foreground bg-white outline-none"
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="building">Building</option>
                <option value="land">Land</option>
              </select>
              <button
                onClick={() => goListings(deal, typeF)}
                className="bg-accent text-white px-8 py-2.5 text-sm font-medium hover:bg-accent/85 transition-colors flex items-center gap-2 justify-center"
              >
                <Search size={15} /> Search
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 w-9 h-9 border border-white/30 flex items-center justify-center animate-bounce">
          <ChevronDown size={15} className="text-white/50" />
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-3">Browse By Category</p>
          <h2 style={serif} className="text-foreground text-3xl md:text-4xl font-medium mb-14">What Are You Looking For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "apartment", icon: <Home size={26} />, title: "Apartments & Condos", desc: "Studio to penthouse — curated residences in the city's most sought-after addresses.", img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=400&fit=crop&auto=format" },
              { type: "building", icon: <Building2 size={26} />, title: "Commercial Buildings", desc: "Office towers, mixed-use assets, and investment-grade commercial real estate.", img: "https://images.unsplash.com/photo-1692468459903-28803629b68e?w=600&h=400&fit=crop&auto=format" },
              { type: "land", icon: <Trees size={26} />, title: "Land & Development Sites", desc: "Shovel-ready parcels, entitled sites, and pristine residential lots.", img: "https://images.unsplash.com/photo-1515259387710-51e175f9ec6d?w=600&h=400&fit=crop&auto=format" },
            ].map(c => (
              <button key={c.type} onClick={() => goListings("buy", c.type)} className="group text-left overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">{c.icon}</div>
                </div>
                <div className="p-6">
                  <h3 style={serif} className="text-foreground text-xl font-medium mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-accent uppercase tracking-[0.14em]">{DATA.filter(p => p.type === c.type).length} listings available</span>
                    <ArrowRight size={15} className="text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-3">Hand-Picked</p>
              <h2 style={serif} className="text-foreground text-3xl md:text-4xl font-medium">Featured Properties</h2>
            </div>
            <button onClick={() => goListings()} className="hidden md:flex items-center gap-2 text-sm text-accent hover:text-accent/75 border-b border-accent pb-0.5 transition-colors">
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.filter(p => p.badge).slice(0, 3).map(p => (
              <PropCard key={p.id} p={p} deal={deal} favs={favs} onToggleFav={toggleFav} onSelect={goDetail} />
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <button onClick={() => goListings()} className="text-sm text-accent border-b border-accent pb-0.5">View All Properties</button>
          </div>
        </div>
      </section>

      {/* STATS / ABOUT */}
      <section id="about" className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-4">Our Track Record</p>
              <h2 style={serif} className="text-background text-3xl md:text-5xl font-medium leading-tight mb-6">
                Over 15 Years of<br />Excellence in<br /><em>Real Estate</em>
              </h2>
              <p className="text-background/45 text-sm leading-relaxed mb-10">
                Since 2009, Elevate has represented buyers, sellers, and investors across New York's most prestigious residential and commercial markets. Our team of expert advisors brings unmatched market knowledge and discretion to every transaction.
              </p>
              <button onClick={() => goListings()} className="bg-accent text-white text-sm px-8 py-3.5 hover:bg-accent/85 transition-colors flex items-center gap-2">
                Explore Properties <ArrowRight size={15} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "$4.2B", l: "Total Sales Volume" },
                { n: "1,850+", l: "Transactions Closed" },
                { n: "97%", l: "Client Satisfaction" },
                { n: "48", l: "Expert Advisors" },
              ].map(s => (
                <div key={s.l} className="bg-background/[0.04] border border-background/[0.07] p-7">
                  <div style={serif} className="text-accent text-3xl font-semibold mb-2">{s.n}</div>
                  <div className="text-background/35 text-[10px] tracking-[0.18em] uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-3 text-center">The Elevate Difference</p>
          <h2 style={serif} className="text-foreground text-3xl md:text-4xl font-medium mb-16 text-center">Why Choose Elevate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon: <Award size={22} />, title: "Market-Leading Expertise", desc: "Our advisors average 12 years of experience in New York real estate, with deep specialization in both residential and commercial transactions." },
              { icon: <Shield size={22} />, title: "Absolute Discretion", desc: "Every transaction is handled with the highest standards of confidentiality. Many of our clients are public figures who trust us with their most private decisions." },
              { icon: <TrendingUp size={22} />, title: "Maximum Return", desc: "We negotiate relentlessly on your behalf. Our clients consistently achieve above-market results — whether buying, selling, or investing." },
            ].map(c => (
              <div key={c.title} className="bg-white p-8 shadow-sm border-l-2 border-accent">
                <div className="w-11 h-11 bg-accent/10 flex items-center justify-center mb-6 text-accent">{c.icon}</div>
                <h3 style={serif} className="text-foreground text-xl font-medium mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-3">Client Stories</p>
          <h2 style={serif} className="text-foreground text-3xl md:text-4xl font-medium mb-14">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Alexandra found us a penthouse that wasn't even listed publicly. The Meridian was beyond what we thought possible. The process was seamless from first showing to closing.", name: "William & Catherine Park", role: "Purchased The Meridian Penthouse", photo: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=60&h=60&fit=crop&auto=format" },
              { quote: "James handled the acquisition of the Harrington Tower with extraordinary skill. He understood the investment thesis from day one and negotiated 6% below asking.", name: "David Thornton", role: "Acquired Harrington Commerce Tower", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&auto=format" },
              { quote: "We were intimidated by the land acquisition process, but Marcus walked us through every step. The Greenwich lot is everything we hoped for.", name: "Sarah & Michael Chen", role: "Purchased Greenwich Estate Lot", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&auto=format" },
            ].map(t => (
              <div key={t.name} className="bg-white p-8 shadow-sm">
                <div className="flex mb-5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} className="text-accent fill-accent" />)}
                </div>
                <p style={serif} className="text-foreground text-[15px] leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-10 h-10 object-cover rounded-full" />
                  <div>
                    <div className="text-[13px] font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT LISTINGS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-3">Just Added</p>
              <h2 style={serif} className="text-foreground text-3xl md:text-4xl font-medium">Latest Listings</h2>
            </div>
            <button onClick={() => goListings()} className="hidden md:flex items-center gap-2 text-sm text-accent hover:text-accent/75 border-b border-accent pb-0.5">
              Browse All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DATA.slice(0, 4).map(p => (
              <PropCard key={p.id} p={p} deal={deal} favs={favs} onToggleFav={toggleFav} onSelect={goDetail} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-24 bg-[#2a2720]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-4">Get In Touch</p>
              <h2 style={serif} className="text-background text-3xl md:text-5xl font-medium leading-tight mb-6">
                Begin Your<br /><em>Search Today</em>
              </h2>
              <p className="text-background/45 text-sm leading-relaxed mb-10">
                Whether you're buying your first home, expanding your portfolio, or searching for the perfect piece of land, our advisors are here to guide you through every step.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <Phone size={15} />, label: "Call Us", val: "+234 9022227842" },
                  { icon: <Mail size={15} />, label: "Email Us", val: "hello@elevate.re" },
                  { icon: <MapPin size={15} />, label: "Visit Us", val: "410 Park Avenue, New York, NY 10022" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">{c.icon}</div>
                    <div>
                      <div className="text-background/35 text-[10px] uppercase tracking-[0.16em] mb-0.5">{c.label}</div>
                      <div className="text-background text-sm">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background/[0.04] border border-background/[0.08] p-8">
              <h3 style={serif} className="text-background text-xl mb-6">Send a Message</h3>
              {contactSent ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={40} className="text-accent mx-auto mb-4" />
                  <p style={serif} className="text-background text-xl mb-2">Message Received</p>
                  <p className="text-background/40 text-sm">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {[
                    { ph: "Your Name", type: "text", key: "name" },
                    { ph: "Email Address", type: "email", key: "email" },
                    { ph: "Phone Number", type: "tel", key: "phone" },
                  ].map(f => (
                    <input
                      key={f.key} type={f.type} placeholder={f.ph}
                      value={contactForm[f.key]}
                      onChange={e => setContactForm(c => ({ ...c, [f.key]: e.target.value }))}
                      className="w-full bg-background/[0.06] border border-background/[0.10] text-background placeholder:text-background/25 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors"
                    />
                  ))}
                  <select
                    value={contactForm.interest}
                    onChange={e => setContactForm(c => ({ ...c, interest: e.target.value }))}
                    className="w-full bg-background/[0.06] border border-background/[0.10] text-background/50 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors"
                  >
                    <option value="">I'm interested in...</option>
                    <option>Buying a property</option>
                    <option>Renting a property</option>
                    <option>Booking an apartment</option>
                    <option>Selling my property</option>
                    <option>Investment advice</option>
                  </select>
                  <textarea
                    placeholder="Your message..."
                    rows={4}
                    value={contactForm.msg}
                    onChange={e => setContactForm(c => ({ ...c, msg: e.target.value }))}
                    className="w-full bg-background/[0.06] border border-background/[0.10] text-background placeholder:text-background/25 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                  <button
                    onClick={() => { if (contactForm.name && contactForm.email) setContactSent(true); }}
                    className="w-full bg-accent text-white py-3.5 text-sm font-medium hover:bg-accent/85 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // ── Listings Page ───────────────────────────────────────────────────────────

  const renderListings = () => (
    <div className="min-h-screen bg-background pt-16">
      <div className="bg-foreground py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <button onClick={() => setPage("home")} className="text-background/40 text-[11px] uppercase tracking-wider mb-4 flex items-center gap-1 hover:text-background/70 transition-colors">
            <ChevronLeft size={13} /> Home
          </button>
          <h1 style={serif} className="text-background text-4xl font-medium mb-1">Properties</h1>
          <p className="text-background/35 text-sm">{filtered.length} listing{filtered.length !== 1 ? "s" : ""} found</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex bg-white border border-border">
            {["buy", "rent", "book"].map(d => (
              <button key={d} onClick={() => setDeal(d)} className={`px-5 py-2.5 text-sm capitalize tracking-[0.04em] transition-colors ${deal === d ? "bg-foreground text-background" : "text-foreground/50 hover:text-foreground"}`}>{d}</button>
            ))}
          </div>
          <div className="flex bg-white border border-border">
            {["all", "apartment", "building", "land"].map(t => (
              <button key={t} onClick={() => setTypeF(t)} className={`px-4 py-2.5 text-sm capitalize tracking-[0.04em] transition-colors ${typeF === t ? "bg-accent text-white" : "text-foreground/50 hover:text-foreground"}`}>{t}</button>
            ))}
          </div>
          <div className="flex items-center gap-2 border border-border bg-white px-3 py-2 flex-1 max-w-64">
            <Search size={14} className="text-foreground/35" />
            <input value={locSearch} onChange={e => setLocSearch(e.target.value)} placeholder="Search location…" className="flex-1 text-sm outline-none placeholder:text-foreground/35 bg-transparent" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <select value={sort} onChange={e => setSort(e.target.value)} className="border border-border bg-white px-3 py-2.5 text-sm text-foreground outline-none">
              <option value="featured">Top Rated</option>
              <option value="price_asc">Price: Low–High</option>
              <option value="price_desc">Price: High–Low</option>
              <option value="newest">Newest Build</option>
            </select>
            <button onClick={() => setViewMode("grid")} className={`p-2.5 border transition-colors ${viewMode === "grid" ? "border-accent bg-accent text-white" : "border-border bg-white text-foreground/50 hover:text-foreground"}`}><LayoutGrid size={15} /></button>
            <button onClick={() => setViewMode("list")} className={`p-2.5 border transition-colors ${viewMode === "list" ? "border-accent bg-accent text-white" : "border-border bg-white text-foreground/50 hover:text-foreground"}`}><List size={15} /></button>
          </div>
        </div>

        <div className="mb-8">
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 text-sm text-foreground/55 hover:text-foreground border border-border bg-white px-4 py-2 transition-colors">
            <SlidersHorizontal size={14} /> Advanced Filters <ChevronDown size={13} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>
          {showFilters && (
            <div className="mt-3 bg-white border border-border p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Min Price", value: minP, set: setMinP, opts: [[0, "No Min"], [500000, "$500K"], [1000000, "$1M"], [5000000, "$5M"], [10000000, "$10M"]] },
                { label: "Max Price", value: maxP, set: setMaxP, opts: [[100000000, "No Max"], [1000000, "$1M"], [5000000, "$5M"], [10000000, "$10M"], [20000000, "$20M"], [50000000, "$50M"]] },
                { label: "Min Bedrooms", value: minBeds, set: setMinBeds, opts: [[0, "Any"], [1, "1+"], [2, "2+"], [3, "3+"], [4, "4+"]] },
              ].map(f => (
                <div key={f.label}>
                  <label className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground block mb-2">{f.label}</label>
                  <select value={f.value} onChange={e => f.set(Number(e.target.value))} className="w-full border border-border px-3 py-2.5 text-sm outline-none">
                    {f.opts.map(([v, l]) => <option key={String(v)} value={v}>{l}</option>)}
                  </select>
                </div>
              ))}
              <div className="flex items-end">
                <button onClick={() => { setMinP(0); setMaxP(100000000); setMinBeds(0); setLocSearch(""); }} className="w-full border border-accent text-accent px-4 py-2.5 text-sm hover:bg-accent hover:text-white transition-colors">
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-28">
            <p style={serif} className="text-2xl text-foreground/30 mb-3">No properties found</p>
            <p className="text-sm text-muted-foreground mb-6">Try adjusting your search or filters</p>
            <button onClick={() => { setTypeF("all"); setMinP(0); setMaxP(100000000); setMinBeds(0); setLocSearch(""); }} className="text-sm text-accent border-b border-accent pb-0.5">Reset All Filters</button>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
            {filtered.map(p => (
              <PropCard key={p.id} p={p} deal={deal} favs={favs} onToggleFav={toggleFav} onSelect={goDetail} layout={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // ── Property Detail Page ────────────────────────────────────────────────────

  const renderDetail = () => {
    if (!prop) return null;
    return (
      <div className="min-h-screen bg-background pt-16">
        <div className="bg-white border-b border-border py-3 px-6 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button onClick={() => setPage("listings")} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft size={15} /> Back to Listings
            </button>
            <div className="flex items-center gap-4">
              <button onClick={() => toggleFav(prop.id)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Heart size={14} className={favs.has(prop.id) ? "fill-accent text-accent" : ""} />
                {favs.has(prop.id) ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="relative bg-muted aspect-[16/10] overflow-hidden mb-3">
                <img src={prop.images[imgIdx]} alt={`${prop.title} — view ${imgIdx + 1}`} className="w-full h-full object-cover" />
                {prop.images.length > 1 && (
                  <>
                    <button onClick={() => setImgIdx(i => (i - 1 + prop.images.length) % prop.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 hover:bg-white flex items-center justify-center transition-colors shadow-md"><ChevronLeft size={18} /></button>
                    <button onClick={() => setImgIdx(i => (i + 1) % prop.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 hover:bg-white flex items-center justify-center transition-colors shadow-md"><ChevronRight size={18} /></button>
                  </>
                )}
                {prop.badge && <span className="absolute top-4 left-4 bg-accent text-white text-[10px] px-3 py-1 uppercase tracking-[0.14em]">{prop.badge}</span>}
                <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2.5 py-1">{imgIdx + 1} / {prop.images.length}</span>
              </div>
              {prop.images.length > 1 && (
                <div className="flex gap-2 mb-10">
                  {prop.images.map((img, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} className={`w-20 h-14 overflow-hidden flex-shrink-0 transition-opacity ${i === imgIdx ? "ring-2 ring-accent" : "opacity-55 hover:opacity-85"}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="mb-7">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="capitalize">{prop.type}</span><span>·</span>
                  {prop.deals.map(d => <span key={d} className="capitalize">{d}</span>)}
                  {prop.year && <><span>·</span><span>Built {prop.year}</span></>}
                </div>
                <h1 style={serif} className="text-foreground text-3xl md:text-4xl font-medium mb-2">{prop.title}</h1>
                <p className="text-muted-foreground flex items-center gap-1.5 text-sm"><MapPin size={13} />{prop.address}, {prop.city}</p>
              </div>

              <div className="bg-white border border-border p-5 grid grid-cols-2 md:grid-cols-4 gap-5 mb-9">
                {prop.beds !== undefined && <div><div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Bedrooms</div><div className="flex items-center gap-1.5 text-foreground font-medium text-sm"><BedDouble size={14} className="text-accent" />{prop.beds}</div></div>}
                {prop.baths !== undefined && <div><div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Bathrooms</div><div className="flex items-center gap-1.5 text-foreground font-medium text-sm"><Bath size={14} className="text-accent" />{prop.baths}</div></div>}
                <div><div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Area</div><div className="flex items-center gap-1.5 text-foreground font-medium text-sm"><Maximize2 size={14} className="text-accent" />{fa(prop.sqft, prop.type)}</div></div>
                {prop.floors !== undefined && <div><div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Floors</div><div className="flex items-center gap-1.5 text-foreground font-medium text-sm"><Building2 size={14} className="text-accent" />{prop.floors}</div></div>}
              </div>

              <div className="mb-9">
                <h2 style={serif} className="text-foreground text-xl font-medium mb-4">About This Property</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.desc}</p>
              </div>

              <div className="mb-9">
                <h2 style={serif} className="text-foreground text-xl font-medium mb-5">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {prop.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground/70"><Check size={13} className="text-accent flex-shrink-0" />{f}</div>
                  ))}
                </div>
              </div>

              <div className="mb-9">
                <h2 style={serif} className="text-foreground text-xl font-medium mb-4">Location</h2>
                <div className="h-64 bg-muted border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={30} className="text-accent mx-auto mb-2" />
                    <p className="font-medium text-foreground text-sm">{prop.address}</p>
                    <p className="text-muted-foreground text-sm">{prop.city}</p>
                    <p className="text-xs mt-2 text-accent">Interactive map available on full access</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                <div className="bg-white border border-border p-6 shadow-sm">
                  <span style={serif} className="text-foreground text-3xl font-semibold">{fp(prop.price, deal, prop)}</span>
                  {deal === "buy" && prop.rentPrice && <p className="text-xs text-muted-foreground mt-1 mb-3">Also rentable: ${prop.rentPrice.toLocaleString()}/mo</p>}
                  <div className="flex items-center gap-1 mb-5 mt-1"><Star size={13} className="text-accent fill-accent" /><span className="text-sm text-foreground/60">{prop.stars} · {prop.reviews} reviews</span></div>
                  <div className="flex gap-1.5">
                    {prop.deals.map(d => (
                      <button key={d} onClick={() => setDeal(d)} className={`flex-1 py-2 text-[11px] uppercase tracking-[0.12em] capitalize transition-colors ${deal === d ? "bg-foreground text-background" : "border border-border text-foreground/50 hover:text-foreground"}`}>{d}</button>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-border p-6 shadow-sm">
                  <h3 style={serif} className="text-foreground text-lg mb-5">
                    {deal === "book" ? "Book This Apartment" : deal === "rent" ? "Apply to Rent" : "Schedule a Viewing"}
                  </h3>
                  {booked ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-3"><CheckCircle2 size={22} className="text-accent" /></div>
                      <p style={serif} className="text-foreground text-lg mb-1.5">Request Received!</p>
                      <p className="text-sm text-muted-foreground">We'll confirm within 2 business hours.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <input type="text" placeholder="Full Name *" value={bookForm.name} onChange={e => setBookForm(f => ({ ...f, name: e.target.value }))} className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-foreground/35" />
                      <input type="email" placeholder="Email Address *" value={bookForm.email} onChange={e => setBookForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-foreground/35" />
                      <input type="tel" placeholder="Phone Number" value={bookForm.phone} onChange={e => setBookForm(f => ({ ...f, phone: e.target.value }))} className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-foreground/35" />
                      <div className="relative">
                        <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                        <input type="date" min={new Date().toISOString().split("T")[0]} value={bookForm.date} onChange={e => setBookForm(f => ({ ...f, date: e.target.value }))} className="w-full border border-border pl-9 pr-3 py-2.5 text-sm outline-none focus:border-accent transition-colors text-foreground/65" />
                      </div>
                      <textarea placeholder="Any questions or special requests…" rows={3} value={bookForm.msg} onChange={e => setBookForm(f => ({ ...f, msg: e.target.value }))} className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none placeholder:text-foreground/35" />

                      <button onClick={submitBook} className="w-full bg-accent text-white py-3.5 text-sm font-medium hover:bg-accent/85 transition-colors flex items-center justify-center gap-2">
                        {deal === "book" ? "Book Now" : deal === "rent" ? "Apply Now" : "Request Viewing"} <ArrowRight size={14} />
                      </button>
                      <p className="text-[11px] text-muted-foreground text-center">No obligation · We'll reach out to confirm</p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-border p-5 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-3">Your Advisor</p>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={prop.agentPhoto} alt={prop.agentName} className="w-12 h-12 object-cover rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{prop.agentName}</p>
                      <p className="text-xs text-muted-foreground">Senior Property Advisor</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a href={`tel:${prop.agentPhone}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"><Phone size={12} className="text-accent" />{prop.agentPhone}</a>
                    <a href={`mailto:${prop.agentEmail}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"><Mail size={12} className="text-accent" />{prop.agentEmail}</a>
                  </div>

                  <div className="mt-6 rounded-3xl border border-border bg-slate-50 p-4 text-sm text-foreground shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">Customer Service</p>
                    <div className="space-y-3">
                      <div className="rounded-2xl bg-white p-3 border border-border">
                        <p className="text-[12px] font-medium text-foreground mb-1">Bot Assistant</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">Ask questions about listings, pricing, and availability.</p>
                      </div>
                      <div className="rounded-2xl bg-white p-3 border border-border">
                        <p className="text-[12px] font-medium text-foreground mb-1">Live Support</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">Chat with our service team for personal guidance.</p>
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <button className="w-full rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors">Open Bot Chat</button>
                        <button className="w-full rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-slate-100 transition-colors">Contact Support</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {DATA.filter(p => p.id !== prop.id && p.type === prop.type).length > 0 && (
            <div className="mt-20 border-t border-border pt-14">
              <h2 style={serif} className="text-foreground text-2xl font-medium mb-8">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DATA.filter(p => p.id !== prop.id && p.type === prop.type).slice(0, 3).map(p => (
                  <PropCard key={p.id} p={p} deal={deal} favs={favs} onToggleFav={toggleFav} onSelect={goDetail} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderAuth = () => (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-[2rem] bg-accent/10 p-10 text-white">
            <p className="text-sm uppercase tracking-[0.26em] text-accent mb-6">{authMode === "login" ? "Welcome back" : "Create your account"}</p>
            <h1 style={serif} className="text-4xl font-semibold mb-6">
              {authMode === "login" ? "Sign in to Elevate" : "Create your Elevate account"}
            </h1>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {authMode === "login"
                ? "Access saved listings, booking history, and faster service."
                : "Get started with a free account and save your favorite listings for faster access."
              }
            </p>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6">
              <h2 className="text-sm uppercase tracking-[0.22em] text-accent mb-4">Why Elevate?</h2>
              <ul className="space-y-4 text-sm text-foreground/90">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent"></span>{authMode === "login" ? "Quick access to your saved properties." : "Save favorite listings and receive alerts."}</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent"></span>{authMode === "login" ? "Secure logins with your email." : "Secure account access and booking history."}</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent"></span>{authMode === "login" ? "Faster checkout for requests." : "Faster checkout for all property requests."}</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-10 shadow-xl">
            <div className="flex gap-3 mb-8">
              {[
                { key: "login", label: "Login" },
                { key: "signup", label: "Sign up" },
              ].map(mode => (
                <button
                  key={mode.key}
                  onClick={() => { setAuthMode(mode.key); setAuthMessage(""); }}
                  className={`flex-1 rounded-full px-5 py-3 text-sm font-medium transition ${authMode === mode.key ? "bg-foreground text-background" : "bg-background text-foreground/70 hover:text-foreground"}`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {authMode === "signup" && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={authForm.name}
                  onChange={e => setAuthForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                />
              )}
              <input
                type="email"
                placeholder="Email address"
                value={authForm.email}
                onChange={e => setAuthForm(f => ({ ...f, email: e.target.value }))}
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                value={authForm.password}
                onChange={e => setAuthForm(f => ({ ...f, password: e.target.value }))}
                className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
              />
              {authMode === "signup" && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={authForm.confirmPassword}
                  onChange={e => setAuthForm(f => ({ ...f, confirmPassword: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                />
              )}
              <button
                onClick={() => {
                  if (!authForm.email || !authForm.password || (authMode === "signup" && (!authForm.name || !authForm.confirmPassword))) {
                    setAuthMessage("Please complete all required fields.");
                    return;
                  }
                  if (authMode === "signup" && authForm.password !== authForm.confirmPassword) {
                    setAuthMessage("Passwords do not match.");
                    return;
                  }
                  setAuthMessage(authMode === "login" ? "Logged in successfully." : "Account created successfully.");
                  setTimeout(() => setPage("home"), 1200);
                }}
                className="w-full rounded-full bg-accent px-4 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
              >
                {authMode === "login" ? "Login" : "Create Account"}
              </button>
              {authMessage && <p className="text-sm text-accent/90">{authMessage}</p>}
              <div className="pt-4 border-t border-border text-sm text-foreground/60">
                {authMode === "login"
                  ? "Need an account? Switch to Sign up to create one."
                  : "Already have an account? Switch to Login to sign in."
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ── Root Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      {navbar}
      {page === "home" && renderHome()}
      {page === "listings" && renderListings()}
      {page === "detail" && renderDetail()}
      {page === "auth" && renderAuth()}
      {footer}
    </div>
  );
}
