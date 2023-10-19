const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const fee_percentageService = require('./../services/fee_percentages.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    fee_percentageService.getAll()
        .then(fee_percentages => res.json(fee_percentages))
        .catch(next);
}

function getById(req, res, next) {
    fee_percentageService.getById(req.params.id)
        .then(fee_percentage => res.json(fee_percentage))
        .catch(next);
}

function create(req, res, next) {
    fee_percentageService.create(req.body)
        .then(() => res.json({ message: 'fee_percentage created' }))
        .catch(next);
}

function update(req, res, next) {
    fee_percentageService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'fee_percentage updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    fee_percentageService.delete(req.params.id)
        .then(() => res.json({ message: 'fee_percentage deleted' }))
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
