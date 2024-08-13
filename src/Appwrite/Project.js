import { Client, Databases, Query, Storage } from "appwrite";
import Config from "../Conf/Config";

export class Project {
    client = new Client();
    dartabases;
    storage;
    constructor(){
        this.client
            .setEndpoint(Config.appwriteURL)
            .setProject(Config.appwriteProjectID)
        this.dartabases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async getProjects(limit, offset){
        try {
            const queries = [
                Query.orderDesc("$createdAt"),
                Query.limit(limit),
                Query.offset(offset)
            ]
            let response = await this.dartabases.listDocuments(
                Config.appwriteDatabaseID,
                Config.appwriteCollectionID,
                queries
            );
            return response.documents;
        } catch (error) {
            console.log("Appwrite service :: getProjects :: error", error);
            throw error;
        }
    }

}

const ProjectService = new Project();
export default ProjectService;
