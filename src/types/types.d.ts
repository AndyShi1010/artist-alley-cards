type SocialEntry = {
    name: string,
    site: "X" | "Facebook" | "Instagram" | "Bluesky" | "Pixiv" | "Tumblr" | string,
    link: string
}

type CardImage = {
    width: number,
    height: number,
    orientation?: "horiz" | "vert"
    front: string,
    back?: string,
    
}

export type CardEntry = {
    path: string,
    last_updated: number,
    name: string,
    aliases: string[],
    card?: CardImage,
    socials?: SocialEntry[],
} 