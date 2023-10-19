const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const agencies_ibo_productService = require('./../services/agencies_ibo_products.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    agencies_ibo_productService.getAll()
        .then(agencies_ibo_products => res.json(agencies_ibo_products))
        .catch(next);
}

function getById(req, res, next) {
    agencies_ibo_productService.getById(req.params.id)
        .then(agencies_ibo_product => res.json(agencies_ibo_product))
        .catch(next);
}

function create(req, res, next) {
    agencies_ibo_productService.create(req.body)
        .then(() => res.json({ message: 'agencies_ibo_product created' }))
        .catch(next);
}

function update(req, res, next) {
    agencies_ibo_productService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'agencies_ibo_product updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    agencies_ibo_productService.delete(req.params.id)
        .then(() => res.json({ message: 'agencies_ibo_product deleted' }))
        .catch(next);
}

// schema functions

function updateSchema(req, res, next) {
    const schema = Joi.object({
        description: Joi.string().empty(''),
        description_large: Joi.string().empty(''),
        quantity: Joi.number().empty(''),
        ambit: Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}
