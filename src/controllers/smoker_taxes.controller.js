const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const smoker_taxeService = require('./../services/smoker_taxes.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    smoker_taxeService.getAll()
        .then(smoker_taxes => res.json(smoker_taxes))
        .catch(next);
}

function getById(req, res, next) {
    smoker_taxeService.getById(req.params.id)
        .then(smoker_taxe => res.json(smoker_taxe))
        .catch(next);
}

function create(req, res, next) {
    smoker_taxeService.create(req.body)
        .then(() => res.json({ message: 'smoker_taxe created' }))
        .catch(next);
}

function update(req, res, next) {
    smoker_taxeService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'smoker_taxe updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    smoker_taxeService.delete(req.params.id)
        .then(() => res.json({ message: 'smoker_taxe deleted' }))
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
