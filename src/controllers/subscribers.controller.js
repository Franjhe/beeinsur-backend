const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const subscriberService = require('./../services/subscribers.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    subscriberService.getAll()
        .then(subscribers => res.json(subscribers))
        .catch(next);
}

function getById(req, res, next) {
    subscriberService.getById(req.params.id)
        .then(subscriber => res.json(subscriber))
        .catch(next);
}

function create(req, res, next) {
    subscriberService.create(req.body)
        .then(() => res.json({ message: 'subscriber created' }))
        .catch(next);
}

function update(req, res, next) {
    subscriberService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'subscriber updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    subscriberService.delete(req.params.id)
        .then(() => res.json({ message: 'subscriber deleted' }))
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
