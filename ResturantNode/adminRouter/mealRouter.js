module.exports = (adminapp1) => {
  const controller = require("../adminController/mealController.js");
  adminapp1.post("/addmeal", controller.addMeal);
  adminapp1.get("/allMeal", controller.getMeal);
  adminapp1.delete("/delMeal/:id", controller.delMeal);
  adminapp1.get("/:id", controller.getMeal);
  adminapp1.put("/editMeal/:id", controller.editMeal);
};
