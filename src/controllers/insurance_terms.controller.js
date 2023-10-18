const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const insurance_termService = require('./../services/insurance_terms.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_termService.getAll()
        .then(insurance_terms => res.json(insurance_terms))
        .catch(next);
}

function getById(req, res, next) {
    insurance_termService.getById(req.params.id)
        .then(insurance_term => res.json(insurance_term))
        .catch(next);
}

function create(req, res, next) {
    insurance_termService.create(req.body)
        .then(() => res.json({ message: 'insurance_term created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_termService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_term updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_termService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_term deleted' }))
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
