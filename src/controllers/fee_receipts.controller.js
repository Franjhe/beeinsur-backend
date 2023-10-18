const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const fee_receiptService = require('./../services/fee_receipts.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    fee_receiptService.getAll()
        .then(fee_receipts => res.json(fee_receipts))
        .catch(next);
}

function getById(req, res, next) {
    fee_receiptService.getById(req.params.id)
        .then(fee_receipt => res.json(fee_receipt))
        .catch(next);
}

function create(req, res, next) {
    fee_receiptService.create(req.body)
        .then(() => res.json({ message: 'fee_receipt created' }))
        .catch(next);
}

function update(req, res, next) {
    fee_receiptService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'fee_receipt updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    fee_receiptService.delete(req.params.id)
        .then(() => res.json({ message: 'fee_receipt deleted' }))
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
