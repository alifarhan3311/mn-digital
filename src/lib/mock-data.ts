import { Code2, Smartphone, PenTool, TrendingUp, Search, Cloud } from "lucide-react";
import type { Service, Project, CompanyInfo } from "./types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Crafting beautiful, high-performance websites tailored to your business needs.",
    icon: Code2,
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Creating stunning visuals that define your brand and captivate your audience.",
    icon: PenTool,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Driving growth with data-driven marketing strategies and campaigns.",
    icon: TrendingUp,
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Boosting your visibility on search engines to attract more organic traffic.",
    icon: Search,
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Leveraging cloud infrastructure for scalable and reliable solutions.",
    icon: Cloud,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution with a custom CMS and payment integration.",
    category: "Web Development",
    imageId: "project1",
    link: "#",
  },
  {
    id: "proj-2",
    title: "Fitness Tracker App",
    description: "A mobile app to track workouts, nutrition, and progress with social features.",
    category: "Mobile Apps",
    imageId: "project2",
    link: "#",
  },
  {
    id: "proj-3",
    title: "Corporate Rebranding",
    description: "A complete visual overhaul for a major tech company, including logo and brand guidelines.",
    category: "Graphic Design",
    imageId: "project3",
    link: "#",
  },
  {
    id: "proj-4",
    title: "SaaS Dashboard",
    description: "An intuitive and data-rich dashboard for a business intelligence SaaS product.",
    category: "Web Development",
    imageId: "project4",
    link: "#",
  },
  {
    id: "proj-5",
    title: "Social Media App",
    description: "A new social platform for niche communities with real-time chat and media sharing.",
    category: "Mobile Apps",
    imageId: "project5",
    link: "#",
  },
  {
    id: "proj-6",
    title: "Product Packaging",
    description: "Eye-catching packaging design for a new line of consumer electronics.",
    category: "Graphic Design",
    imageId: "project6",
    link: "#",
  },
  {
    id: "proj-7",
    title: "Real Estate Portal",
    description: "A comprehensive web portal for property listings with advanced search and map features.",
    category: "Web Development",
    imageId: "project7",
    link: "#",
  },
  {
    id: "proj-8",
    title: "AI Chatbot Integration",
    description: "Integrated a custom AI-powered chatbot for customer service automation.",
    category: "Others",
    imageId: "project8",
    link: "#",
  },
];


export const companyInfo: CompanyInfo = {
    mission: "To empower businesses with innovative and transformative digital solutions, fostering growth and success in an ever-evolving technological landscape.",
    vision: "To be a leading digital agency recognized for our creativity, technical excellence, and commitment to delivering exceptional results for our clients worldwide.",
    values: "Innovation, Quality, Collaboration, Integrity, and Client-Centricity.",
    about: "Digital Morph is a full-service digital agency specializing in creating bespoke websites, mobile applications, and digital experiences. Our team of experts is passionate about pushing the boundaries of technology and design to create products that not only look good but also perform exceptionally. We believe in building strong partnerships with our clients to turn their ideas into reality.",
    stats: {
        projects: 150,
        clients: 85
    }
}
