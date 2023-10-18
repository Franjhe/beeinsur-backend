const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const campaigns_push_sendService = require('./../services/campaigns_push_send.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaigns_push_sendService.getAll()
        .then(campaigns_push_sends => res.json(campaigns_push_sends))
        .catch(next);
}

function getById(req, res, next) {
    campaigns_push_sendService.getById(req.params.id)
        .then(campaigns_push_send => res.json(campaigns_push_send))
        .catch(next);
}

function create(req, res, next) {
    campaigns_push_sendService.create(req.body)
        .then(() => res.json({ message: 'campaigns_push_send created' }))
        .catch(next);
}

function update(req, res, next) {
    campaigns_push_sendService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaigns_push_send updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaigns_push_sendService.delete(req.params.id)
        .then(() => res.json({ message: 'campaigns_push_send deleted' }))
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
