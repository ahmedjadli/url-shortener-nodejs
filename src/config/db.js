const mongoose = require("mongoose");
require("dotenv").config();

// mongoose options

const options = {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// mongo DB ENV Vars
const { MONGO_HOSTNAME, MONGO_DB_NAME, MONGO_PORT } = process.env;

// connection to DB

const dbConnectionURL = {
  LOCALURL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_NAME}`,
};

mongoose
  .connect(dbConnectionURL.LOCALURL, options)
  .then(() => console.log("MONGO DB CONNECTED ..."))
  .catch((error) => {
    console.log("UNABLE TO CONNECT TO MONGO DB");
    console.log("****************************************");
    console.log(error);
    console.log("****************************************");
  });
