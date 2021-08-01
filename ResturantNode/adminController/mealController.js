const model = require("../adminModel/mealModel.js");
exports.addMeal = (req, res) => {
  let samplefile = req.files.samplefile;
  console.log(samplefile);
  console.log("I am here");
  if (!req.body) {
    res.status(400).send({
      message: "Content Cannot be empty",
    });
  }
  const meal = new model({
    meal_name: req.body.meal_name,
    resturant_ID: req.body.resturant_ID,
    //image: req.body.image,
  });
  model.addMeal(req.body, (err, data) => {
    console.log("I am here 2");
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    else {
      res.send(data);
    }
  });
};

exports.allMeal = (req, res) => {
  model.allMeal((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};

exports.delMeal = (req, res) => {
  console.log(req.params.id);
  if (!req.body) {
    res.status(400).send({
      message: "Content Cannot be empty",
    });
  }
  model.delMeal(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};
exports.getMeal = (req, res) => {
  console.log(req.params.id);
  model.getMeal(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};

exports.editMeal = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  model.editMeal =
    (req.body,
    req.params.id,
    (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some Error Occurred",
        });
      else res.send(data);
    });
};
