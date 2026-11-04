import type { FaqItem } from "@/components/seo/FaqSection";

// Content for the dedicated service pages (/services/<slug>).
// Only describes practices already published elsewhere on this website (police verification and
// background checks, fire-safety drills, shift briefings, patrol logs, gatehouse registers,
// supervisor checks, the 24/7 operations desk, site assessment before deployment).
// Do not add licences, certifications, client names, years in business or city offices here
// unless the company has confirmed them.

export interface ServicePageContent {
  slug: string;
  // <title> (the layout appends " | VM SQUARE")
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  image?: { src: string; alt: string; width: number; height: number };
  coversHeading: string;
  covers: { title: string; text: string }[];
  suitableHeading: string;
  suitableFor: string[];
  faqs: FaqItem[];
  // Slugs of related services to cross-link
  related: string[];
}

// Answers shared by every service page (coverage and quotations work the same way for all divisions)
const coverageFaq: FaqItem = {
  question: "Which areas do you cover?",
  answer:
    "VM SQUARE is based in Kasturinagar, Bengaluru and deploys staff to sites in Bengaluru and across Karnataka. Enquiries from other parts of India are welcome; share the site location and we will confirm whether we can serve it.",
};

const quoteFaq: FaqItem = {
  question: "How do I get a quotation?",
  answer:
    "Use the Request a Quote form, call or WhatsApp +91 80732 46094, or email drakshayani@vmsquaresecurity.com with your site type, location, number of personnel and shift timings. Pricing depends on these details, so we confirm the requirement with you before quoting.",
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "security-guard-services",
    metaTitle: "Security Guard Services in Bengaluru & Karnataka",
    metaDescription:
      "Trained, police-verified security guards for offices, factories, apartments and commercial sites in Bengaluru and across Karnataka. Day, night and 24/7 shifts.",
    eyebrow: "Manned Guarding & Access Control",
    h1: "Security Guard Services in Bengaluru & Karnataka",
    intro: [
      "VM SQUARE provides uniformed security guards for commercial, industrial and residential premises. Every deployment starts with a look at your site: its entry points, working hours, visitor movement and the assets that need protecting. The guard strength and duties are then planned around what the site actually needs.",
      "Guards are police-verified and background-checked before deployment, trained in gate procedures and fire safety, and supervised through shift briefings, patrol logs and supervisor checks so the standard of guarding stays consistent from shift to shift.",
    ],
    image: {
      src: "/images/gallery/vmsquare_guard_front.jpg",
      alt: "Uniformed VM SQUARE security guard on duty in a building lobby",
      width: 1451,
      height: 1084,
    },
    coversHeading: "What our security guard service covers",
    covers: [
      { title: "Gate and entry control", text: "Checking people and vehicles in and out, maintaining gatehouse and visitor registers, and enforcing the entry rules you set for the site." },
      { title: "Patrols", text: "Scheduled perimeter and floor patrols, with time-stamped patrol logs so you can see when areas were checked." },
      { title: "Day, night and round-the-clock shifts", text: "Single-shift, night-only or 24/7 cover, planned around your operating hours and staffing plan." },
      { title: "Supervision", text: "Shift briefings, supervisor visits and night patrol checks, backed by our operations desk in Bengaluru." },
      { title: "Emergency readiness", text: "Guards trained in fire-extinguisher use and evacuation drills, so they know how to respond during an incident." },
      { title: "Site-specific instructions", text: "Written post orders for each site covering duties, key contacts and escalation steps." },
    ],
    suitableHeading: "Who this service is for",
    suitableFor: [
      "Offices, business centres and tech parks",
      "Factories, warehouses and industrial units",
      "Apartments, gated communities and residential layouts",
      "Commercial buildings and showrooms",
      "Shopping malls and retail spaces",
      "Schools, colleges and institutional campuses",
    ],
    faqs: [
      {
        question: "Are your security guards verified?",
        answer:
          "Yes. Guards go through police verification and a background check before they are deployed, and receive training in gate procedures and fire safety.",
      },
      {
        question: "Can I hire security guards for night shifts only?",
        answer:
          "Yes. We can plan night-only, day-only or 24/7 cover. Tell us your site timings and we will suggest the number of guards and shifts required.",
      },
      {
        question: "How quickly can guards be deployed?",
        answer:
          "We can deploy on short notice for new facilities, events and site handovers. The exact timeline depends on the number of guards and the location, which we confirm when you enquire.",
      },
      coverageFaq,
      quoteFaq,
    ],
    related: ["corporate-office-security", "industrial-security", "apartment-security"],
  },
  {
    slug: "corporate-office-security",
    metaTitle: "Office & Commercial Security Services in Bengaluru",
    metaDescription:
      "Security guards for offices, tech parks and commercial buildings in Bengaluru: lobby security, visitor management, access control and patrols.",
    eyebrow: "Corporate Office & Tech Park Security",
    h1: "Office & Commercial Security Services in Bengaluru",
    intro: [
      "Offices and commercial buildings see a steady flow of employees, visitors, vendors and deliveries every day. VM SQUARE provides security staff who manage that movement politely and firmly, keep accurate records, and protect your people, equipment and premises.",
      "Our officers work to site-specific instructions agreed with your facility or admin team, and are supported by supervisors and our 24/7 operations desk.",
    ],
    image: {
      src: "/images/gallery/corporate_guard.jpg",
      alt: "VM SQUARE security officer with a radio outside a corporate office building",
      width: 1674,
      height: 940,
    },
    coversHeading: "What our office security service covers",
    covers: [
      { title: "Lobby and reception security", text: "Front-desk security officers who greet visitors, verify appointments and issue visitor passes." },
      { title: "Visitor and vendor management", text: "Visitor registers, entry records and escorting of vendors or contractors where your policy requires it." },
      { title: "Access control", text: "Managing entry points, checking ID cards and supporting your electronic access-control system." },
      { title: "Parking and perimeter", text: "Vehicle entry checks, parking management and regular perimeter patrols." },
      { title: "After-hours security", text: "Night and weekend guarding, with floor checks and locking routines once the office closes." },
      { title: "Emergency support", text: "Officers trained in fire safety and evacuation who can assist your team during drills or incidents." },
    ],
    suitableHeading: "Suitable for",
    suitableFor: [
      "Corporate offices and headquarters",
      "IT companies and tech parks",
      "Commercial complexes and business centres",
      "Shopping malls, showrooms and retail spaces",
    ],
    faqs: [
      {
        question: "Can your officers manage our visitor register and passes?",
        answer:
          "Yes. Visitor registration, pass issue and entry records are standard duties for our office deployments. We follow the visitor policy your company sets.",
      },
      {
        question: "Do you provide security for offices only during working hours?",
        answer:
          "We can cover working hours, after-hours, weekends or 24/7, depending on what the building needs.",
      },
      coverageFaq,
      quoteFaq,
    ],
    related: ["security-guard-services", "cctv-surveillance", "housekeeping-facility-management"],
  },
  {
    slug: "industrial-security",
    metaTitle: "Industrial Security Services in Karnataka",
    metaDescription:
      "Factory and warehouse security guards in Bengaluru and across Karnataka: material gate checks, vehicle and contractor control, perimeter patrols and night security.",
    eyebrow: "Industrial & Warehouse Facility Protection",
    h1: "Industrial Security Services in Karnataka",
    intro: [
      "Factories, warehouses and industrial units have large perimeters, heavy vehicle movement and valuable materials on site. VM SQUARE provides security guards for industrial establishments who control what comes in and goes out, patrol the premises and keep accurate records for your management team.",
      "Each industrial deployment is planned after reviewing the site layout, gates, shift pattern and material movement, so guard strength and duties match the real risk at the site.",
    ],
    image: {
      src: "/images/gallery/industrial_guard.jpg",
      alt: "VM SQUARE security officer patrolling inside an industrial warehouse",
      width: 1200,
      height: 896,
    },
    coversHeading: "What our industrial security service covers",
    covers: [
      { title: "Material gate control", text: "Checking inward and outward materials against gate passes and maintaining material movement registers." },
      { title: "Vehicle checks", text: "Logging trucks and other vehicles at entry and exit and checking them as per your site procedures." },
      { title: "Worker and contractor entry", text: "Checking ID cards and contractor passes, and keeping entry records for each shift." },
      { title: "Perimeter and night patrols", text: "Regular patrols of boundaries, storage yards and buildings, recorded in time-stamped patrol logs." },
      { title: "Fire-safety awareness", text: "Guards trained in fire-extinguisher use and evacuation, able to raise the alarm and assist during emergencies." },
      { title: "Supervision across shifts", text: "Shift briefings and supervisor checks so the same standard is kept on every shift, including nights." },
    ],
    suitableHeading: "Suitable for",
    suitableFor: [
      "Manufacturing plants and factories",
      "Warehouses and logistics centres",
      "Industrial estates and units",
    ],
    faqs: [
      {
        question: "Can your guards manage material gate passes and registers?",
        answer:
          "Yes. Inward and outward material checks and gate registers are standard duties for our industrial deployments, following the procedure your plant uses.",
      },
      {
        question: "Do you provide security for factories outside Bengaluru?",
        answer:
          "Yes, we deploy to industrial sites across Karnataka. Share the site location when you enquire and we will confirm the deployment plan.",
      },
      quoteFaq,
    ],
    related: ["security-guard-services", "cctv-surveillance", "housekeeping-facility-management"],
  },
  {
    slug: "apartment-security",
    metaTitle: "Apartment Security Services in Bengaluru",
    metaDescription:
      "Security guards for apartments, gated communities and residential societies in Bengaluru: gate and visitor management, delivery checks, night patrols and 24/7 cover.",
    eyebrow: "Residential Township & Gated Community Security",
    h1: "Apartment & Gated Community Security in Bengaluru",
    intro: [
      "Residents expect to feel safe at home, and apartment associations need security staff they can rely on. VM SQUARE provides security guards for apartments, gated communities and residential townships who manage the main gate, keep visitor and vehicle records, and patrol the premises day and night.",
      "We agree the duties with your association or facility manager before deployment, and supervisors check that the agreed routine is followed on every shift.",
    ],
    image: {
      src: "/images/gallery/vmsquare_patrol_guard.jpg",
      alt: "VM SQUARE security officer checking a building entrance with a torch at night",
      width: 1536,
      height: 1024,
    },
    coversHeading: "What our apartment security service covers",
    covers: [
      { title: "Main gate management", text: "Controlling the entry and exit of residents, visitors and vehicles at the main gate." },
      { title: "Visitor and delivery records", text: "Visitor registers and checks for delivery staff, domestic help and service providers, following your association's rules." },
      { title: "Vehicle and parking control", text: "Checking resident and visitor vehicles and helping keep parking areas orderly." },
      { title: "Night patrols", text: "Regular patrols of blocks, basements and common areas at night, recorded in patrol logs." },
      { title: "Support during emergencies", text: "Guards trained in fire safety and evacuation who can alert residents and assist during incidents." },
      { title: "Supervised shifts", text: "Shift briefings and supervisor checks, with our operations desk available round the clock." },
    ],
    suitableHeading: "Suitable for",
    suitableFor: [
      "Apartment complexes and residential societies",
      "Gated communities and villa layouts",
      "Residential townships",
    ],
    faqs: [
      {
        question: "Can you follow our association's visitor and delivery rules?",
        answer:
          "Yes. We set up gate procedures based on the rules your association agrees, such as visitor registers, delivery checks and entry timings, and brief every guard on them.",
      },
      {
        question: "How many guards does an apartment need?",
        answer:
          "It depends on the number of gates, blocks, the size of the premises and whether you need 24/7 cover. We assess the site and recommend a guard plan before quoting.",
      },
      quoteFaq,
    ],
    related: ["security-guard-services", "housekeeping-facility-management", "cctv-surveillance"],
  },
  {
    slug: "event-security",
    metaTitle: "Event Security Services in Bengaluru",
    metaDescription:
      "Event security staff in Bengaluru for corporate events, conferences and functions: entry and access control, crowd management, guest assistance and VIP escort.",
    eyebrow: "Corporate Event & VIP Escort Services",
    h1: "Event Security Services in Bengaluru",
    intro: [
      "Corporate events, conferences, launches and private functions need organised entry, crowd control and staff who can handle guests professionally. VM SQUARE provides event security teams planned around your venue layout, guest count and timings.",
      "We can also arrange security escort for executives and guests where the event requires it. Tell us about the event when you enquire and we will suggest the team size and duties.",
    ],
    image: {
      src: "/images/gallery/event_security.jpg",
      alt: "VM SQUARE event security team managing an access-control entrance at a corporate event",
      width: 1451,
      height: 1084,
    },
    coversHeading: "What our event security service covers",
    covers: [
      { title: "Entry and access control", text: "Checking invitations, passes or registrations at entrances and keeping restricted areas restricted." },
      { title: "Crowd management", text: "Managing queues, guiding guest movement and keeping entry and exit routes clear." },
      { title: "VIP and executive escort", text: "Security escort for executives and important guests during the event." },
      { title: "Parking and vehicle movement", text: "Directing vehicles and managing parking areas around the venue." },
      { title: "Emergency readiness", text: "Staff trained in fire safety and evacuation, briefed on the venue's exits before the event begins." },
      { title: "Short-notice deployment", text: "Teams can be arranged on short notice; confirm your date and timings with us as early as possible." },
    ],
    suitableHeading: "Suitable for",
    suitableFor: [
      "Corporate events and conferences",
      "Product launches and company functions",
      "Executive and guest visits that need escort",
    ],
    faqs: [
      {
        question: "Can you provide security for a one-day event?",
        answer:
          "Yes. Event deployments can be for a single day or several days. Share the venue, date, timings and expected guest count so we can plan the team.",
      },
      {
        question: "Do you provide security escort for VIPs?",
        answer:
          "Yes, executive and guest escort can be arranged as part of an event deployment. Tell us the requirement when you enquire.",
      },
      quoteFaq,
    ],
    related: ["security-guard-services", "corporate-office-security", "cctv-surveillance"],
  },
  {
    slug: "housekeeping-facility-management",
    metaTitle: "Housekeeping & Facility Management in Bengaluru",
    metaDescription:
      "Housekeeping staff and facility management support for offices, apartments and industrial sites in Bengaluru and Karnataka, alongside our security services.",
    eyebrow: "Integrated Facility Management & Housekeeping",
    h1: "Housekeeping & Facility Management Services in Bengaluru",
    intro: [
      "Alongside security, VM SQUARE supplies housekeeping staff and facility support for commercial, residential and industrial premises. Sites that need both can work with one company for security and housekeeping manpower, with a single point of contact.",
      "As with our security deployments, staffing and duties are agreed with you before deployment and supervised once staff are on site.",
    ],
    coversHeading: "What our housekeeping and facility service can include",
    covers: [
      { title: "Housekeeping staff supply", text: "Housekeeping personnel for daily cleaning of offices, common areas, lobbies and washrooms." },
      { title: "Commercial and office housekeeping", text: "Regular upkeep of workspaces, meeting rooms and pantry areas during or outside office hours." },
      { title: "Residential common areas", text: "Housekeeping for apartment lobbies, corridors, staircases and other shared spaces." },
      { title: "Industrial housekeeping", text: "Housekeeping support for factory premises, canteens and administrative blocks." },
      { title: "Combined security and housekeeping", text: "Security and housekeeping manpower from one provider, coordinated through one contract." },
      { title: "Supervision", text: "Housekeeping staff are supervised on site so the agreed cleaning schedule is followed." },
    ],
    suitableHeading: "Suitable for",
    suitableFor: [
      "Offices and commercial buildings",
      "Apartments and gated communities",
      "Factories and industrial units",
      "Institutions and campuses",
    ],
    faqs: [
      {
        question: "Can we take security and housekeeping staff from the same company?",
        answer:
          "Yes. You can take both security guards and housekeeping staff from VM SQUARE and manage both services through one point of contact.",
      },
      {
        question: "How is the number of housekeeping staff decided?",
        answer:
          "It depends on the area to be maintained, the number of shifts and the cleaning schedule you need. We discuss the requirement with you before quoting.",
      },
      coverageFaq,
      quoteFaq,
    ],
    related: ["security-guard-services", "apartment-security", "corporate-office-security"],
  },
  {
    slug: "cctv-surveillance",
    metaTitle: "CCTV Surveillance & Monitoring in Bengaluru",
    metaDescription:
      "CCTV surveillance and control-room monitoring with on-site guards in Bengaluru: live camera monitoring, access-control support and coordinated response.",
    eyebrow: "Electronic CCTV Surveillance & Control Room",
    h1: "CCTV Surveillance & Security Monitoring",
    intro: [
      "Cameras are only useful if someone is watching and able to act. VM SQUARE combines CCTV surveillance with trained security staff, so what is seen on screen can be checked on the ground straight away.",
      "Our operations desk coordinates CCTV monitoring, access-control checks and supervisor patrols, and stays in radio contact with site supervisors.",
    ],
    image: {
      src: "/images/gallery/cctv_monitoring.jpg",
      alt: "Security operator monitoring a CCTV video wall in a control room",
      width: 1451,
      height: 1084,
    },
    coversHeading: "What our surveillance service covers",
    covers: [
      { title: "CCTV monitoring", text: "Live, multi-camera monitoring of your site and review of footage when an incident needs checking." },
      { title: "Control-room operators", text: "Trained staff to watch your site's CCTV screens and report anything unusual." },
      { title: "Access-control support", text: "Managing entry records and visitor tracking alongside your access-control system." },
      { title: "Patrol verification", text: "Using gate logs and patrol records to confirm that scheduled checks are being carried out." },
      { title: "Coordinated response", text: "Direct radio communication with site supervisors so guards can respond to what is seen on camera." },
    ],
    suitableHeading: "Suitable for",
    suitableFor: [
      "Offices and commercial buildings",
      "Factories and warehouses",
      "Apartments and gated communities",
      "Sites that already have CCTV and need staff to monitor it",
    ],
    faqs: [
      {
        question: "Do you provide operators to monitor our existing CCTV system?",
        answer:
          "Yes. We can provide trained staff to monitor your site's CCTV and coordinate with the guards on the ground. Tell us about your current setup when you enquire.",
      },
      coverageFaq,
      quoteFaq,
    ],
    related: ["security-guard-services", "corporate-office-security", "industrial-security"],
  },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((page) => page.slug === slug);
