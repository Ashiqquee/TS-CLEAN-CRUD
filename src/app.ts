import express from "express";
import connectToDB from "./config/mongo";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from 'morgan'
import dotenv from 'dotenv'


import userRoute from "./interfaces/routes/userRoute";
import adminRoute from "./interfaces/routes/adminRoute";


const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};


dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use("/", userRoute);
app.use("/admin", adminRoute);


connectToDB();


const port = process.env.PORT || 3000;



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
