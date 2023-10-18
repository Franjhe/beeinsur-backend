const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const sectionService = require('./../services/sections.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    sectionService.getAll()
        .then(sections => res.json(sections))
        .catch(next);
}

function getById(req, res, next) {
    sectionService.getById(req.params.id)
        .then(section => res.json(section))
        .catch(next);
}

function create(req, res, next) {
    sectionService.create(req.body)
        .then(() => res.json({ message: 'section created' }))
        .catch(next);
}

function update(req, res, next) {
    sectionService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'section updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    sectionService.delete(req.params.id)
        .then(() => res.json({ message: 'section deleted' }))
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
