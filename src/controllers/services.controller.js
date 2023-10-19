const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const serviceService = require('./../services/services.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    serviceService.getAll()
        .then(services => res.json(services))
        .catch(next);
}

function getById(req, res, next) {
    serviceService.getById(req.params.id)
        .then(service => res.json(service))
        .catch(next);
}

function create(req, res, next) {
    serviceService.create(req.body)
        .then(() => res.json({ message: 'service created' }))
        .catch(next);
}

function update(req, res, next) {
    serviceService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'service updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    serviceService.delete(req.params.id)
        .then(() => res.json({ message: 'service deleted' }))
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
