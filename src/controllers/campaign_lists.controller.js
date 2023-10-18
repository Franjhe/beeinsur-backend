const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const campaign_listService = require('./../services/campaign_lists.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaign_listService.getAll()
        .then(campaign_lists => res.json(campaign_lists))
        .catch(next);
}

function getById(req, res, next) {
    campaign_listService.getById(req.params.id)
        .then(campaign_list => res.json(campaign_list))
        .catch(next);
}

function create(req, res, next) {
    campaign_listService.create(req.body)
        .then(() => res.json({ message: 'campaign_list created' }))
        .catch(next);
}

function update(req, res, next) {
    campaign_listService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaign_list updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaign_listService.delete(req.params.id)
        .then(() => res.json({ message: 'campaign_list deleted' }))
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
