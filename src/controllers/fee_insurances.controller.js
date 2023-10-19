const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const fee_insuranceService = require('./../services/fee_insurances.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    fee_insuranceService.getAll()
        .then(fee_insurances => res.json(fee_insurances))
        .catch(next);
}

function getById(req, res, next) {
    fee_insuranceService.getById(req.params.id)
        .then(fee_insurance => res.json(fee_insurance))
        .catch(next);
}

function create(req, res, next) {
    fee_insuranceService.create(req.body)
        .then(() => res.json({ message: 'fee_insurance created' }))
        .catch(next);
}

function update(req, res, next) {
    fee_insuranceService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'fee_insurance updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    fee_insuranceService.delete(req.params.id)
        .then(() => res.json({ message: 'fee_insurance deleted' }))
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
