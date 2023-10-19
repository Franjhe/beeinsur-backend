const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const declaration_healthService = require('./../services/declaration_health.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    declaration_healthService.getAll()
        .then(declaration_healths => res.json(declaration_healths))
        .catch(next);
}

function getById(req, res, next) {
    declaration_healthService.getById(req.params.id)
        .then(declaration_health => res.json(declaration_health))
        .catch(next);
}

function create(req, res, next) {
    declaration_healthService.create(req.body)
        .then(() => res.json({ message: 'declaration_health created' }))
        .catch(next);
}

function update(req, res, next) {
    declaration_healthService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'declaration_health updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    declaration_healthService.delete(req.params.id)
        .then(() => res.json({ message: 'declaration_health deleted' }))
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
