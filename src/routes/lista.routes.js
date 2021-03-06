const express = require('express')
const router = express.Router()
const controller = require('../controllers/lista.controller');

// Retrieve all
router.get('/', controller.findAll);

// Retrieve a single with id
router.get('/:id', controller.findById);

// Create a new
router.post('/', controller.create);

// Update with id
router.put('/:id', controller.update);

// Delete with id
router.delete('/:id', controller.delete);

module.exports = router