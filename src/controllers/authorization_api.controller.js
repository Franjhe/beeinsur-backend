const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorization_apiService = require('./../services/authorization_api.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    authorization_apiService.getAll()
        .then(authorization_apis => res.json(authorization_apis))
        .catch(next);
}

function getById(req, res, next) {
    authorization_apiService.getById(req.params.id)
        .then(authorization_api => res.json(authorization_api))
        .catch(next);
}

function create(req, res, next) {
    authorization_apiService.create(req.body)
        .then(() => res.json({ message: 'authorization_api created' }))
        .catch(next);
}

function update(req, res, next) {
    authorization_apiService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'authorization_api updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    authorization_apiService.delete(req.params.id)
        .then(() => res.json({ message: 'authorization_api deleted' }))
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
