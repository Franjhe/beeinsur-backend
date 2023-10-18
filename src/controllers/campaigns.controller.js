const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const campaignService = require('./../services/campaigns.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaignService.getAll()
        .then(campaigns => res.json(campaigns))
        .catch(next);
}

function getById(req, res, next) {
    campaignService.getById(req.params.id)
        .then(campaign => res.json(campaign))
        .catch(next);
}

function create(req, res, next) {
    campaignService.create(req.body)
        .then(() => res.json({ message: 'campaign created' }))
        .catch(next);
}

function update(req, res, next) {
    campaignService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaign updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaignService.delete(req.params.id)
        .then(() => res.json({ message: 'campaign deleted' }))
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
