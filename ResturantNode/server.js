const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
var cors = require("cors");
app.use(session({ secret: "1gt345", saveUninitialized: true, resave: true }));
app.use(cors()); // Use this after the variable declaration
app.use(fileUpload());
require("./routers/routers.js")(app);
require("./adminRouter/adminRouter.js")(app);
require("./adminRouter/mealRouter.js")(app);

app.get("/", (req, res) => {
  res.send("Home Page...");
});
app.listen(PORT, () => {
  console.log("Server is listening..");
});
