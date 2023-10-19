const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const insurance_couponService = require('./../services/insurance_coupons.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_couponService.getAll()
        .then(insurance_coupons => res.json(insurance_coupons))
        .catch(next);
}

function getById(req, res, next) {
    insurance_couponService.getById(req.params.id)
        .then(insurance_coupon => res.json(insurance_coupon))
        .catch(next);
}

function create(req, res, next) {
    insurance_couponService.create(req.body)
        .then(() => res.json({ message: 'insurance_coupon created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_couponService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_coupon updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_couponService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_coupon deleted' }))
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
