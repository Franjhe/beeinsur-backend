const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const to_sendService = require('./../services/to_send.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    to_sendService.getAll()
        .then(to_sends => res.json(to_sends))
        .catch(next);
}

function getById(req, res, next) {
    to_sendService.getById(req.params.id)
        .then(to_send => res.json(to_send))
        .catch(next);
}

function create(req, res, next) {
    to_sendService.create(req.body)
        .then(() => res.json({ message: 'to_send created' }))
        .catch(next);
}

function update(req, res, next) {
    to_sendService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'to_send updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    to_sendService.delete(req.params.id)
        .then(() => res.json({ message: 'to_send deleted' }))
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
