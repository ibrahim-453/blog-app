const conf = {
    appwriteURL : String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectID : String(import.meta.env.VITE_APP_PROJECT_ID),
    appwriteDatabaseID : String(import.meta.env.VITE_APP_DATABASE_ID),
    appwriteCollectionID : String(import.meta.env.VITE_APP_COLLECTION_ID),
    appwriteBucketID : String(import.meta.env.VITE_APP_BUCKET_ID)
}
export default conf