require("dotenv").config();
const model = require("../models/models.js");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
var isLogin;

exports.addUser = (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Student
  const user = new model({
    email: req.body.email,
    name: req.body.name,
    usr_type: req.body.usr_type,
    password: req.body.password,
  });

  // Save Student in the database
  model.addUser(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

exports.allUser = (req, res) => {
  model.allUser((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};
exports.getUser = (req, res) => {
  console.log(req.params.id);
  model.getUser(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some Error occured",
      });
    else {
      res.send(data);
    }
  });
};

exports.delUser = (req, res) => {
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
exports.login = (req, res) => {
  //validation
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  //Database Access
  model.login(req.body, async (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    else {
      //hashing comparison
      console.log(process.env.TOKEN_SECRET);
      const match = await bycrpt.compare(req.body.password, data[0].password);
      //token Creation
      const accessToken = jwt.sign(data[0].email, process.env.TOKEN_SECRET);
      if (match) {
        isLogin = req.session;
        isLogin.email = req.body.email;
        isLogin.usr_type = req.body.usr_type;
        console.log(data);
        res.send(accessToken);
      } else res.send("Invalid Credientials");
    }
  });
};
exports.order = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  model.order(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    else {
      res.send("abc");
    }
  });
};
exports.myOrder = (req, res) => {
  model.myOrder(6, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    else {
      res.send("abc");
    }
  });
};
