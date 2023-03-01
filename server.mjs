import UserRouter from "./routes/useRouter.js"
import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import connect from './config/db.js'


const app = express()
const port = 8000

dotenv.config()
app.use(cors())
app.use(bodyParser.json());
app.use("/",UserRouter);
connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => console.log("Server is running :" + process.env.PORT))