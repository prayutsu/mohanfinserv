import {
  TrendingUp,
  Zap,
  BarChart3,
  Shield,
  Target,
  CheckCircle2,
  PieChart,
  RefreshCw,
  ChevronDown
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
    showTestimonials: false,
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
    ],
    process: [
      {
        step: 1,
        title: "Financial & Business Assessment",
        description: "The procedure starts with a detailed evaluation of your business model, financial statements, cash flow structure, and operational processes to assess overall financial health and identify key challenges. This stage helps establish a strong foundation for effective financial management."
      },
      {
        step: 2,
        title: "Data Structuring & Financial Analysis",
        description: "Financial data is organized, validated, and analyzed to gain clear insights into profitability, cost behavior, cash flow patterns, and performance trends. This analysis supports informed decision-making and highlights areas for improvement."
      },
      {
        step: 3,
        title: "Strategic Financial Planning & Budgeting",
        description: "Based on analytical insights, we develop structured financial plans, budgets, and forecasts aligned with business goals, growth strategies, and operational requirements. This ensures better financial control and resource allocation."
      },
      {
        step: 4,
        title: "Cash Flow & Performance Monitoring",
        description: "Monitor cash flow, working capital, and key financial metrics to ensure liquidity, cost discipline, and operational stability. Regular reviews help address deviations and improve financial performance."
      },
      {
        step: 5,
        title: "Reporting, Risk & Compliance Oversight",
        description: "Timely MIS reports, performance dashboards, and financial reviews provide transparency and control. We also identify financial risks early and ensure compliance with statutory and regulatory requirements."
      },
      {
        step: 6,
        title: "Ongoing Advisory & Process Optimization",
        description: "We provide continuous CFO-level advisory, guide capital planning and allocation decisions, and enhance financial processes through automation to improve efficiency, accuracy, and scalability."
      }
    ],
    offerings: [
      "Bookkeeping & Accounting",
      "Monthly Reporting",
      "Financial Statement Preparation",
      "Cash Flow Management",
      "Top-Line & Bottom-Line Improvement",
      "Budgeting & Forecasting",
      "Financial Analysis"
    ],
    tagline: "Grow your business; while we take care of your finances at Mohan Finserv"
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
    ],
    process: [
      {
        step: 1,
        title: "Structured Financial Data Collection",
        description: "All financial transactions, including invoices, receipts, and bank statements, are gathered systematically using secure digital platforms. This ensures accurate, real-time recording and minimizes errors in financial documentation."
      },
      {
        step: 2,
        title: "Transaction Recording & Bank Reconciliation",
        description: "Each transaction is carefully recorded and classified according to international accounting standards. Bank statements and financial records are reconciled regularly to identify discrepancies, prevent fraud, and maintain precise account balances. Automated reconciliation tools enhance speed and reliability."
      },
      {
        step: 3,
        title: "Financial Reporting, Analytics & Insights",
        description: "Detailed financial statements and customized reports provide actionable insights into business performance. Real-time analytics support data-driven decisions, resource optimization, and strategic planning."
      },
      {
        step: 4,
        title: "Tax Preparation & Regulatory Compliance",
        description: "Bookkeeping services integrate compliance checks to ensure all statutory requirements, tax filings, and international accounting standards are met. This minimizes risk and ensures timely submissions to regulatory authorities."
      },
      {
        step: 5,
        title: "Continuous Monitoring & Adaptive Financial Management",
        description: "Ongoing review of financial transactions ensures consistency and accuracy. Bookkeeping solutions are flexible and designed to adapt to changes in business scale, complexity, or transaction volume while maintaining efficiency."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "Continuous bookkeeping support is provided through regular reviews, timely assistance, and ongoing access to financial data. Centralized bookkeeping systems enable seamless collaboration, real-time visibility, and informed decision-making as business needs evolve."
      }
    ],
    offerings: [
      "End-to-End Bookkeeping Management",
      "General Ledger Maintenance",
      "Accounts Payable Management",
      "Accounts Receivable Management",
      "Bank Reconciliation",
      "Financial Statement Preparation",
      "Tax Compliance & Reporting"
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
