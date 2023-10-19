const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const campaigns_pushService = require('./../services/campaigns_push.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaigns_pushService.getAll()
        .then(campaigns_pushs => res.json(campaigns_pushs))
        .catch(next);
}

function getById(req, res, next) {
    campaigns_pushService.getById(req.params.id)
        .then(campaigns_push => res.json(campaigns_push))
        .catch(next);
}

function create(req, res, next) {
    campaigns_pushService.create(req.body)
        .then(() => res.json({ message: 'campaigns_push created' }))
        .catch(next);
}

function update(req, res, next) {
    campaigns_pushService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaigns_push updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaigns_pushService.delete(req.params.id)
        .then(() => res.json({ message: 'campaigns_push deleted' }))
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
