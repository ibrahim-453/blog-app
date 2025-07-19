import conf from "../conf/conf"
import { Client,Databases,Storage,Query,ID} from "appwrite";

export class DBService{
    client = new Client()
    databases;
    storage;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
            this.databases = new Databases(this.client)
            this.storage = new Storage(this.client)
    }

    async createPost({title,author,content,createdAt,status,userId,slug,image}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,ID.unique(),
        {
            title,
            author,
            content,
            createdAt,
            slug,
            status,
            userId,
            image
        }
        )
        } catch (error) {
            throw error
        }

    }

    async updatePost(slug,{title,author,content,image,updatedAt,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug,
                {
                    title,
                    author,
                    content,
                    updatedAt,
                    status,
                    image
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug)
        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
             return await this.databases.getDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug)
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID,conf.appwriteCollectionID,queries)
        } catch (error) {
            throw error
        }
    }

    async uploadfile(file){
        try {
            return await this.storage.createFile(conf.appwriteBucketID,ID.unique(),file)
        } catch (error) {
            throw error
        }
    }

    async deletefile(fileId){
        try {
            return await this.storage.deleteFile(conf.appwriteBucketID,fileId)
        } catch (error) {
            throw error
        }
    }

    async filePreview(fileId){
        return this.storage.getFilePreview(conf.appwriteBucketID,fileId)
    }
}

const service = new DBService()

export default service