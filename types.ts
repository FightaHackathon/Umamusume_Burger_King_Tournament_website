
export interface Player {
    name: string;
    role: string;
    avatarUrl: string;
    bio: string;
}

export interface Team {
    id: number;
    name: string;
    logoUrl: string;
    description: string;
    members: Player[];
}

export interface Host {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export interface NavLink {
    name: string;
    path: string;
}