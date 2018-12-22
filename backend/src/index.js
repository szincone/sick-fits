require("dotenv").config({ path: "variables.env" });
const createServer = require("createServer");
const db = require("./db");

const server = createServer();

// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONT_URL,
    },
  },
  res => {
    console.log(`Server is running on PORT http://localhost:${res.port}`);
  },
);
