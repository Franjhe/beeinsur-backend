const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const countrieService = require('./../services/countries.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    countrieService.getAll()
        .then(countries => res.json(countries))
        .catch(next);
}

function getById(req, res, next) {
    countrieService.getById(req.params.id)
        .then(countrie => res.json(countrie))
        .catch(next);
}

function create(req, res, next) {
    countrieService.create(req.body)
        .then(() => res.json({ message: 'countrie created' }))
        .catch(next);
}

function update(req, res, next) {
    countrieService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'countrie updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    countrieService.delete(req.params.id)
        .then(() => res.json({ message: 'countrie deleted' }))
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
