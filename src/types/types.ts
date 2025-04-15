import { Models } from "appwrite";

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt?: Date;
    tags?: string[];
    isPublished: boolean;
  }
  
export interface AuthContextProps {
    user: Models.User<Models.Preferences> | User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signUp: (name: string, email: string, password: string) => Promise<void>;
    logIn: (email: string, password: string) => Promise<void>;
    getUser: () => Promise<void>;
    logOut: () => Promise<void>;
}
