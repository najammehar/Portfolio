import { Client, Databases, ID } from "appwrite";
import Config from "../Conf/Config";

export class Mail {
    client = new Client();
    databases;
    constructor(){
        this.client
            .setEndpoint(Config.appwriteURL)
            .setProject(Config.appwriteProjectID)
        this.databases = new Databases(this.client);
    }

    async sendMail(name, email, subject, message){
        try {
            const response = await this.databases.createDocument(
                Config.appwriteDatabaseID,
                Config.appwriteCollectionIDMail,
                ID.unique(),
                {
                    name,
                    email,
                    subject,
                    message
                }
            )
            return response;
        } catch (error) {
            console.log("Appwrite service :: sendMail :: error", error);
            throw error;
        }
    }
}

const MailService = new Mail();
export default MailService;