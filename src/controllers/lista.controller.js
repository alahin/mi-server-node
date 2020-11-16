const Lista = require('../models/lista.model');

exports.findAll = function(req, res) {
  Lista.findAll(function(err, data) {
    if (err) return res.send(err);
    return res.send(data);
  });
};

exports.findById = function(req, res) {
  Lista.findById(req.params.id, function(err, data) {
    if (err) return res.send(err);
    return res.json(data);
  });
};

exports.create = function(req, res) {
  const new_lista = new Lista(req.body);

  //handles null error
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    return res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    console.log("va a hacer la petición");
    Lista.create(new_lista, function(err, data) {
      if (err) return res.send(err);
      return res.json({error:false, message:"Lista added successfully!", data: data});
    });
  }
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Lista.update(req.params.id, new Lista(req.body), function(err, data) {
      if (err) return res.send(err);
      return res.json({ error:false, message: 'Lista successfully updated' });
    });
  }
};

exports.delete = function(req, res) {
  Lista.delete( req.params.id, function(err, data) {
    if (err) return res.send(err);
    return res.json({ error:false, message: 'Lista successfully deleted' });
  });
};