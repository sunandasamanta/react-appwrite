// 
import { signUpFieldValidation, loginFieldValidation } from "../../util/regex";


import { Client, Account, ID } from "appwrite";


export class AuthServices {
    client = new Client;
    account: Account;
    constructor() {
        this.client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
        this.account = new Account(this.client);
    }


    async signUp(name: string, email: string, password: string) {
        // try...catch block to handle errors
        try {

            // Check validity of name, email, and password
            if (signUpFieldValidation({ name, email, password })) {
                const user = await this.account.create(ID.unique(), name, email, password);
                if (!user) {
                    throw new Error("Signup failed.");
                }
                return this.account.createEmailPasswordSession(email, password);
            }

        } catch (error) {
            console.log("Appwrite :: SignUp :: Error", error);
        }
    }

    async logIn(email: string, password: string) {
        try {
            if (loginFieldValidation({ email, password })) {
                const user = await this.account.createEmailPasswordSession(email, password);
                if (!user) {
                    throw new Error("Login failed.");
                }
                return user;
            } else {
                throw new Error("Invalid email or password.");
            }
        } catch (error) {
            console.log("Appwrite :: Login :: Error", error);
        }
    }

    async getUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log("Appwrite :: GetUser :: Error", error);
        }
    }

    async logOut() {
        try {
            const response = await this.account.deleteSession('current');
            return response;
        } catch (error) {
            console.log("Appwrite :: Logout :: Error", error);
        }
    }

}

const authServices = new AuthServices();
export default authServices;