const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const recover_passwordService = require('./../services/recover_password.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    recover_passwordService.getAll()
        .then(recover_passwords => res.json(recover_passwords))
        .catch(next);
}

function getById(req, res, next) {
    recover_passwordService.getById(req.params.id)
        .then(recover_password => res.json(recover_password))
        .catch(next);
}

function create(req, res, next) {
    recover_passwordService.create(req.body)
        .then(() => res.json({ message: 'recover_password created' }))
        .catch(next);
}

function update(req, res, next) {
    recover_passwordService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'recover_password updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    recover_passwordService.delete(req.params.id)
        .then(() => res.json({ message: 'recover_password deleted' }))
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
