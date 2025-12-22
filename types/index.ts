export interface TechItem {
    name: string;
    icon: any;
}

export interface ExperienceProps {
    company: string;
    role: string;
    date: string;
    desc: string;
    metrics: string[];
    tech: TechItem[];
}
