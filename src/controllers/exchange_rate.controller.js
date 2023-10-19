const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const exchange_rateService = require('./../services/exchange_rate.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    exchange_rateService.getAll()
        .then(exchange_rates => res.json(exchange_rates))
        .catch(next);
}

function getById(req, res, next) {
    exchange_rateService.getById(req.params.id)
        .then(exchange_rate => res.json(exchange_rate))
        .catch(next);
}

function create(req, res, next) {
    exchange_rateService.create(req.body)
        .then(() => res.json({ message: 'exchange_rate created' }))
        .catch(next);
}

function update(req, res, next) {
    exchange_rateService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'exchange_rate updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    exchange_rateService.delete(req.params.id)
        .then(() => res.json({ message: 'exchange_rate deleted' }))
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
