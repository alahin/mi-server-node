const express = require('express')
const router = express.Router()
const listaController = require('../controllers/lista.controller');

// Retrieve all
router.get('/', listaController.findAll);

// Retrieve a single with id
router.get('/:id', listaController.findById);

// Create a new
router.post('/', listaController.create);

// Update with id
router.put('/:id', listaController.update);

// Delete with id
router.delete('/:id', listaController.delete);

module.exports = router