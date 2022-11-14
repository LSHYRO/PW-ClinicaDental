import express, { Application } from "express";
import morgan from "morgan";
import path from "path"
import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index.route";
import exampleRouter from "./routes/example.route";
import exampleV2Router from "./routes/example.v2.route";
import logginRouter from "./routes/loggin.router";

const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./public')))

//routes
app.use("/", indexRouter);
app.use("/api/v1/example",exampleRouter);
app.use("/api/v2/example",exampleV2Router);
app.use("/view/loggin",logginRouter);

export default app;
