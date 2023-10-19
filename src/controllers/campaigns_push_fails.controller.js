const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const campaigns_push_failService = require('./../services/campaigns_push_fails.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaigns_push_failService.getAll()
        .then(campaigns_push_fails => res.json(campaigns_push_fails))
        .catch(next);
}

function getById(req, res, next) {
    campaigns_push_failService.getById(req.params.id)
        .then(campaigns_push_fail => res.json(campaigns_push_fail))
        .catch(next);
}

function create(req, res, next) {
    campaigns_push_failService.create(req.body)
        .then(() => res.json({ message: 'campaigns_push_fail created' }))
        .catch(next);
}

function update(req, res, next) {
    campaigns_push_failService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaigns_push_fail updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaigns_push_failService.delete(req.params.id)
        .then(() => res.json({ message: 'campaigns_push_fail deleted' }))
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
