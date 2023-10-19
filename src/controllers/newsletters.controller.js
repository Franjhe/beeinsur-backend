const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const newsletterService = require('./../services/newsletters.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    newsletterService.getAll()
        .then(newsletters => res.json(newsletters))
        .catch(next);
}

function getById(req, res, next) {
    newsletterService.getById(req.params.id)
        .then(newsletter => res.json(newsletter))
        .catch(next);
}

function create(req, res, next) {
    newsletterService.create(req.body)
        .then(() => res.json({ message: 'newsletter created' }))
        .catch(next);
}

function update(req, res, next) {
    newsletterService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'newsletter updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    newsletterService.delete(req.params.id)
        .then(() => res.json({ message: 'newsletter deleted' }))
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
