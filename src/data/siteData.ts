export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  heroTagline: string;
  fullDesc: string;
  benefits: { title: string; desc: string; icon: string }[];
  whatsIncluded: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  specifications: { [key: string]: string };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "electrical" | "cctv" | "lighting" | "sockets";
  location: string;
  description: string;
  image: string;
  details: string[];
  date: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  readTime: string;
  publishDate: string;
  category: string;
  excerpt: string;
  metaDesc: string;
  content: {
    sectionHeading: string;
    text: string[];
    bulletPoints?: string[];
  }[];
}

export const SITE_INFO = {
  companyName: "P SELVAM LTD",
  brandName: "P Selvam",
  tagline: "Electrical & CCTV Experts",
  companyNumber: "17510506",
  registeredOffice: "91A Faringdon Road, Swindon, United Kingdom, SN1 5DH",
  phone: "+44 7774 453041",
  phoneDisplay: "07774 453041",
  email: "cctv@pselvam.com",
  domain: "selvamcctv.co.uk",
  url: "https://selvamcctv.co.uk",
  whatsAppLink: "https://wa.me/447774453041?text=Hi%20P%20Selvam%20team,%20I%20would%20like%20to%20enquire%20about%20your%20services.",
  openingHours: "Mon – Fri: 09:00 – 18:00 | Sat – Sun: 10:00 – 16:00",
  yearEstablished: "2024",
  copyrightYear: "2026",
  serviceAreas: [
    {
      region: "Swindon & Immediate Surroundings",
      towns: ["Swindon Central", "Old Town", "Wroughton", "Highworth", "Blunsdon", "Purton", "Wanborough"],
      description: "Our home base. Rapid response within 30-45 minutes across all SN postcodes.",
    },
    {
      region: "Wiltshire",
      towns: ["Royal Wootton Bassett", "Marlborough", "Chippenham", "Calne", "Devizes", "Malmesbury"],
      description: "Comprehensive coverage across north and central Wiltshire for residential and commercial premises.",
    },
    {
      region: "Gloucestershire",
      towns: ["Cirencester", "Gloucester", "Cheltenham", "Stroud", "Tetbury", "Fairford"],
      description: "Premium electrical and bespoke 4K security installations throughout the Cotswolds and Gloucestershire.",
    },
    {
      region: "Oxfordshire",
      towns: ["Faringdon", "Wantage", "Didcot", "Abingdon", "Witney", "Oxford South"],
      description: "Regular installations throughout western and southern Oxfordshire with dedicated mobile engineers.",
    },
    {
      region: "Berkshire",
      towns: ["Newbury", "Hungerford", "Lambourn", "Reading West"],
      description: "Specialist CCTV surveillance and electrical contracting across West Berkshire corridors.",
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "electrical-installation",
    slug: "electrical-installation",
    title: "Electrical Installation",
    badge: "BS 7671 Compliant",
    shortDesc: "Complete domestic and commercial wiring, consumer units, EV-ready circuits, and testing.",
    heroTagline: "Precision domestic and commercial electrical services across Swindon & Wiltshire",
    fullDesc:
      "From full property rewires to smart consumer unit upgrades and dedicated high-draw electrical circuits, P Selvam delivers precision electrical contracting compliant with the latest UK Wiring Regulations (BS 7671). Whether you are renovating a Victorian terrace, fitting out a retail shop, or preparing your driveway for EV charging, our certified engineers ensure complete safety, certification, and energy efficiency.",
    benefits: [
      {
        title: "Fully Certified Workmanship",
        desc: "All electrical work is tested and documented to strict UK Building Regulations (Part P).",
        icon: "ShieldCheck",
      },
      {
        title: "Energy & Cost Efficient",
        desc: "Modern cabling and high-efficiency circuit distribution to lower energy waste.",
        icon: "Zap",
      },
      {
        title: "Transparent Fixed Quotes",
        desc: "No hidden charges. Detailed breakdown of parts, labour, and safety sign-offs.",
        icon: "FileCheck",
      },
      {
        title: "Emergency Response",
        desc: "Swift troubleshooting for tripping circuits, blown boards, and power failures.",
        icon: "Clock",
      },
    ],
    whatsIncluded: [
      "Full and partial domestic & commercial rewiring",
      "Modern 18th Edition metal consumer unit (fuse box) upgrades with RCBO & SPD protection",
      "Dedicated circuits for EV chargers, heat pumps, electric showers, and induction hobs",
      "Electrical Installation Condition Reports (EICR) for landlords and homebuyers",
      "Fault-finding, circuit isolation, and emergency repair call-outs",
      "Earthing and equipotential bonding verification",
    ],
    processSteps: [
      {
        step: "01",
        title: "Initial Consultation & Scope",
        desc: "Discuss your requirements, load calculations, and survey appointment options.",
      },
      {
        step: "02",
        title: "On-Site Survey & Testing",
        desc: "Physical inspection of your current consumer unit, cable routes, and earthing arrangements.",
      },
      {
        step: "03",
        title: "Clear, Itemised Quotation",
        desc: "Written quote detailing materials, installation timeline, and certification.",
      },
      {
        step: "04",
        title: "Clean Installation",
        desc: "Careful cable runs, minimal disruption, and tidy finishes using dust extraction.",
      },
      {
        step: "05",
        title: "Testing & Handover",
        desc: "Comprehensive calibrated instrument testing and official compliance certificates issued.",
      },
    ],
    faqs: [
      {
        q: "How often should an electrical consumer unit (fuse box) be replaced?",
        a: "Old fuse boxes with rewireable fuses or wooden backboards should be replaced promptly. Modern consumer units with dual RCD/RCBO and Surge Protection Devices (SPD) protect against fire risks and electric shocks to current 18th Edition standards.",
      },
      {
        q: "Do you supply Electrical Installation Condition Reports (EICR)?",
        a: "Yes. We carry out comprehensive EICR inspections for landlords, property managers, and prospective property buyers across Swindon and neighbouring regions.",
      },
      {
        q: "What areas do you cover for urgent electrical emergencies?",
        a: "We prioritise emergency callouts in Swindon, Royal Wootton Bassett, Highworth, Faringdon, Marlborough, and Cirencester.",
      },
    ],
  },
  {
    id: "cctv-installation",
    slug: "cctv-installation",
    title: "CCTV Installation & Servicing",
    badge: "Ultra HD & Mobile Viewing",
    shortDesc: "Bespoke 4K cameras, full-colour night vision, remote smartphone streaming, and NVR setup.",
    heroTagline: "Commercial-grade surveillance engineered for homes and businesses in Swindon",
    fullDesc:
      "Protect your family, premises, and assets with smart CCTV systems engineered by P Selvam. We supply and install industry-leading 5MP and 4K Ultra HD IP camera systems featuring intelligent AI human/vehicle detection, audio capture, full-colour night vision (ColorVu / Starlight), and seamless smartphone access from anywhere in the world.",
    benefits: [
      {
        title: "Crystal-Clear 4K Clarity",
        desc: "Distinguish vehicle number plates, faces, and critical details day and night.",
        icon: "Eye",
      },
      {
        title: "Zero Monthly Subscriptions",
        desc: "Locally recorded on high-capacity surveillance hard drives without mandatory cloud fees.",
        icon: "ShieldAlert",
      },
      {
        title: "Live Mobile Streaming",
        desc: "Instant push notifications and real-time playback via iOS and Android apps.",
        icon: "Smartphone",
      },
      {
        title: "Concealed Wiring",
        desc: "Neat, discreet cable management with weatherproof conduit and IP67 junction boxes.",
        icon: "Sparkles",
      },
    ],
    whatsIncluded: [
      "Supply of weather-resistant IP67 turret, dome, or bullet cameras",
      "Network Video Recorder (NVR) with dedicated Western Digital Purple surveillance hard drive",
      "Full-colour night vision technology for 24/7 coloured footage in complete darkness",
      "AI human and vehicle smart filtering to eliminate false alarms from rain or pets",
      "Complete smartphone application configuration on all your household or team devices",
      "Annual maintenance checkups, camera realignment, lens cleaning, and firmware updates",
    ],
    processSteps: [
      {
        step: "01",
        title: "Security Assessment",
        desc: "Identify blind spots, vulnerable entry points, lighting conditions, and property boundaries.",
      },
      {
        step: "02",
        title: "System Design",
        desc: "Select camera models, focal lengths, hard drive storage capacity, and cable routing.",
      },
      {
        step: "03",
        title: "Precision Fitting",
        desc: "High-grade CAT6 Ethernet runs, secure mounting, and moisture-sealed terminations.",
      },
      {
        step: "04",
        title: "Network & App Configuration",
        desc: "Set up remote access, notifications, motion detection masks, and secure user logins.",
      },
      {
        step: "05",
        title: "Client Training & Aftercare",
        desc: "We walk you through exporting clips, adjusting settings, and provide full post-installation support.",
      },
    ],
    faqs: [
      {
        q: "Can I view my CCTV footage on my phone while away from home?",
        a: "Yes. All our systems are networked to a secure mobile application allowing you to view live streams, review recordings, and receive smart motion alerts anywhere with internet access.",
      },
      {
        q: "Are there any recurring monthly subscription fees?",
        a: "No. Our systems record locally to your on-site NVR hard drive. You own your footage with zero mandatory monthly cloud subscriptions.",
      },
      {
        q: "How does night vision work in complete darkness?",
        a: "We specify cameras equipped with ultra-low-light sensors and warm supplementary illumination (such as ColorVu technology) which produce vivid, full-colour video even in pitch black conditions.",
      },
    ],
  },
  {
    id: "light-fittings",
    slug: "light-fittings",
    title: "Light Fittings & Architectural Lighting",
    badge: "Energy-Efficient LED",
    shortDesc: "Indoor ambiance, outdoor security floodlights, dimmable LED spotlights, and landscape lighting.",
    heroTagline: "Transform your spaces with modern, energy-saving interior & exterior lighting",
    fullDesc:
      "Lighting creates the atmosphere of your home and the security of your grounds. P Selvam specialises in stylish indoor lighting solutions—from flush-mounted dimmable LED downlights to feature chandeliers—as well as robust exterior PIR security floodlights and weatherproof garden lighting.",
    benefits: [
      {
        title: "Up to 85% Energy Savings",
        desc: "Low-wattage high-output LED technologies that immediately lower your electricity bill.",
        icon: "Lightbulb",
      },
      {
        title: "Enhanced Home Security",
        desc: "PIR motion sensor floodlights that deter unwanted visitors and illuminate pathways.",
        icon: "Shield",
      },
      {
        title: "Custom Ambiance",
        desc: "Smart dimming systems, warm-to-cool colour temperature tuning, and accent illumination.",
        icon: "Palette",
      },
      {
        title: "Flawless Ceiling Finishes",
        desc: "Precision core drilling with integrated dust collection for minimal plaster disruption.",
        icon: "CheckCircle",
      },
    ],
    whatsIncluded: [
      "Ultra-slim fire-rated LED downlights with dimmable options",
      "PIR motion-activated exterior security floodlights and driveway lighting",
      "Pendant, chandelier, and modern flush ceiling fixture installation",
      "Under-cabinet kitchen LED strip lighting and plinth illuminations",
      "IP65/IP66 weatherproof garden and decking lighting installations",
      "Smart lighting switch replacements (e.g. Lutron, smart relay modules)",
    ],
    processSteps: [
      {
        step: "01",
        title: "Lighting Design Consult",
        desc: "Assess room layouts, natural light, colour temperatures, and desired mood.",
      },
      {
        step: "02",
        title: "Circuit & Load Verification",
        desc: "Verify circuit loads, neutral wire presence for smart dimmers, and switch positions.",
      },
      {
        step: "03",
        title: "Clean Installation",
        desc: "Precision drilling, cable pulling, fire hoods/fire-rated units, and secure fixings.",
      },
      {
        step: "04",
        title: "Adjustment & Demonstration",
        desc: "Calibrate dimmer minimums, beam angles, PIR sensitivity timers, and lux levels.",
      },
    ],
    faqs: [
      {
        q: "Are the downlights you install fire-rated?",
        a: "Yes, without exception. We only fit fire-rated downlights complying with UK Building Regulations Part B (fire safety) to preserve the structural fire barrier of your ceilings.",
      },
      {
        q: "Can I replace my standard wall switches with smart dimmer switches?",
        a: "Yes. We inspect your existing backbox depth and wiring to ensure compatibility with modern LED rotary or smart dimmers.",
      },
    ],
  },
  {
    id: "power-sockets",
    slug: "power-sockets",
    title: "Power Sockets & Electrical Outlets",
    badge: "Modern USB & Weatherproof",
    shortDesc: "Extra indoor sockets, USB-A/C fast charge sockets, appliance spurs, and IP66 outdoor power.",
    heroTagline: "Convenient, safe power exactly where you need it throughout your property",
    fullDesc:
      "Tired of dangerous extension leads cluttering your floors? P Selvam installs additional indoor power sockets, upgrades existing faceplates to sleek brushed steel or matte black designs with built-in USB-C fast-charging ports, and fits lockable IP66 weatherproof outdoor sockets for lawnmowers, pressure washers, and hot tubs.",
    benefits: [
      {
        title: "Fast-Charging Built In",
        desc: "Integrated USB-A and USB-C PD fast chargers eliminate bulky wall adapters.",
        icon: "BatteryCharging",
      },
      {
        title: "Safe Outdoor Power",
        desc: "Heavy-duty IP66 waterproof enclosures with dedicated RCD protection for garden power.",
        icon: "Umbrella",
      },
      {
        title: "Eliminate Extension Leads",
        desc: "Position sockets strategically behind entertainment centres, desks, and kitchen islands.",
        icon: "Sliders",
      },
      {
        title: "Designer Finishes",
        desc: "Choose from brushed chrome, polished brass, matte black, or classic white plates.",
        icon: "Layers",
      },
    ],
    whatsIncluded: [
      "Adding twin double sockets to existing ring final or radial circuits",
      "Upgrading old single faceplates to dual sockets with integrated USB-C PD ports",
      "Fused connection spurs for boilers, induction hobs, ovens, and extractor hoods",
      "IP66 lockable outdoor weatherproof garden sockets with direct RCD safety spurs",
      "Garage and workshop high-current power points and dedicated radial feeds",
      "Testing of loop impedance and earth fault safety for every installed socket",
    ],
    processSteps: [
      {
        step: "01",
        title: "Positioning Survey",
        desc: "Decide exact socket heights, aesthetic finishes, and nearest circuit connection.",
      },
      {
        step: "02",
        title: "Chasing or Trunking",
        desc: "Flush plaster chasing for invisible cables or neat mini-trunking based on your preference.",
      },
      {
        step: "03",
        title: "Connection & RCD Protection",
        desc: "Safe termination into the circuit with verified RCD shock protection.",
      },
      {
        step: "04",
        title: "Calibration & Certificate",
        desc: "Polarity, loop impedance, and RCD trip testing recorded before sign-off.",
      },
    ],
    faqs: [
      {
        q: "Can you install an outdoor socket for lawnmowers or hot tubs?",
        a: "Yes. We fit heavy-duty, IP66 weatherproof external sockets equipped with rubber seals and dedicated RCD safety switches.",
      },
      {
        q: "How messy is it to add new sockets in a finished living room?",
        a: "We use professional dust-extraction cutters to minimise mess, or can run surface-mounted discreet mini-trunking along skirting boards if you prefer to avoid plaster repairs.",
      },
    ],
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "basic",
    name: "Essential Home Guard",
    tagline: "Ideal for terraced homes, flats, and targeted perimeter deterrence",
    badge: "2-Camera System",
    popular: false,
    idealFor: "1-2 Bedroom Houses / Front & Rear Coverage",
    features: [
      "2x 5MP High-Definition Weatherproof Turret Cameras",
      "Full 30-metre Smart Night Vision (IR & Low-Light)",
      "4-Channel Network Video Recorder (NVR) with 1TB WD Purple HDD",
      "High-grade CAT6 internal/external cabling",
      "Live remote viewing app for iOS & Android smartphones",
      "Motion detection alerts & privacy masking",
      "Full installation, testing, and system handover",
      "12-month parts & workmanship warranty",
    ],
    specifications: {
      "Camera Count": "2 Turret / Dome Cameras",
      Resolution: "5MP Super HD (2560 x 1920)",
      Storage: "1TB Surveillance Hard Drive (~14 days recording)",
      "Night Vision": "Up to 30 Metres Smart IR",
      Audio: "Integrated one-way audio capture",
      "Mobile Access": "Included (Zero Subscription)",
      Weatherproofing: "IP67 Weather-sealed casing",
      Warranty: "12 Months Comprehensive",
    },
  },
  {
    id: "standard",
    name: "Complete Family Shield",
    tagline: "Our most popular package for semi-detached and detached homes",
    badge: "4-Camera System • Most Popular",
    popular: true,
    idealFor: "3-4 Bedroom Houses / Front, Driveway, Side & Garden",
    features: [
      "4x 4K Ultra HD (8MP) Starlight / ColorVu Smart Cameras",
      "24/7 Full-Colour Night Vision (vivid colour in pitch darkness)",
      "Smart AI Human & Vehicle Detection (eliminates false alarms)",
      "8-Channel 4K NVR with 2TB WD Purple Surveillance HDD",
      "Integrated audio recording and perimeter line crossing alerts",
      "Hidden CAT6 cable routing through loft or neat conduit",
      "Mobile and tablet setup for up to 5 family members",
      "Free 6-month checkup and 24-month hardware warranty",
    ],
    specifications: {
      "Camera Count": "4 Ultra HD Turret Cameras",
      Resolution: "4K UHD (3840 x 2160)",
      Storage: "2TB Surveillance Hard Drive (~21 days recording)",
      "Night Vision": "Full-Colour 24/7 Night Vision with Warm LED",
      Audio: "High-sensitivity built-in microphone",
      "Mobile Access": "Push notifications & Multi-user access",
      Weatherproofing: "IP67 Metal vandal-resistant housing",
      Warranty: "24 Months Comprehensive",
    },
  },
  {
    id: "premium",
    name: "Commercial & Executive Estate",
    tagline: "Total 360° coverage for luxury homes, farms, workshops, and commercial premises",
    badge: "8-Camera System • Enterprise Grade",
    popular: false,
    idealFor: "Commercial Units, Large Detached Homes, Rural Estates",
    features: [
      "8x 4K Ultra HD (8MP) AI Turret or Motorised Varifocal PTZ Cameras",
      "Deep Learning Facial & Vehicle Recognition with Virtual Tripwires",
      "Full-Colour Night Vision with active deterrence flashing strobe & siren (optional)",
      "16-Channel 4K NVR with 4TB+ WD Purple Surveillance HDD",
      "Dedicated PoE Gigabit Switch for maximum throughput & reliability",
      "Full commercial cable containment (armoured external cabling where required)",
      "Multi-monitor output (HDMI / VGA) plus remote desktop & mobile apps",
      "Priority 24/7 technical assistance and 3-year extended warranty",
    ],
    specifications: {
      "Camera Count": "8 4K Cameras (Motorised / Fixed mix)",
      Resolution: "4K UHD (3840 x 2160) @ 25fps",
      Storage: "4TB High-End Surveillance Hard Drive (~30+ days)",
      "Night Vision": "Full-Colour + Long-Range 50m Smart EXIR",
      Audio: "Two-way audio support on selected channels",
      "Mobile Access": "Priority cloud relay + PC/Mac CMS software",
      Weatherproofing: "IK10 Vandal-Proof & IP67 Rated",
      Warranty: "36 Months Comprehensive Warranty",
    },
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "4K 4-Camera ColorVu CCTV Installation",
    category: "cctv",
    location: "Old Town, Swindon",
    description: "Complete perimeter security upgrade on a 4-bedroom detached property. Concealed loft cable runs and ColorVu 24/7 full-colour night vision cameras.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    details: ["4x 8MP 4K Turret Cameras", "2TB Local NVR Storage", "Invisible loft wiring", "Mobile live streaming configured"],
    date: "February 2026",
  },
  {
    id: "proj-2",
    title: "Full 18th Edition Consumer Unit & Rewire",
    category: "electrical",
    location: "Royal Wootton Bassett",
    description: "Replaced an outdated 1980s fuse box with an all-metal 18th Edition Hager consumer unit featuring Type A RCBOs and Surge Protection Device (SPD).",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    details: ["Hager Metal Consumer Unit", "Surge Protection Device (SPD)", "Full circuit insulation testing", "EICR certificate issued"],
    date: "January 2026",
  },
  {
    id: "proj-3",
    title: "Architectural Kitchen LED Downlights & Pendants",
    category: "lighting",
    location: "Cirencester, Gloucestershire",
    description: "Design and installation of 12 fire-rated dimmable warm white LED downlights and three kitchen island pendant lights on independent dimming zones.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200&q=80",
    details: ["Fire-rated 3000K warm LED downlights", "Dual-zone digital rotary dimmers", "Under-cabinet LED task strips", "Zero ceiling plaster damage"],
    date: "March 2026",
  },
  {
    id: "proj-4",
    title: "Weatherproof Garden Sockets & EV-Ready Radial",
    category: "sockets",
    location: "Faringdon, Oxfordshire",
    description: "Installed two IP66 double sockets with latching covers for lawn equipment and an outdoor hot tub, fed from a dedicated RCD-protected spur.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    details: ["IP66 Masterplug weatherproof units", "Steel Wire Armoured (SWA) garden cable", "Dedicated RCD protection", "Loop impedance tested"],
    date: "March 2026",
  },
  {
    id: "proj-5",
    title: "Commercial Retail Store 8-Camera CCTV & Lighting",
    category: "cctv",
    location: "Swindon Town Centre",
    description: "High-definition security coverage for cash tills, stockrooms, and shop floor entrances with multi-display viewing in manager office.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=1200&q=80",
    details: ["8x 4K vandal-resistant dome cameras", "Till transaction monitoring angles", "4TB NVR with automated off-site backups", "Commercial staff app accounts"],
    date: "January 2026",
  },
  {
    id: "proj-6",
    title: "Modern USB-C Fast Charge Sockets Throughout",
    category: "sockets",
    location: "Marlborough, Wiltshire",
    description: "Upgraded 14 dual socket points across living areas and bedrooms to brushed steel faceplates with integrated 45W USB-C Power Delivery ports.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    details: ["Brushed stainless steel screwless plates", "Integrated Type-C Power Delivery", "Ring continuity verified", "Replaced worn backboxes"],
    date: "February 2026",
  },
];

export const TESTIMONIALS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "David Jenkins",
    location: "Old Town, Swindon",
    service: "CCTV Installation (4-Camera 4K)",
    rating: 5,
    date: "14 February 2026",
    comment:
      "Exceptional service from P Selvam. The engineer arrived on time, planned the cable routing through our loft so that no wires are visible from outside, and set up the mobile app on both our phones. The ColorVu night vision is crystal clear—you can clearly read registration plates even at midnight.",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Sarah Thornton",
    location: "Royal Wootton Bassett",
    service: "Consumer Unit Upgrade & Inspection",
    rating: 5,
    date: "28 January 2026",
    comment:
      "We needed an urgent fuse board upgrade ahead of a kitchen refit. P Selvam provided a very transparent written quotation, arrived promptly at 8am, and completed the job cleanly with zero fuss. Issued our electrical certificate the same evening. Highly recommended!",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Marcus Green",
    location: "Cirencester",
    service: "LED Downlights & Garden Security Lights",
    rating: 5,
    date: "10 March 2026",
    comment:
      "Superb attention to detail. Fitted 10 downlights in our open-plan lounge with dust extraction so there was virtually no cleaning up needed afterwards. Also installed a powerful PIR security floodlight by our driveway that gives great peace of mind.",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Elena Rostova",
    location: "Faringdon",
    service: "Outdoor Sockets & Workshop Power",
    rating: 5,
    date: "22 February 2026",
    comment:
      "Very tidy work. Ran an armoured cable to our garden workshop and fitted heavy-duty IP66 sockets with RCD protection. Polite, professional, and knowledgeable electrician. Will definitely use them again for our upcoming CCTV project.",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Brian Patel",
    location: "Highworth, Swindon",
    service: "Commercial CCTV & Fault Finding",
    rating: 5,
    date: "04 March 2026",
    comment:
      "P Selvam sorted out an intermittent tripping issue in our retail unit that two other electricians failed to locate. At the same time, we had them install a commercial 4K CCTV system. Excellent service and very fair pricing.",
    verified: true,
  },
];

