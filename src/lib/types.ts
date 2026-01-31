import type { LucideProps } from "lucide-react"
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export type ProjectCategory = 'Web Development' | 'Mobile Apps' | 'Graphic Design' | 'Others';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  imageId: string;
  link?: string;
}

export interface CompanyInfo {
  mission: string;
  vision: string;
  values: string;
  about: string;
  stats: {
    projects: number;
    clients: number;
  }
}
