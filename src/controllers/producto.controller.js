const Producto = require('../models/producto.model');

exports.findAll = function(req, res) {
  Producto.findAll(req.params.idLista, function(err, data) {
    if (err) return res.send(err);
    return res.send(data);
  });
};

exports.findById = function(req, res) {
  Producto.findById(req.params.id, function(err, data) {
    if (err) return res.send(err);
    return res.json(data);
  });
};

exports.create = function(req, res) {
  const data = new Producto(req.body);

  //handles null error
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    return res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Lista.create(data, function(err, data) {
      if (err) return res.send(err);
      return res.json({error:false, message:"Added successfully!", data: data});
    });
  }
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Producto.update(req.params.id, new Producto(req.body), function(err, data) {
      if (err) return res.send(err);
      return res.json({ error:false, message: 'Successfully updated' });
    });
  }
};

exports.delete = function(req, res) {
  Lista.delete( req.params.id, function(err, data) {
    if (err) return res.send(err);
    return res.json({ error:false, message: 'Successfully deleted' });
  });
};