import app from "./app";
import dotenv from "dotenv";
import { dbConnection } from "./database";
dotenv.config();
dbConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("server listen on port: " + PORT);
