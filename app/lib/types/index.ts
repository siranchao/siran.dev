
export interface PostData {
    title: string; 
    subtitle: string; 
    info: string; 
    markdownContent?: string;
    readingTime?: number;
    isMarkdown?: boolean;
    iconUrl?: string;
    primaryImgUrl?: string;
    secondaryImgUrl?: string;
    videoUrl?: string;
    mainText?: string; 
    primaryLink: string; 
    primaryUrl: string;  
    secondaryLink?: string; 
    secondaryUrl?: string; 
}


export interface Tag {
    id: string;
    name: string;
}