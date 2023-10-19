const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const insurance_buyService = require('./../services/insurance_buy.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_buyService.getAll()
        .then(insurance_buys => res.json(insurance_buys))
        .catch(next);
}

function getById(req, res, next) {
    insurance_buyService.getById(req.params.id)
        .then(insurance_buy => res.json(insurance_buy))
        .catch(next);
}

function create(req, res, next) {
    insurance_buyService.create(req.body)
        .then(() => res.json({ message: 'insurance_buy created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_buyService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_buy updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_buyService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_buy deleted' }))
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
