import cors from "cors";
import express from "express";
import { ConnectToMongoDb } from "./config/DbConfig.js";
import { ConnectToCloudinary } from "./config/cloudinaryConfig.js";
import { PORT } from "./config/serverConfig.js";
import ApiRoute from "./routes/ApiRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", ApiRoute);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
  ConnectToMongoDb();
  ConnectToCloudinary();
});
