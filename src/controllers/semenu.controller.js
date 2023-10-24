const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const semenuService = require('./../services/semenu.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
  semenuService.getAll()
        .then(semenu => res.json(semenu))
        .catch(next);
}

function getById(req, res, next) {
    semenuService.getById(req.params.id)
        .then(semenu => res.json(semenu))
        .catch(next);
}

function create(req, res, next) {
    semenuService.create(req.body)
        .then(() => res.json({ message: 'semenu created' }))
        .catch(next);
}

function update(req, res, next) {
    semenuService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'semenu updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    semenuService.delete(req.params.id)
        .then(() => res.json({ message: 'semenu deleted' }))
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
