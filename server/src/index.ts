import app from "./app";
import connectToDb from "../config/db";

const PORT = process.env.PORT;

(
    async()=>{
        try {
            const db = await connectToDb()
            console.log(db.connection.host)
            app.listen(PORT,()=>{
                console.log("Server is runnig on port", PORT)
            })
            
        } catch (error) {
            console.log(error)
        }
    }
)()
