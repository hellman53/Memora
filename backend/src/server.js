import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import noteRouter from "./router/notesRouter.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// console.log(process.env.MONGO_URL);
const PORT = process.env.PORT || 5001;
const app = express();

//middleware
app.use(cors({
   origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);
//our simple middleware function
// app.use((req, res, next)=>{
//    console.log(`Req method is ${req.method} and req url is ${req.url}`);
//    next();
// })

app.use("/api/notes", noteRouter)

connectDB().then(()=>[
   app.listen(PORT, ()=> {
      console.log("Server is running on port:", PORT);
   })
])


