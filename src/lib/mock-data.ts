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
  { id: "1", name: "Alex Johnson", role: "Owner / CEO", avatarId: "ceo", skills: ["Leadership", "Strategy"], reportsTo: null },
  { id: "2", name: "Samantha Lee", role: "Manager", avatarId: "manager1", skills: ["Project Management", "Client Relations"], reportsTo: "1" },
  { id: "3", name: "David Chen", role: "Manager", avatarId: "manager2", skills: ["Technical Architecture", "Team Leadership"], reportsTo: "1" },
  { id: "4", name: "Maria Garcia", role: "Team Lead", avatarId: "teamlead1", skills: ["Frontend", "React", "UX/UI"], reportsTo: "2" },
  { id: "5", name: "James Brown", role: "Team Lead", avatarId: "teamlead2", skills: ["Backend", "Node.js", "Databases"], reportsTo: "2" },
  { id: "6", name: "Linda Williams", role: "Team Lead", avatarId: "teamlead3", skills: ["Mobile Dev", "iOS", "Android"], reportsTo: "3" },
  { id: "7", name: "Robert Jones", role: "Team Lead", avatarId: "teamlead4", skills: ["DevOps", "Cloud", "CI/CD"], reportsTo: "3" },
  { id: "8", name: "Emily White", role: "Web Developer", avatarId: "employee1", skills: ["React", "TypeScript"], reportsTo: "4" },
  { id: "9", name: "Michael Green", role: "Web Developer", avatarId: "employee2", skills: ["Vue.js", "CSS"], reportsTo: "4" },
  { id: "10", name: "Jessica Taylor", role: "Backend Developer", avatarId: "employee3", skills: ["Python", "Django"], reportsTo: "5" },
  { id: "11", name: "Chris Harris", role: "Backend Developer", avatarId: "employee4", skills: ["Go", "Microservices"], reportsTo: "5" },
  { id: "12", name: "Sarah Miller", role: "Mobile Developer", avatarId: "employee5", skills: ["Swift", "Kotlin"], reportsTo: "6" },
  { id: "13", name: "Daniel Martinez", role: "Mobile Developer", avatarId: "employee6", skills: ["React Native"], reportsTo: "6" },
  { id: "14", name: "Laura Clark", role: "DevOps Engineer", avatarId: "employee7", skills: ["AWS", "Docker"], reportsTo: "7" },
  { id: "15", name: "Kevin Scott", role: "DevOps Engineer", avatarId: "employee8", skills: ["Kubernetes", "Terraform"], reportsTo: "7" },
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
