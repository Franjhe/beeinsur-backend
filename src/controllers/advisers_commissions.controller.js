const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const advisers_commissionsService = require('./../services/advisers_commissions.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    advisers_commissionsService.getAll()
        .then(advisers_commissionss => res.json(advisers_commissionss))
        .catch(next);
}

function getById(req, res, next) {
    advisers_commissionsService.getById(req.params.id)
        .then(advisers_commissions => res.json(advisers_commissions))
        .catch(next);
}

function create(req, res, next) {
    advisers_commissionsService.create(req.body)
        .then(() => res.json({ message: 'advisers_commissions created' }))
        .catch(next);
}

function update(req, res, next) {
    advisers_commissionsService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'advisers_commissions updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    advisers_commissionsService.delete(req.params.id)
        .then(() => res.json({ message: 'advisers_commissions deleted' }))
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
