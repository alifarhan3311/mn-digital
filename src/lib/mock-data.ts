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
  { id: '1', name: 'Ali Farhan', role: 'Manager', avatarId: 'ceo', skills: ['Leadership', 'Strategy'], reportsTo: null },
  { id: '2', name: 'Rajeel Siddiqui', role: 'Team Leader', avatarId: 'manager1', skills: ['Project Management', 'Team Leadership'], reportsTo: '1' },
  { id: '3', name: 'Jane Doe', role: 'Frontend Developer', avatarId: 'teamlead1', skills: ['Frontend', 'React', 'UX/UI'], reportsTo: '2' },
  { id: '4', name: 'John Smith', role: 'Backend Developer', avatarId: 'teamlead2', skills: ['Backend', 'Node.js', 'Databases'], reportsTo: '2' },
  { id: '5', name: 'Emily White', role: 'Mobile App Developer', avatarId: 'employee5', skills: ['Mobile Dev', 'iOS', 'Android'], reportsTo: '2' },
  { id: '6', name: 'Alex Johnson', role: 'AI Specialist', avatarId: 'employee1', skills: ['AI/ML', 'Python'], reportsTo: '3' },
  { id: '7', name: 'Sarah Brown', role: 'UI/UX Designer', avatarId: 'employee2', skills: ['Figma', 'User Research'], reportsTo: '4' },
  { id: '8', name: 'Michael Clark', role: 'QA Engineer', avatarId: 'employee3', skills: ['Testing', 'Automation'], reportsTo: '4' },
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
