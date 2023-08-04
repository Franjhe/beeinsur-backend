const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const proyectService = require('./proyect.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    proyectService.getAll()
        .then(proyects => res.json(proyects))
        .catch(next);
}

function getById(req, res, next) {
    proyectService.getById(req.params.id)
        .then(proyect => res.json(proyect))
        .catch(next);
}

function create(req, res, next) {
    proyectService.create(req.body)
        .then(() => res.json({ message: 'Proyect created' }))
        .catch(next);
}

function update(req, res, next) {
    proyectService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Proyect updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    proyectService.delete(req.params.id)
        .then(() => res.json({ message: 'Proyect deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        description: Joi.string().valid(Joi.ref('description')).required(),
        ambit: Joi.string().valid(Joi.ref('ambit')).required()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        description: Joi.string().empty(''),
        ambit: Joi.string().empty(''),
    }).with();
    validateRequest(req, next, schema);
}
