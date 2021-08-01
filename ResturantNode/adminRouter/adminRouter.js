module.exports = (adminapp) => {
  const controller = require("../adminController/adminController.js");
  adminapp.post("/addRest", controller.addRest);
  adminapp.get("/all", controller.getAll);
  adminapp.delete("/delRest/:id", controller.delRest);
  adminapp.get("/:id", controller.getRest);
  adminapp.put("/editResturant/:id", controller.editRest);
  adminapp.get("/search/:name", controller.search);
};
