export interface Stack {
    title: string;
    experties: number;
}

export interface Skill {
    category: string;
    stacks: Stack[];
}

export interface RootObject {
    title: string;
    content: string;
    tags: string[];
    skills: Skill[];
}