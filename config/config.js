import dotenv from "dotenv";
dotenv.config();

export default {
    mongoURL: `mongodb+srv://${process.env.username}:${process.env.password}@freecluster.sui3ma0.mongodb.net/doc_clinic`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}