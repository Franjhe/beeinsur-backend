const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const campaign_failService = require('./../services/campaign_fails.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaign_failService.getAll()
        .then(campaign_fails => res.json(campaign_fails))
        .catch(next);
}

function getById(req, res, next) {
    campaign_failService.getById(req.params.id)
        .then(campaign_fail => res.json(campaign_fail))
        .catch(next);
}

function create(req, res, next) {
    campaign_failService.create(req.body)
        .then(() => res.json({ message: 'campaign_fail created' }))
        .catch(next);
}

function update(req, res, next) {
    campaign_failService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaign_fail updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaign_failService.delete(req.params.id)
        .then(() => res.json({ message: 'campaign_fail deleted' }))
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
