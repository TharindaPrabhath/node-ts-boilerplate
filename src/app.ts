import express, { Request, Response } from "express";
import cors from "cors";
import connectMongodb from "./config/mongodb";
import log from "./config/logger";
import { handleError, logError } from "./utils/errorHandler";

// if the server was started in dev mode, then the below code block will execute
// and load values from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const API_VERSION = "v1";
const PORT = process.env.PORT || 5001;

const app = express();
const jobRoutes = require("./routes/job.routes");
const webhookRoutes = require("./routes/webhook.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// welcome route
app.use(`${API_VERSION}/welcome`, (req: Request, res: Response) => {
  res.status(200).send(`Welcome to DRIFLYS backend JOB SERVER ${API_VERSION}`);
});
// job routes
app.use(`/${API_VERSION}/jobs`, jobRoutes);
// webhook routes
app.use(`${API_VERSION}/webhooks`, webhookRoutes);

// error handling
app.use(logError);
app.use(handleError);

connectMongodb()
  .then(() => {
    log.info("Connected to mongodb");

    app.listen(PORT, () => {
      log.info(`Server started on port: ${PORT}`);
    });
  })
  .catch((err) => log.error(err));
