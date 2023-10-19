const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const insurance_beneficiaries_tempService = require('./../services/insurance_beneficiaries_temp.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_beneficiaries_tempService.getAll()
        .then(insurance_beneficiaries_temps => res.json(insurance_beneficiaries_temps))
        .catch(next);
}

function getById(req, res, next) {
    insurance_beneficiaries_tempService.getById(req.params.id)
        .then(insurance_beneficiaries_temp => res.json(insurance_beneficiaries_temp))
        .catch(next);
}

function create(req, res, next) {
    insurance_beneficiaries_tempService.create(req.body)
        .then(() => res.json({ message: 'insurance_beneficiaries_temp created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_beneficiaries_tempService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_beneficiaries_temp updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_beneficiaries_tempService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_beneficiaries_temp deleted' }))
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
