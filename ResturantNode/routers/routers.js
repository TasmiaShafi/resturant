module.exports = (app) => {
  const controller = require("../controllers/controllers.js");
  const controller2 = require("../adminModel/adminModel.js");
  app.post("/signup", controller.addUser);
  app.get("/alluser", controller.allUser);
  app.delete("/delUser/:id", controller.delUser);
  app.get("/getUser/:id", controller.getUser);
  app.post("/login", controller.login);
  app.post("/order", controller.order);
  app.get("/myorder", controller.myOrder);
  //app.post("/addRest", controller2.addRest);
};
