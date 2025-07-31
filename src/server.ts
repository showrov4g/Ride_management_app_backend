import mongoose from "mongoose";
import app from "./app";


const PORT = process.env.PORT || 5000;
const DB_URL=process.env.DB_URL as string;

async function main(){
    try {
    await mongoose.connect(DB_URL);
    console.log("database connection");
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    })
        
    } catch (error) {
        console.log(error,"database connection error")
    }
}
main()