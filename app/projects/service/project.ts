export interface Project {
    image: string;
    title: string;
    url: string;
    description: string[];
}
export interface Company {
    name: string;
    projects: Project[];
}
export interface ProjectDetails {
    title: string;
    content: string;
    companies: Company[];
    role: string;
    url: string;
    responsibility: string;
    client: string;
    duration: string;
    location: string;
    technology: string[];
    achivement: string;
}
