import { Code2, Smartphone, PenTool, TrendingUp, Search, Cloud } from "lucide-react";
import type { Service, TeamMember, CompanyInfo } from "./types";

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

export const teamMembers: TeamMember[] = [
  // Owner
  { id: '1', name: 'Ali Farhan', role: 'CEO', avatarId: 'ceo', skills: ['Leadership', 'Strategy', 'Innovation'], reportsTo: null, socials: { twitter: '#', linkedin: '#', github: '#' } },

  // Managers
  { id: '2', name: 'Rajeel Siddiqui', role: 'Engineering Manager', avatarId: 'manager1', skills: ['Project Management', 'System Architecture'], reportsTo: '1', socials: { linkedin: '#', github: '#' } },
  { id: '3', name: 'Sara Khan', role: 'Product Manager', avatarId: 'manager2', skills: ['Product Strategy', 'User Research'], reportsTo: '1', socials: { twitter: '#', linkedin: '#' } },

  // Team Leads
  { id: '4', name: 'Jane Doe', role: 'Frontend Lead', avatarId: 'teamlead1', skills: ['Frontend', 'React', 'UX/UI'], reportsTo: '2', socials: { github: '#', linkedin: '#' } },
  { id: '5', name: 'John Smith', role: 'Backend Lead', avatarId: 'teamlead2', skills: ['Backend', 'Node.js', 'Databases'], reportsTo: '2', socials: { github: '#' } },
  { id: '6', name: 'Emily White', role: 'Mobile Lead', avatarId: 'teamlead3', skills: ['Mobile Dev', 'iOS', 'Android'], reportsTo: '3' },

  // Employees
  { id: '7', name: 'Alex Johnson', role: 'Frontend Developer', avatarId: 'employee1', skills: ['AI/ML', 'Python', 'React'], reportsTo: '4' },
  { id: '8', name: 'Maria Garcia', role: 'Frontend Developer', avatarId: 'employee2', skills: ['Vue.js', 'CSS Animations'], reportsTo: '4' },
  { id: '9', name: 'David Chen', role: 'Backend Developer', avatarId: 'employee3', skills: ['Go', 'Microservices'], reportsTo: '5' },
  { id: '10', name: 'Michael Clark', role: 'Backend Developer', avatarId: 'employee4', skills: ['Python', 'Django', 'DevOps'], reportsTo: '5' },
  { id: '11', name: 'Jessica Brown', role: 'iOS Developer', avatarId: 'employee5', skills: ['Swift', 'SwiftUI'], reportsTo: '6' },
  { id: '12', name: 'Chris Lee', role: 'Android Developer', avatarId: 'employee6', skills: ['Kotlin', 'Jetpack Compose'], reportsTo: '6' },
];

export const companyInfo: CompanyInfo = {
    mission: "To empower businesses with innovative and transformative digital solutions, fostering growth and success in an ever-evolving technological landscape.",
    vision: "To be a leading digital agency recognized for our creativity, technical excellence, and commitment to delivering exceptional results for our clients worldwide.",
    values: "Innovation, Quality, Collaboration, Integrity, and Client-Centricity.",
    about: "Digital Morph is a full-service digital agency specializing in creating bespoke websites, mobile applications, and digital experiences. Our team of experts is passionate about pushing the boundaries of technology and design to create products that not only look good but also perform exceptionally. We believe in building strong partnerships with our clients to turn their ideas into reality.",
    stats: {
        projects: 150,
        clients: 85,
        teamSize: 15
    }
}
