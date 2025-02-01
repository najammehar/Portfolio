import { Client, Databases, Query, Storage } from "appwrite";
import Config from "../Conf/Config";

export class Project {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(Config.appwriteURL)
            .setProject(Config.appwriteProjectID)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // Get pinned projects
    async getPinnedProjects() {
        try {
            const queries = [
                Query.equal("isPinned", true),
                Query.orderAsc("pinnedOrder"),
                Query.limit(4)
            ];
            const response = await this.databases.listDocuments(
                Config.appwriteDatabaseID,
                Config.appwriteCollectionID,
                queries
            );
            return response.documents;
        } catch (error) {
            console.log("Appwrite service :: getPinnedProjects :: error", error);
            throw error;
        }
    }

    // Get other projects (non-pinned)
    async getOtherProjects(limit, offset) {
        try {
            const queries = [
                Query.equal("isPinned", false),
                Query.orderAsc("$createdAt"),
                Query.limit(limit),
                Query.offset(offset)
            ];
            const response = await this.databases.listDocuments(
                Config.appwriteDatabaseID,
                Config.appwriteCollectionID,
                queries
            );
            return response.documents;
        } catch (error) {
            console.log("Appwrite service :: getOtherProjects :: error", error);
            throw error;
        }
    }
}

const ProjectService = new Project();
export default ProjectService;