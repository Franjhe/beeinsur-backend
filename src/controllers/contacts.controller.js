const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const contactService = require('./../services/contacts.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    contactService.getAll()
        .then(contacts => res.json(contacts))
        .catch(next);
}

function getById(req, res, next) {
    contactService.getById(req.params.id)
        .then(contact => res.json(contact))
        .catch(next);
}

function create(req, res, next) {
    contactService.create(req.body)
        .then(() => res.json({ message: 'contact created' }))
        .catch(next);
}

function update(req, res, next) {
    contactService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'contact updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    contactService.delete(req.params.id)
        .then(() => res.json({ message: 'contact deleted' }))
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
