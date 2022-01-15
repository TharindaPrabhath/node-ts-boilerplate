import { createClient, RedisClientType } from "redis";
import log from "../utils/logger";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const REDIS_PORT = process.env.REDIS_PORT || "6379";

// NOTE: set timeout for avoid the timeout error when connecting to the redis
const client = createClient({ socket: { connectTimeout: 20000 } });

if (!client.isOpen) client.connect();

client.on("connect", () =>
  log.info(`Connected to Redis on port: ${REDIS_PORT}`)
);

client.on("error", (err) => log.error(err));

export default client;
