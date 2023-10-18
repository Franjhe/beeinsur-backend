const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const insurance_beneficiariesService = require('./../services/insurance_beneficiaries.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_beneficiariesService.getAll()
        .then(insurance_beneficiariess => res.json(insurance_beneficiariess))
        .catch(next);
}

function getById(req, res, next) {
    insurance_beneficiariesService.getById(req.params.id)
        .then(insurance_beneficiaries => res.json(insurance_beneficiaries))
        .catch(next);
}

function create(req, res, next) {
    insurance_beneficiariesService.create(req.body)
        .then(() => res.json({ message: 'insurance_beneficiaries created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_beneficiariesService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_beneficiaries updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_beneficiariesService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_beneficiaries deleted' }))
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