export const FAQS_DATA = [
  {
    category: "General & Emergencies",
    question: "Are you fully registered and insured in the UK?",
    answer:
      "Yes. P SELVAM LTD is registered in England & Wales (Company No. 17510506) with registered office at 91A Faringdon Road, Swindon, SN1 5DH. We hold comprehensive Public Liability and Professional Indemnity insurance, and our installations comply with UK BS 7671 standards.",
  },
  {
    category: "General & Emergencies",
    question: "Do you offer emergency callouts across Swindon and Wiltshire?",
    answer:
      "Yes, we operate a 24/7 emergency response line for dangerous electrical faults, burning smells from consumer units, persistent tripping, power blackouts, and critical security failures. Call us directly on +44 7774 453041.",
  },
  {
    category: "CCTV Systems",
    question: "Do I have to pay a monthly subscription to view my CCTV cameras?",
    answer:
      "No. Unlike cloud-only doorbell cameras, our professional systems record locally onto an on-site surveillance-grade hard drive. You enjoy lifetime free remote streaming and push notifications on your smartphone without monthly fees.",
  },
  {
    category: "CCTV Systems",
    question: "How long does video footage stay stored on the system?",
    answer:
      "Depending on your hard drive size (1TB, 2TB, or 4TB) and camera resolution, recordings typically overwrite after 14 to 30+ days. You can also export video clips instantly to your mobile phone or USB drive whenever required.",
  },
  {
    category: "Electrical & Lighting",
    question: "What is the difference between an old fuse board and a modern consumer unit?",
    answer:
      "Older fuse boards use rewireable wire fuses or basic MCBs that fail to detect earth leakage current (the cause of lethal electric shocks and fires). Modern 18th Edition metal consumer units feature individual RCBOs and Surge Protection Devices (SPDs) that trip within 30 milliseconds to save lives and protect sensitive electronics.",
  },
  {
    category: "Electrical & Lighting",
    question: "Can I replace halogen downlights with energy-efficient LEDs?",
    answer:
      "Yes. We replace outdated fire-hazard halogen cans with modern sealed fire-rated LED downlights. These reduce lighting energy consumption by up to 85% and eliminate frequent blown bulbs.",
  },
  {
    category: "Quotations & Workmanship",
    question: "How do I get a quotation, and is it free?",
    answer:
      "We provide completely free, no-obligation written quotes. You can use our online multi-step quote tool, send photos on WhatsApp (+44 7774 453041), or book an on-site survey at your convenience.",
  },
  {
    category: "Quotations & Workmanship",
    question: "What warranty do you provide on parts and labour?",
    answer:
      "All electrical installations come with a minimum 12-month workmanship guarantee. CCTV equipment comes with 12 to 36 months manufacturer hardware warranties, depending on the chosen package.",
  },
];

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    slug: "how-to-choose-a-cctv-system-for-your-home",
    title: "How to Choose a CCTV System for Your Home: A Complete UK Guide",
    readTime: "6 min read",
    publishDate: "15 February 2026",
    category: "CCTV & Security",
    excerpt: "Discover the vital differences between wireless cloud cameras and wired 4K IP systems, night vision technologies, and UK GDPR privacy rules.",
    metaDesc: "Comprehensive UK home CCTV guide: wired vs wireless, 4K resolution, ColorVu night vision, hard drive storage, and UK residential privacy guidelines.",
    content: [
      {
        sectionHeading: "Wired PoE vs Battery Wireless: Which is Better?",
        text: [
          "When securing your home in Swindon or Wiltshire, one of the first decisions is whether to choose battery Wi-Fi cameras or a wired Power-over-Ethernet (PoE) system. While battery cameras are quick to stick on a wall, they suffer from Wi-Fi jamming, cold-weather battery drain, and delay in recording when waking up.",
          "Professional wired systems use a single CAT6 Ethernet cable per camera to deliver both constant power and high-speed data. They record 24 hours a day, 7 days a week directly to a local hard drive without missing critical seconds before an incident.",
        ],
        bulletPoints: [
          "Wired systems record 24/7 continuous footage; battery cameras only wake up after motion is triggered.",
          "Zero recurring monthly cloud fees—you own your video clips on your local NVR.",
          "Impenetrable to basic Wi-Fi jammers frequently used by modern opportunistic intruders.",
        ],
      },
      {
        sectionHeading: "Understanding Camera Resolution: Why 4K Matters",
        text: [
          "Resolution is not just a marketing number. A 1080p Full HD camera may show that someone walked up your driveway, but zooming in on a face or number plate results in a pixelated blur.",
          "With 4K (8 Megapixel) surveillance, you get four times the pixel density. When an incident occurs 15 metres away at your garden gate, you have sufficient optical detail for police identification.",
        ],
      },
      {
        sectionHeading: "Full-Colour Night Vision (ColorVu / Starlight)",
        text: [
          "Traditional cameras switch on black-and-white infrared LEDs at night, making dark clothing and vehicle colours unrecognizable. Modern full-colour night vision systems utilize ultra-large aperture lenses (f/1.0) and high-sensitivity sensors with soft auxiliary lighting to display rich colour 24 hours a day.",
        ],
      },
      {
        sectionHeading: "UK Privacy Laws & Neighbour Etiquette",
        text: [
          "Under UK Information Commissioner's Office (ICO) guidelines, your domestic CCTV should ideally point within your property boundary. If your camera captures parts of a neighbour's garden or public pavement, you must use privacy masking software (which we configure during installation) or display a clear CCTV notice.",
        ],
      },
    ],
  },
  {
    slug: "signs-you-need-a-rewire",
    title: "8 Critical Warning Signs Your Property Needs a Rewire",
    readTime: "7 min read",
    publishDate: "28 January 2026",
    category: "Electrical Safety",
    excerpt: "Learn how to spot outdated wiring, dangerous fuse boxes, burning smells, and signs that your electrical system is overdue for a safety overhaul.",
    metaDesc: "Signs your house needs rewiring in the UK: tripping breakers, flickering lights, old fuse boards, rubber cables, and 18th Edition safety compliance.",
    content: [
      {
        sectionHeading: "The Dangers of Outdated Domestic Wiring",
        text: [
          "Electrical installations deteriorate over time. In older properties throughout Swindon and the Cotswolds, wiring installed in the 1970s or earlier was never designed to cope with modern high-power appliances—such as electric showers, induction cooktops, EV home chargers, and multiple heat pumps.",
          "Degraded insulation can crack, overheat behind plasterboards, and pose serious fire hazards.",
        ],
      },
      {
        sectionHeading: "Warning Signs Every Homeowner Must Know",
        text: [
          "If you experience any of the following symptoms, schedule an Electrical Installation Condition Report (EICR) immediately:",
        ],
        bulletPoints: [
          "Persistent Circuit Tripping: Your breakers trip unexpectedly or fuses blow frequently under normal loads.",
          "Old Consumer Unit with Rewireable Fuses: Wooden backboards or cast-iron fuse boxes indicate pre-1980s wiring.",
          "Burning Smells or Scorch Marks: Discoloration around plug sockets or switches indicates arcing and overheating.",
          "Flickering or Dimming Lights: A sign of loose connections, degraded neutral lines, or severe voltage drops.",
          "Tingling or Mild Shocks: Feeling a buzz when touching metallic appliances or switches is an urgent safety warning.",
          "Black Rubber or Lead Cables: If cabling visible in the loft or cellar is sheathed in black rubber, it is past its safe lifespan.",
        ],
      },
      {
        sectionHeading: "What Happens During a Full Rewire?",
        text: [
          "A full rewire involves stripping out degraded cabling and installing brand new low-smoke halogen-free (LSOH) twin and earth cables, modern backboxes, high-efficiency lighting circuits, and a dual-RCD / RCBO 18th Edition metal consumer unit. All work is certified and registered with building control.",
        ],
      },
    ],
  },
  {
    slug: "are-led-lights-worth-it",
    title: "Are LED Lights Worth It? Energy Savings and Lifespan Explained",
    readTime: "5 min read",
    publishDate: "05 March 2026",
    category: "Energy Efficiency",
    excerpt: "Calculate the real return on investment when converting older halogen spots and incandescent bulbs to modern high-CRI architectural LEDs.",
    metaDesc: "Detailed breakdown of LED lighting financial savings, payback periods, dimming performance, colour temperatures, and fire-rated installations.",
    content: [
      {
        sectionHeading: "The Real Cost of Old Halogen Spotlights",
        text: [
          "A typical kitchen with ten 50W halogen spotlights consumes 500 Watts of electricity whenever switched on. Halogen bulbs also generate intense heat (up to 250°C), creating ceiling fire hazards and frequent premature bulb failure.",
          "Replacing them with ten 5W high-output LED downlights provides identical or superior lumens while using just 50 Watts total—a massive 90% reduction in electricity demand.",
        ],
      },
      {
        sectionHeading: "Return on Investment (ROI) in UK Homes",
        text: [
          "With current UK electricity tariffs, switching a whole home to LED downlights can save between £150 and £300+ annually on energy bills. In addition, quality LEDs last 30,000 to 50,000 hours—meaning up to 15 years without buying replacement lamps.",
        ],
        bulletPoints: [
          "Instant savings of up to 85–90% on lighting electricity usage.",
          "Typical investment payback period of 12 to 18 months.",
          "Significantly safer operation with cool-running aluminium heat sinks.",
          "Choice of colour temperatures: 2700K (Warm Cosy), 3000K (Soft White), or 4000K (Crisp Task).",
        ],
      },
      {
        sectionHeading: "Why Professional Fire-Rated Downlights Matter",
        text: [
          "Cutting holes in ceilings breaches your home's fire barrier. By installing fully enclosed fire-rated downlights with intumescent seals, you ensure that if a fire occurs below, the seal expands to prevent flames penetrating into upstairs floors for 30, 60, or 90 minutes.",
        ],
      },
    ],
  },
];
