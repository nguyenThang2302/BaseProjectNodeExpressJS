const express = require("express");
const app = express();
const path = require("path");
const route = require("./routes");
const hbs = require("express-handlebars");
const db = require("./config/db");
const bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const methodOverride = require("method-override");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

// Static File
app.use(express.static(path.join(__dirname, "public")));

//Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//Custom middlewares

//Template engine
app.engine("handlebars", hbs.engine());
app.engine(
  "handlebars",
  hbs.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
      //helpers: Create Function
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

//Connection DB
db.connect();
//Route init
route(app);

app.listen(3000);
