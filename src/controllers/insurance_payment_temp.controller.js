const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const insurance_payment_tempService = require('./../services/insurance_payment_temp.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_payment_tempService.getAll()
        .then(insurance_payment_temps => res.json(insurance_payment_temps))
        .catch(next);
}

function getById(req, res, next) {
    insurance_payment_tempService.getById(req.params.id)
        .then(insurance_payment_temp => res.json(insurance_payment_temp))
        .catch(next);
}

function create(req, res, next) {
    insurance_payment_tempService.create(req.body)
        .then(() => res.json({ message: 'insurance_payment_temp created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_payment_tempService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_payment_temp updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_payment_tempService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_payment_temp deleted' }))
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
