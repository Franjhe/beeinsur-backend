const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const payment_transactionService = require('./../services/payment_transactions.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    payment_transactionService.getAll()
        .then(payment_transactions => res.json(payment_transactions))
        .catch(next);
}

function getById(req, res, next) {
    payment_transactionService.getById(req.params.id)
        .then(payment_transaction => res.json(payment_transaction))
        .catch(next);
}

function create(req, res, next) {
    payment_transactionService.create(req.body)
        .then(() => res.json({ message: 'payment_transaction created' }))
        .catch(next);
}

function update(req, res, next) {
    payment_transactionService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'payment_transaction updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    payment_transactionService.delete(req.params.id)
        .then(() => res.json({ message: 'payment_transaction deleted' }))
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
