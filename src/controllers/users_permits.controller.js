const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const users_permitService = require('./../services/users_permits.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    users_permitService.getAll()
        .then(users_permits => res.json(users_permits))
        .catch(next);
}

function getById(req, res, next) {
    users_permitService.getById(req.params.id)
        .then(users_permit => res.json(users_permit))
        .catch(next);
}

function create(req, res, next) {
    users_permitService.create(req.body)
        .then(() => res.json({ message: 'users_permit created' }))
        .catch(next);
}

function update(req, res, next) {
    users_permitService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'users_permit updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    users_permitService.delete(req.params.id)
        .then(() => res.json({ message: 'users_permit deleted' }))
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
