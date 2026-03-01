import {
  Calculator,
  ClipboardCheck,
  TrendingUp,
  Building2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Building,
  Globe
} from "lucide-react";
import React from "react";

export const siteConfig = {
  name: "Apex Partners",
  description: "Chartered Accountants & Strategic Advisors",
  contact: {
    email: "contact@apexpartners.ca",
    phone: "+1 (555) 867-5309",
    address: "400 Financial District Blvd, Suite 2100, Metropolis, NY 10004",
  },
  // Toggle these flags to true/false to show/hide sections
  features: {
    showClients: false, // Currently disabled
    showProjects: false, // Currently disabled
    showTestimonials: true, // Enabled
  }
};

export const services = [
  {
    title: "Audit & Assurance",
    description: "Independent and objective evaluations of financial statements to ensure accuracy, transparency, and regulatory compliance.",
    icon: ClipboardCheck
  },
  {
    title: "Taxation Services",
    description: "Strategic tax planning, preparation, and filing for corporations and high-net-worth individuals to optimize liabilities.",
    icon: Calculator
  },
  {
    title: "Corporate Advisory",
    description: "Expert guidance on mergers, acquisitions, financial restructuring, and long-term business growth strategies.",
    icon: TrendingUp
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Comprehensive full-cycle accounting, financial reporting, and payroll management tailored for modern enterprises.",
    icon: Building2
  }
];

export const team = [
  {
    name: "James Sterling, CA",
    role: "Managing Partner",
    bio: "With over 15 years of distinguished experience in corporate taxation, audit, and strategic financial advisory. James founded Apex Partners to provide unparalleled service to growing enterprises.",
    image: "/src/assets/images/team.jpg" // Using the generated image
  }
];

export const testimonials = [
  {
    quote: "Apex Partners transformed our financial reporting process. Their attention to detail and proactive tax strategies have been invaluable to our growth.",
    author: "Sarah Jenkins",
    company: "TechNova Solutions"
  },
  {
    quote: "Professional, fiercely reliable, and always available when we need complex advisory. They are true partners in our business.",
    author: "Michael Chang",
    company: "Global Logistics Ltd."
  }
];

export const clients = [
  { name: "Acme Corp", icon: Building },
  { name: "Global Industries", icon: Globe }
];

export const projects = [
  {
    title: "Merger Restructuring for TechNova",
    description: "Successfully navigated complex tax implications during a $50M merger.",
  }
];
