const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const quoterService = require('./../services/quoters.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    quoterService.getAll()
        .then(quoters => res.json(quoters))
        .catch(next);
}

function getById(req, res, next) {
    quoterService.getById(req.params.id)
        .then(quoter => res.json(quoter))
        .catch(next);
}

function create(req, res, next) {
    quoterService.create(req.body)
        .then(() => res.json({ message: 'quoter created' }))
        .catch(next);
}

function update(req, res, next) {
    quoterService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'quoter updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    quoterService.delete(req.params.id)
        .then(() => res.json({ message: 'quoter deleted' }))
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
