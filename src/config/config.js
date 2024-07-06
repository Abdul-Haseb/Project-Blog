const config = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWrtieProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),
  appWriteCollectionId: String(import.meta.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.VITE_APPWRITE_BUCKET_ID),
};

export default config;
