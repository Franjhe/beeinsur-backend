const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const campaign_sendService = require('./../services/campaign_send.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaign_sendService.getAll()
        .then(campaign_sends => res.json(campaign_sends))
        .catch(next);
}

function getById(req, res, next) {
    campaign_sendService.getById(req.params.id)
        .then(campaign_send => res.json(campaign_send))
        .catch(next);
}

function create(req, res, next) {
    campaign_sendService.create(req.body)
        .then(() => res.json({ message: 'campaign_send created' }))
        .catch(next);
}

function update(req, res, next) {
    campaign_sendService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaign_send updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaign_sendService.delete(req.params.id)
        .then(() => res.json({ message: 'campaign_send deleted' }))
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
