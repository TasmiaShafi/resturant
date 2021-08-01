const sql = require("./../db");

//user object Creation
const Meal = function (meal) {
  this.meal_name = this.meal_name;
  this.Resturant_ID = this.Resturant_ID;
  //this.image = meal.image;
};

Meal.addMeal = (meal, result) => {
  console.log(meal);
  console.log("I am here 3");
  sql.query("INSERT INTO meals SET ?", meal, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Meal Added: ", { ...meal });
    result(null, { ...meal });
  });
};
Meal.allMeal = (result) => {
  sql.query("SELECT * from meals", (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

Meal.delMeal = (id, result) => {
  sql.query(`DELETE FROM meals Where meal_id=?`, [id], (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};

Meal.getMeal = (id, result) => {
  console.log(id);
  sql.query(`SELECT * from meals where rest_id="${id}"`, (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};
Meal.editMeal = (meal, id, result) => {
  console.log(meal);
  sql.query(
    `UPDATE rest SET meal_name=?, image=? Where meal_id=?`,
    [meal.meal_name, meal.image, id],
    (err, data) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      result(null, data);
    }
  );
};

module.exports = Meal;
