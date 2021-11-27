import { connect } from "mongoose";

export const dbConnection = async () => {
  try {
    //mongodb://localhost/primeradb
    const db = await connect(
      "mongodb+srv://" +
        process.env.DB_USERNAME +
        ":" +
        process.env.DB_PASSWORD +
        "@cluster0.tqsdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    // mongodb+srv://webinar:<password>@cluster0.tqsdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
