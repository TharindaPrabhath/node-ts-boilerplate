import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const MONGODB_CLUSTER_NAME = process.env.MONGODB_CLUSTER_NAME;

const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER_NAME}.x3dty.mongodb.net/${MONGODB_DB_NAME}?retryWrites=true&w=majority`
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default connect;
