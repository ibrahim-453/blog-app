import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"
export class Auth{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
            this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const useraccount = await this.account.create(ID.unique(),email,password,name)

            if(useraccount){
                return useraccount
            }
            else{
                alert("Account Not Created")
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async get(){
        try {
            return await this.account.get()
        } catch (error) {
            return null
        }

    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authservice = new Auth()

export default authservice