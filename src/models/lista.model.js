var dbConn = require('../../config/db.config');

//Employee object create
var Lista = function(lista){
  this.name = lista.name;
  this.created_at = Date.now();
  this.updated_at = Date.now();
};

Lista.findAll = function (result) {
  dbConn.query("select * from listas", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('Listas : ', res);
      result(null, res);
    }
  });
};

Lista.findById = function (id, result) {
  dbConn.query("select * from listas where id = ?", id, function (err, res) {
    if(err) {
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};

Lista.create = function (newLista, result) {
  dbConn.query("insert into listas set ?", newLista, function (err, res) {
    if(err) {
      console.log(err.message);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Lista.update = function(id, lista, result){
  dbConn.query("update listas SET name = ? where id = ?",
    [lista.name, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

Lista.delete = function(id, result){
  dbConn.query("delete from listas where id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};

module.exports = Lista;