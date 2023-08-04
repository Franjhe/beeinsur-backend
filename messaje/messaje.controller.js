const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const messajeService = require('./messaje.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    messajeService.getAll()
        .then(messaje => res.json(messaje))
        .catch(next);
}

function getById(req, res, next) {
    messajeService.getById(req.params.id)
        .then(messaje => res.json(messaje))
        .catch(next);
}

function create(req, res, next) {
    messajeService.create(req.body)
        .then(() => res.json({ message: 'Messaje created' }))
        .catch(next);
}

function update(req, res, next) {
    messajeService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Messaje updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    messajeService.delete(req.params.id)
        .then(() => res.json({ message: 'Messaje deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        content: Joi.string().valid(Joi.ref('content')).required(),
        author: Joi.string().valid(Joi.ref('author')).required(),
        active: Joi.boolean().valid(Joi.ref('active')).required(),

    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        content: Joi.string().empty(''),
        active: Joi.boolean().empty(''),
    }).with();
    validateRequest(req, next, schema);
}
