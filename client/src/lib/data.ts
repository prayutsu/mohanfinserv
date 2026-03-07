import {
  TrendingUp,
  Zap,
  BarChart3,
  Shield,
  Target,
  CheckCircle2,
  PieChart,
  RefreshCw
} from "lucide-react";
import React from "react";

export const siteConfig = {
  name: "Mohan Finserv",
  tagline: "CFO Consulting & Financial Advisory",
  description: "Integrated finance leadership across accounting, compliance, and strategic decision-making",
  headline: "Where Financial Intelligence Becomes Business Growth",
  subheadline: "Your trusted partner for Virtual CFO and financial advisory solutions",
  painPoint: "As your business grows, are you facing increasing financial complexities and looking for a trusted CFO consulting partner to strengthen your finance function and enable confident, data-driven decisions?",
  valueProposition: "Mohan Finserv is a CFO consulting and financial advisory firm delivering integrated finance leadership across accounting, compliance, and strategic decision-making—helping businesses scale with clarity, control, and confidence.",
  cta: "Know More",
  contact: {
    email: "hello@mohanfinserv.com",
    phone: "+91 (XXX) XXXXXX",
    address: "Financial District, India",
  },
  features: {
    showClients: false,
    showProjects: false,
    showTestimonials: true,
  }
};

export const services = [
  {
    title: "Virtual CFO & Financial Advisory",
    description: "Strategic financial direction and structured financial management to businesses on a remote basis. We assist startups, SMEs, and growing enterprises with financial planning, cash flow management, performance monitoring, and profitability enhancement—all aligned with your long-term business goals.",
    icon: TrendingUp,
    highlights: [
      "Strategic Financial Planning",
      "Cash Flow & Working Capital Management",
      "Budgeting & Financial Forecasting",
      "Financial Reporting & Performance Analysis",
      "Risk Management & Regulatory Compliance",
      "Investment & Capital Management",
      "Process Optimization Through Financial Automation"
    ]
  },
  {
    title: "Bookkeeping Services",
    description: "Accurate, organized, and real-time financial record management tailored to your business needs. From managing day-to-day transactions and bank reconciliations to preparing financial statements and reports, we ensure complete transparency and regulatory compliance.",
    icon: BarChart3,
    highlights: [
      "Organized Accounting Records",
      "Consistent Bookkeeping Management",
      "Real-Time Financial Visibility",
      "Regulatory-Compliant Accounting Practices",
      "Efficient Financial Operations",
      "Improved Financial Oversight",
      "Enhanced Decision-Making"
    ]
  },
  {
    title: "Capital Optimization Advisory",
    description: "Expert guidance on optimizing your capital structure, evaluating investment opportunities, and supporting funding readiness for sustainable business growth.",
    icon: PieChart,
  },
  {
    title: "Investment Planning",
    description: "Comprehensive investment strategy and planning to align financial goals with business objectives and create long-term wealth.",
    icon: Zap,
  }
];

export const coreValues = [
  {
    title: "Professional Excellence",
    description: "Our financial consulting approach prioritizes proactive ownership and pragmatic problem resolution, enabling strategic financial guidance that drives business growth."
  },
  {
    title: "Integrity and Transparency",
    description: "Integrity, reliability, and accountability are the foundation of our organization. We communicate with honesty, respect, and openness."
  },
  {
    title: "Client-Centric Strategy",
    description: "Our strategy places clients at the core of every decision, delivering personalized solutions that enhance satisfaction and drive long-term success."
  },
  {
    title: "Analytical Excellence",
    description: "Excellence through disciplined analytical thinking with data-driven insights, structured analysis, and critical thinking to support decision-making."
  },
  {
    title: "Accountability",
    description: "We uphold the highest standards of professional care, regulatory compliance, and ethical responsibility with client interests always placed first."
  }
];

export const team = [
  {
    name: "Pawan Daga",
    role: "CA - Senior Financial Advisor",
    qualification: "Chartered Accountant",
    experience: "15+ years",
    bio: "Chartered Accountant with 15+ years of experience in virtual CFO services, digital process automation, taxation, financial reporting, and strategic financial management.",
    image: "/src/assets/images/team.jpg"
  },
  {
    name: "Khushi Munot",
    role: "CA - Risk & Governance Advisor",
    qualification: "Chartered Accountant",
    experience: "4+ years",
    bio: "Chartered Accountant with 4+ years of experience across risk & governance advisory, insolvency resolution advisory, regulatory and GST oversight, forensic audits.",
    image: "/src/assets/images/team.jpg"
  },
  {
    name: "Deepanshu Mittal",
    role: "CA - Financial Management Specialist",
    qualification: "Chartered Accountant",
    experience: "4+ years",
    bio: "Chartered Accountant with 4+ years of experience in Virtual CFO Consulting, bookkeeping, accounting, reporting, compliance, and financial management.",
    image: "/src/assets/images/team.jpg"
  },
  {
    name: "Siddharth Parakh",
    role: "CA - Financial Analysis Expert",
    qualification: "Chartered Accountant",
    experience: "3+ years",
    bio: "Chartered Accountant with 3+ years of experience in financial analysis, business planning, and management reporting, delivering decision-ready financial insights.",
    image: "/src/assets/images/team.jpg"
  },
  {
    name: "Kinjal Lalwani",
    role: "CS - Compliance & Governance",
    qualification: "Company Secretary",
    experience: "3+ years",
    bio: "Company Secretary with 3+ years of experience in corporate compliance, governance frameworks, and corporate secretarial functions.",
    image: "/src/assets/images/team.jpg"
  }
];

export const whyChooseUs = [
  {
    title: "Comprehensive Business Diagnostic",
    icon: Shield
  },
  {
    title: "Data-Driven Financial Insights",
    description: "For better financial decisions",
    icon: BarChart3
  },
  {
    title: "End-to-End Financial Oversight",
    icon: RefreshCw
  },
  {
    title: "Dedicated Growth Partnership",
    icon: Target
  }
];

export const testimonials = [
  {
    quote: "Mohan Finserv transformed our financial operations and gave us the confidence to make data-driven decisions. Their strategic guidance has been instrumental in our growth.",
    author: "Raj Kumar",
    company: "TechStart India"
  },
  {
    quote: "Professional, responsive, and deeply knowledgeable. They manage our finances with the rigor of an in-house CFO, but without the overhead cost.",
    author: "Priya Sharma",
    company: "Manufacturing Solutions Ltd."
  }
];

export const mission = "To empower confident financial decisions through transparent, data-driven, and client-focused advisory.";
export const vision = "To be a trusted growth partner for entrepreneurs across their business journey.";

export const clients = [
  { name: "Tech Startup A" },
  { name: "Manufacturing Co." }
];

export const projects = [
  {
    title: "Financial Transformation for E-commerce Scale-up",
    description: "Implemented comprehensive financial systems and strategic planning that enabled 300% revenue growth.",
  }
];
