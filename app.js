const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// cors middleware
app.use(cors());

mongoose.connect("mongodb://localhost/todocrud", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("server stated on port 4000"));
