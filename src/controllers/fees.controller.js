const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const feeService = require('./../services/fees.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    feeService.getAll()
        .then(fees => res.json(fees))
        .catch(next);
}

function getById(req, res, next) {
    feeService.getById(req.params.id)
        .then(fee => res.json(fee))
        .catch(next);
}

function create(req, res, next) {
    feeService.create(req.body)
        .then(() => res.json({ message: 'fee created' }))
        .catch(next);
}

function update(req, res, next) {
    feeService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'fee updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    feeService.delete(req.params.id)
        .then(() => res.json({ message: 'fee deleted' }))
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
