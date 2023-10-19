const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const agencieService = require('./../services/agencies.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    agencieService.getAll()
        .then(agencies => res.json(agencies))
        .catch(next);
}

function getById(req, res, next) {
    agencieService.getById(req.params.id)
        .then(agencie => res.json(agencie))
        .catch(next);
}

function create(req, res, next) {
    agencieService.create(req.body)
        .then(() => res.json({ message: 'agencie created' }))
        .catch(next);
}

function update(req, res, next) {
    agencieService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'agencie updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    agencieService.delete(req.params.id)
        .then(() => res.json({ message: 'agencie deleted' }))
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
