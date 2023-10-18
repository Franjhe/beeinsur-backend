const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const subscribers_beneficiarieService = require('./../services/subscribers_beneficiaries.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    subscribers_beneficiarieService.getAll()
        .then(subscribers_beneficiaries => res.json(subscribers_beneficiaries))
        .catch(next);
}

function getById(req, res, next) {
    subscribers_beneficiarieService.getById(req.params.id)
        .then(subscribers_beneficiarie => res.json(subscribers_beneficiarie))
        .catch(next);
}

function create(req, res, next) {
    subscribers_beneficiarieService.create(req.body)
        .then(() => res.json({ message: 'subscribers_beneficiarie created' }))
        .catch(next);
}

function update(req, res, next) {
    subscribers_beneficiarieService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'subscribers_beneficiarie updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    subscribers_beneficiarieService.delete(req.params.id)
        .then(() => res.json({ message: 'subscribers_beneficiarie deleted' }))
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
