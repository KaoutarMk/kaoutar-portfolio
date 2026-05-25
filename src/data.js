export const contact = {
  name: "Kaoutar Machouat",
  phone: "438-345-9056",
  email: "kaoumo@hotmail.com",
  linkedin: "https://linkedin.com/in/kaoutar-machouat",
  github: "https://github.com/KaoutarMk",
  githubRepositories: "https://github.com/KaoutarMk?tab=repositories",
  location: "Montreal, QC"
};

export const experiences = [
  {
    role: "Data Engineering Intern & Analytics Consultant",
    company: "VFFICE",
    logo: "/experience/vffice.png",
    location: "Montreal, QC",
    period: "2025 to Present",
    summary: "Working across data engineering and analytics, with a focus on Microsoft Fabric pipelines, data transformation, migration, modeling, and AI-assisted automation within business systems.",
    highlights: [
      "Designed and deployed Microsoft Fabric pipelines and transformation workflows to centralize business data.",
      "Developed Power BI reports, KPI dashboards, DAX measures, and automated reporting workflows.",
      "Performed data migration, cleaning, and integration across ERP, CRM, and cloud-based business systems.",
      "Integrated AI-assisted automation workflows and collaborated with stakeholders on scalable SaaS analytics solutions."
    ],
    skills: [
      "Microsoft Fabric",
      "ETL",
      "Data Transformation",
      "Data Migration",
      "Data Modeling",
      "Power BI",
      "DAX",
      "Power Query",
      "CRM/ERP Integration",
      "Azure DevOps",
      "Automation",
      "AI-assisted Workflows"
    ],
    metrics: ["Microsoft Fabric", "Power BI", "AI Automation"]
  },
  {
    role: "Fullstack Software Development Intern",
    company: "Airbus",
    logo: "/experience/airbus.png",
    location: "Mirabel, QC",
    period: "Sept 2024 to Aug 2025",
    summary: "Developed internal software tools and automation workflows for the A220 program, helping teams reduce manual work, improve planning, and support operational decision-making.",
    highlights: [
      "Reduced budgetary activity processing time by 240% for section managers.",
      "Decreased emergency requests from external departments by 32%.",
      "Saved 2 hours per week in planning activities for the airworthiness department.",
      "Lowered planning time by 15% while improving productivity.",
      "Supported 170+ engineers through internal software tools using Google Apps Script and Qlik Sense."
    ],
    skills: ["TypeScript", "Qlik Sense", "Process Automation", "Jira", "Confluence", "GitHub", "Clasp", "Agile"],
    metrics: ["240% faster", "32% fewer requests", "170+ engineers"]
  }
];

export const projects = [
  {
    title: "Flight Price Prediction System",
    year: "2025",
    image: "/projects/flight.gif",
    stack: ["Python", "Flask", "Selenium", "Hugging Face", "SQL"],
    description:
      "An end-to-end machine learning project designed to predict better flight booking windows using real-time and historical pricing signals.",
    focus:
      "Combined API data, scraping workflows, SQL storage, and automated notification logic to support price tracking and decision-making.",
    codeUrl: "",
    caseStudyUrl: ""
  },
  {
    title: "Kaggle Image Classification Competition",
    year: "2025",
    image: "/projects/kaggle-vision.gif",
    stack: ["PyTorch", "Scikit-learn", "Python"],
    description:
      "A computer vision project focused on classifying images across a large multi-category dataset using deep learning models.",
    focus:
      "Built custom PyTorch training loops, applied preprocessing and normalization, and tuned model performance across 115K+ samples.",
    codeUrl: "",
    caseStudyUrl: ""
  },
  {
    title: "Database Management System",
    year: "2024",
    image: "/projects/database.gif",
    stack: ["Python", "SQL", "DBeaver"],
    description:
      "A structured database project built around relational design, normalization, and practical data management operations.",
    focus:
      "Designed a relational architecture and developed a Python interface to support SQL queries, CRUD operations, and organized data handling.",
    codeUrl: "",
    caseStudyUrl: ""
  },
  {
    title: "Client-Server Banking System",
    year: "2024",
    image: "/projects/client-server.gif",
    stack: ["Java", "Object-Oriented Programming", "Client-Server Architecture"],
    description:
      "A Java-based client-server system designed to manage banking-style account operations through separate client, server, network, account, and transaction components.",
    focus:
      "Structured the application using multiple Java classes such as Client, Server, Network, Accounts, Transactions, and Driver to separate responsibilities and simulate communication between users and the system.",
    codeUrl: "",
    caseStudyUrl: ""
  },
  {
    title: "Purrfect Partners E-Shop",
    year: "2024",
    image: "/projects/purrfect-partners.gif",
    stack: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
    description:
      "A full-stack e-commerce web application built for a pet-themed shopping experience, with server-side routing and a custom front-end interface.",
    focus:
      "Developed the application using Node.js and Express.js for the backend, with HTML, CSS, and JavaScript used to create the storefront and user-facing interactions.",
    codeUrl: "",
    caseStudyUrl: ""
  }
];

export const skillGroups = [
  {
    title: "Data Engineering & Analytics",
    featured: ["Microsoft Fabric", "Power BI", "SQL", "DAX"],
    items: [
      "ETL Pipelines",
      "Data Transformation",
      "Data Migration",
      "Data Modeling",
      "Data Warehousing",
      "Power Query",
      "Dashboard Development",
      "KPI Reporting",
      "Dataflows",
      "Pipeline Orchestration",
      "SaaS Analytics",
      "Cloud Analytics"
    ]
  },
  {
    title: "Software Development",
    featured: ["Python", "React", "TypeScript", "Node.js"],
    items: [
      "Java",
      "JavaScript",
      "Express.js",
      "HTML/CSS",
      "Google Apps Script",
      "C#",
      "C",
      "Unit Testing",
      "CI/CD",
      "Agile/Scrum"
    ]
  },
  {
    title: "Machine Learning",
    featured: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    items: [
      "Model Training",
      "Hyperparameter Tuning",
      "Feature Engineering",
      "Jupyter Notebook",
      "Image Classification",
      "Data Preprocessing",
      "Normalization"
    ]
  },
  {
    title: "Tools & Cloud",
    featured: ["Azure DevOps", "Qlik Sense", "GitHub", "Automation"],
    items: [
      "Git",
      "Jira",
      "Anaconda",
      "Google Workspace",
      "CRM",
      "Business Central",
      "Windows",
      "macOS",
      "Linux",
      "Azure Services"
    ]
  }
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    short: "AZ-900",
    image: "/certifications/az900.png",
    certificateUrl: "/certifications/az900-certificate.png"
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    short: "SC-900",
    image: "/certifications/sc900.png",
    certificateUrl: "/certifications/sc900-certificate.png"
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    short: "AI-900",
    image: "/certifications/ai900.png",
    certificateUrl: "/certifications/ai900-certificate.png"
  },
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    short: "DP-600",
    image: "/certifications/dp600.png",
    note: "In progress",
    certificateUrl: ""
  }
];