export interface Details {
    qualification: string;
    year: string;
    percentage: string;
    from: string;
    location: string;
    content: string;
}
export interface Education {
    title: string;
    content: string;
    education: Details[];
}