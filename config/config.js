import dotenv from "dotenv";
dotenv.config();

export default {
    mongoURL: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@freecluster.sui3ma0.mongodb.net/doc_clinic`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}