export const strengths = [
  {
    title: "System integrations",
    desc: "Two-way syncs between platforms like Xero, HubSpot, MYOB, and Monday.com using REST APIs and webhooks, so data stays accurate across every tool a business runs on.",
  },
  {
    title: "End-to-end full-stack delivery",
    desc: "From requirements and database design to deployment — Laravel, Django, Node.js, and React.js, shipped and supported in production, not just demoed.",
  },
  {
    title: "Workflow automation",
    desc: "Automated data pipelines that remove manual busywork, reduce sync errors, and keep operations running without someone babysitting spreadsheets.",
  },
  {
    title: "Payments & fintech",
    desc: "Integrated Stripe, D24, Dragontech88, and Prontopaga for real payment flows — the parts of an app that can't afford to be wrong.",
  },
  {
    title: "Production troubleshooting",
    desc: "Diagnosing and fixing live issues under pressure, directly with stakeholders, without breaking what already works.",
  },
  {
    title: "Cloud deployment",
    desc: "Shipping and running applications on AWS and Google Cloud Platform with Docker and Nginx, built to stay up.",
  },
];

export const jobs = [
  {
    role: "Web Developer (Remote)",
    org: "Blue Wonders Consultancy — Makati City, PH",
    date: "Dec 2024 — Oct 2026",
    points: [
      "Integrated and maintained D24, Prontopaga, and Dragontech88 payment gateways for platforms in Mexico, Argentina, Chile, Colombia, Paraguay, and Ecuador.",
      "Implemented GA4, Meta Conversions API, and TikTok conversion tracking for accurate campaign attribution.",
      "Maintained and extended the company's Back Office system, turning business requirements into shipped features.",
      "Used AI-assisted development tools for code generation, debugging, and refactoring to deliver features faster.",
    ],
  },
  {
    role: "Full Stack Developer — Freelance (Remote)",
    org: "Upstream — Canberra, AU",
    date: "Dec 2019 — Apr 2026",
    points: [
      "Owned full-stack projects end to end, from requirements and database design to deployment and support.",
      "Built two-way Monday.com, Xero, MYOB, and HubSpot integrations for multiple clients via REST APIs and webhooks.",
      "Automated customer, sales, and financial record sync, replacing manual data entry and reconciliation.",
      "Built data pipelines that detect sync errors early and keep data consistent across connected systems.",
    ],
  },
  {
    role: "Associate Software Developer",
    org: "Quantum Crowd Inc. (McVean Pacific Int'l Offshoring) — Clark, Pampanga",
    date: "Jan 2019 — Aug 2019",
    points: [
      "Built React.js application features and prototyped a Corda integration for a blockchain use case.",
      "Presented working prototypes to clients and iterated on UI/UX based on their feedback.",
      "Debugged and tested application features to find and fix issues early.",
    ],
  },
  {
    role: "Programmer",
    org: "Lagotronics Philippines Inc. — Angeles, Pampanga",
    date: "Aug 2017 — May 2018",
    points: [
      "Programmed Arduino-based animatronic motion sequences for museum exhibits and supported on-site installation.",
      "Developed the on-screen user interfaces for each animatronic machine using C#.",
    ],
  },
];

export const skillGroups = [
  { cat: "Backend", items: ["PHP (Laravel)", "Node.js (Express)", "Python (Django)", "REST APIs", "Webhooks", "WebSockets"] },
  { cat: "Frontend", items: ["React.js", "JavaScript (ES6+)", "jQuery", "AJAX", "Tailwind CSS"] },
  { cat: "Databases", items: ["MySQL", "PostgreSQL"] },
  { cat: "Integrations", items: ["Xero", "HubSpot", "Monday.com", "MYOB", "Google Maps API"] },
  { cat: "Payments", items: ["Stripe", "D24", "Prontopaga", "Dragontech88"] },
  { cat: "Cloud & DevOps", items: ["AWS", "Google Cloud Platform", "Docker", "Nginx", "Git"] },
];

