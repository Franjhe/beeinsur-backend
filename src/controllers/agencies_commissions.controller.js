const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const agencies_commissionService = require('./../services/agencies_commissions.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    agencies_commissionService.getAll()
        .then(agencies_commissions => res.json(agencies_commissions))
        .catch(next);
}

function getById(req, res, next) {
    agencies_commissionService.getById(req.params.id)
        .then(agencies_commission => res.json(agencies_commission))
        .catch(next);
}

function create(req, res, next) {
    agencies_commissionService.create(req.body)
        .then(() => res.json({ message: 'agencies_commission created' }))
        .catch(next);
}

function update(req, res, next) {
    agencies_commissionService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'agencies_commission updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    agencies_commissionService.delete(req.params.id)
        .then(() => res.json({ message: 'agencies_commission deleted' }))
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
