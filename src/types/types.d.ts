type SocialEntry = {
    name: string,
    site: "X" | "Facebook" | "Instagram" | "Bluesky" | "Pixiv" | "Tumblr" | string,
    link: string
}

type CardImage = {
    front: string,
    back?: string,
    
}

export type CardEntry = {
    path: string;
    name: string;
    aliases: string[];
    card?: CardImage
    socials?: SocialEntry[]; 
} 