export const projects = [
  {
    title: "Free - Resume",
    status: "Live",
    desc: "A free resume builder with 39 ATS-friendly templates, a live resume score, matching cover letters, and PDF download. Documents are saved to each user's account, so they can pick up on any device.",
    stack: "React.js · Supabase · AWS · Buy Me a Coffee",
    link: "https://free-resume.online",
    // Opens in a viewer instead of linking straight out
    screenshots: [
      {
        src: "/projects/free-resume/landing.webp",
        thumb: "/projects/free-resume/landing-thumb.webp",
        width: 2400,
        height: 1304,
        alt: "Free - Resume landing page with the headline \"Build a job-winning resume in minutes\", sample resume templates, and Resume score, ATS-friendly, and PDF ready badges",
        caption: "Landing page: pick a template, check the resume score, download a PDF",
      },
      {
        src: "/projects/free-resume/dashboard.webp",
        thumb: "/projects/free-resume/dashboard-thumb.webp",
        width: 2400,
        height: 1318,
        alt: "Free - Resume dashboard with a welcome banner, shortcuts to start a resume or cover letter or import a backup, and saved documents with their resume score",
        caption: "Dashboard: resumes and cover letters, saved to the user's account",
      },
    ],
  },
  {
    title: "Track Flow",
    status: "In progress",
    desc: "A one-stop job tracking application that aggregates job listings from multiple job platforms into a single dashboard, allowing users to browse opportunities and manually track their job application progress.",
    stack: "Python (Django) . JavaScript (ES6+) · HTML . CSS . PostgreSQL · AWS · Playwright",
    link: "https://www.track-flow.cyrillkm.online",
    screenshots: [
      {
        src: "/projects/track-flow/login.png",
        thumb: "/projects/track-flow/login.png",
        width: 2400,
        height: 1304,
        alt: "Track Flow login page with the headline \"Track your job applications in one place\", sample job listings, and application tracking features",
        caption: "Login Page: browse job opportunities and track your applications",
      },
      {
        src: "/projects/track-flow/dashboard.png",
        thumb: "/projects/track-flow/dashboard.png",
        width: 2400,
        height: 1318,
        alt: "Track Flow dashboard with a welcome banner, shortcuts to start a job application or view saved applications, and application tracking features",
        caption: "Dashboard: track your job applications and view saved opportunities",
      },
      {
        src: "/projects/track-flow/job-page.png",
        thumb: "/projects/track-flow/job-page.png",
        width: 2400,
        height: 1318,
        alt: "Track Flow job page with the headline \"Track your job applications in one place\", sample job listings, and application tracking features",
        caption: "Job Page: view details about a specific job opportunity",
      }
    ],
  },
  {
    title: "Automated Distance-Based Pricing System",
    desc: "A GCP-hosted pricing engine that automates patient-transport fares from real-time routing distance via the Google Maps API, replacing manual fare computation.",
    stack: "Laravel · React.js · Google Maps API · GCP",
    link: "",
    screenshots: [
      {
        src: "/projects/auto-distance/login.webp",
        thumb: "/projects/auto-distance/login.webp",
        width: 2400,
        height: 1304,
        alt: "Automated Distance-Based Pricing System login page with the headline \"Automate your pricing based on real-time distance\", sample pricing scenarios, and application tracking features",
        caption: "Login Page: browse pricing opportunities and track your applications",
      },
      {
        src: "/projects/auto-distance/dashboard.webp",
        thumb: "/projects/auto-distance/dashboard.webp",
        width: 2400,
        height: 1318,
        alt: "Automated Distance-Based Pricing System dashboard with a welcome banner, shortcuts to start a pricing calculation or view saved scenarios, and application tracking features",
        caption: "Dashboard: track your pricing calculations and view saved scenarios",
      },
    ],
  },
  {
    title: "Client Portal — Custom Quoter System",
    desc: "A secure portal for custom quoting, job tracking, and document access, with real-time chat between clients and staff to improve workflow transparency.",
    stack: "Laravel · AJAX · jQuery · Tailwind CSS · Laravel Broadcasting",
    link: "",
  },
];

export const education = {
  school: "University of the Assumption",
  degree: "Bachelor of Science in Information Technology",
  date: "2013 — 2017",
};

export const contact = {
  email: "ckmusngi@gmail.com",
  phone: "+63 961 678 1306",
  phoneHref: "+639616781306",
  location: "Mexico, Pampanga, Philippines",
  linkedin: "https://www.linkedin.com/in/cyrill-kiel-musngi/",
  github: "https://github.com/ckmusngi",
};
