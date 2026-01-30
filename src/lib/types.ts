import type { LucideProps } from "lucide-react"
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarId: string;
  skills: string[];
  reportsTo: string | null;
  projects?: string[];
  contactInfo?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface TeamNode extends TeamMember {
  children: TeamNode[];
}

export interface CompanyInfo {
  mission: string;
  vision: string;
  values: string;
  about: string;
  stats: {
    projects: number;
    clients: number;
    teamSize: number;
  }
}
