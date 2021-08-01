const sql = require("./../db");

//user object Creation
const Resturant = function (rest) {
  this.rest_name = rest.rest_name;
  this.address = rest.address;
  this.phone = rest.phone;
};

Resturant.addRest = (rest, result) => {
  console.log(rest);
  console.log("I am here 3");
  sql.query("INSERT INTO rest SET ?", rest, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Resturant Added: ", { ...rest });
    result(null, { ...rest });
  });
};
Resturant.getAll = (result) => {
  sql.query("SELECT * from rest", (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

Resturant.delRest = (id, result) => {
  sql.query(`DELETE FROM rest Where rest_id=?`, [id], (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};

Resturant.getRest = (id, result) => {
  console.log(id);
  sql.query(`SELECT * from rest where rest_id="${id}"`, (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};

Resturant.editRest = (rest, id, result) => {
  console.log(rest);
  sql.query(
    `UPDATE rest SET rest_name=?, address=?,phone=? Where rest_id=?`,
    [rest.rest_name, rest.address, rest.phone, id],
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
Resturant.search = (name, result) => {
  console.log(name);
  sql.query(`SELECT * FROM rest WHERE rest_name=?`, [name], (err, data) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};

module.exports = Resturant;
