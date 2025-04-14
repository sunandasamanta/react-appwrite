import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client;
    account: Account;
    constructor() {
        this.client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
        this.account = new Account(this.client);
    }

    async signUp(email: string, password: string) {
        try {
            if (!email || !password) {
                throw new Error("Email and password are required.");
            }
            const user = await this.account.create(ID.unique(), email, password);
            if (!user) {
                throw new Error("Signup failed.");
            }
            if (user) {
                return this.account.createEmailPasswordSession(email, password);
            }
        } catch (error) {
            console.log("Appwrite :: SignUp :: Error", error);
        }
    }

    async logIn(email: string, password: string) {
        try {
            if (!email || !password) {
                throw new Error("Email and password are required.");
            }
            const response = await this.account.createEmailPasswordSession(email, password);
            if (!response) {
                throw new Error("Login failed.");
            }
            return response;
        } catch (error) {
            console.log("Appwrite :: Login :: Error", error);
        }
    }

}

const authService = new AuthService();
export default authService;