const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const advisersService = require('./../services/advisers.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    advisersService.getAll()
        .then(adviserss => res.json(adviserss))
        .catch(next);
}

function getById(req, res, next) {
    advisersService.getById(req.params.id)
        .then(advisers => res.json(advisers))
        .catch(next);
}

function create(req, res, next) {
    advisersService.create(req.body)
        .then(() => res.json({ message: 'advisers created' }))
        .catch(next);
}

function update(req, res, next) {
    advisersService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'advisers updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    advisersService.delete(req.params.id)
        .then(() => res.json({ message: 'advisers deleted' }))
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
