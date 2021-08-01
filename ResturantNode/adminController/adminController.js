const model = require("../adminModel/adminModel.js");
exports.addRest = (req, res) => {
  console.log("I am here");
  if (!req.body) {
    res.status(400).send({
      message: "Content Cannot be empty",
    });
  }
  const rest = new model({
    rest_name: req.body.rest_name,
    address: req.body.address,
    phone: req.body.phone,
  });
  model.addRest(req.body, (err, data) => {
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

exports.getAll = (req, res) => {
  model.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};

exports.delRest = (req, res) => {
  console.log(req.params.id);
  if (!req.body) {
    res.status(400).send({
      message: "Content Cannot be empty",
    });
  }
  model.delRest(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};
exports.getRest = (req, res) => {
  console.log(req.params.id);
  model.getRest(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};

exports.editRest = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  model.editRest =
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

exports.search = (req, res) => {
  console.log(req.params.name);
  model.search(req.params.name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error Occurred",
      });
    else res.send(data);
  });
};
