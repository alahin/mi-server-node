var dbConn = require('../../config/db.config');

//Employee object create
var Producto = function(data){
  this.name = data.name;
  this.idLista = data.idLista;
};

Producto.findAll = function (idLista, result) {
  dbConn.query("select * from productos where id_lista = ?", idLista, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('Productos : ', res);
      result(null, res);
    }
  });
};

Producto.findById = function (id, result) {
  dbConn.query("select * from productos where id = ?", id, function (err, res) {
    if(err) {
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};

Producto.create = function (data, result) {
  dbConn.query("insert into productos set ?", data, function (err, res) {
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

Producto.update = function(id, data, result){
  dbConn.query("update productos SET name = ? where id = ?",
    [data.name, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

Producto.delete = function(id, result){
  dbConn.query("delete from productos where id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};

module.exports = Producto;