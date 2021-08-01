const sql = require("./../db");
const bycrpt = require("bcrypt");
const saltRounds = 10;

//user object Creation
const User = function (usr) {
  this.email = usr.email;
  this.name = usr.name;
  this.usr_type = usr.usr_type;
  this.password = usr.password;
};

User.addUser = (newUser, result) => {
  bycrpt.hash(newUser.password, saltRounds).then((hash) => {
    newUser.password = hash;
    //Saving into DB
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Student: ", { ...newUser });
      result(null, { ...newUser });
    });
  });
};
User.allUser = (result) => {
  sql.query("SELECT * from user", (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};
User.delRest = (id, result) => {
  sql.query(`DELETE FROM user Where usr_id=?`, [id], (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};
User.getUser = (id, result) => {
  console.log(id);
  sql.query(`SELECT * from user where usr_id="${id}"`, (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};

User.login = (loginUser, result) => {
  console.log(loginUser);
  console.log("I am in models");
  //accessing hash from DB
  const login = sql.query(
    `SELECT * from user WHERE email="${loginUser.email}"`,
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
  console.log("Login", login.values);
};
User.order = (Order, u_id, result) => {
  console.log(Order);
  sql.query("INSERT INTO orders SET ?", Order, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Query Result", abc.values);
    console.log("Order Created: ", { ...Order });
    result(null, { ...Order });
  });
};
User.myOrder = (u_id, result) => {
  const abc = sql.query(
    `SELECT * from orders where u_id="${u_id}"`,
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(abc.values);
      result(null, abc.values);
    }
  );
};

module.exports = User;
