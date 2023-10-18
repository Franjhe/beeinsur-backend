const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const campaigns_push_detailService = require('./../services/campaigns_push_details.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    campaigns_push_detailService.getAll()
        .then(campaigns_push_details => res.json(campaigns_push_details))
        .catch(next);
}

function getById(req, res, next) {
    campaigns_push_detailService.getById(req.params.id)
        .then(campaigns_push_detail => res.json(campaigns_push_detail))
        .catch(next);
}

function create(req, res, next) {
    campaigns_push_detailService.create(req.body)
        .then(() => res.json({ message: 'campaigns_push_detail created' }))
        .catch(next);
}

function update(req, res, next) {
    campaigns_push_detailService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'campaigns_push_detail updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    campaigns_push_detailService.delete(req.params.id)
        .then(() => res.json({ message: 'campaigns_push_detail deleted' }))
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
